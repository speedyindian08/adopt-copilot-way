import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MessageCircle, X, Send, Loader2, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface LeadData {
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
}

const BOOKING_URL = "https://sales-enterprisessoftwaresolutions98.zohobookings.com/portal-embed#/4630761000000794002";
const ZOHO_WEBHOOK_URL = ""; // Add your Zoho Flow webhook URL here

const SCHEDULING_KEYWORDS = ["yes", "book", "schedule a call", "talk to someone", "schedule", "speak with", "meeting", "appointment"];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm the ESS Copilot Academy Assistant. I can help you understand our training packages, pricing, delivery options, and which program is best for your team. If you'd like, I can also help you schedule time with our team.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingClicked, setBookingClicked] = useState(false);
  const [bookingCompleted, setBookingCompleted] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>({
    name: null,
    email: null,
    phone: null,
    company: null,
  });
  const [awaitingLeadInfo, setAwaitingLeadInfo] = useState<"name" | "email" | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const detectSchedulingIntent = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    return SCHEDULING_KEYWORDS.some(keyword => lowerText.includes(keyword));
  };

  const extractLeadInfo = (text: string, currentMessages: Message[]) => {
    // Try to extract email from text
    const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      setLeadData(prev => ({ ...prev, email: emailMatch[0] }));
    }

    // Try to extract phone from text
    const phoneMatch = text.match(/[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/);
    if (phoneMatch) {
      setLeadData(prev => ({ ...prev, phone: phoneMatch[0] }));
    }
  };

  const sendToZohoWebhook = useCallback(async () => {
    if (!ZOHO_WEBHOOK_URL) {
      console.log("Zoho webhook URL not configured");
      return;
    }

    const transcript = messages.map(m => `${m.role}: ${m.content}`).join("\n\n");
    
    const payload = {
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      company: leadData.company,
      lead_source: "Copilot Academy AI Agent",
      page_url: "https://adopt-copilot-way.lovable.app",
      interested_in: "Copilot Academy",
      booking_clicked: bookingClicked,
      booking_completed: bookingCompleted,
      transcript: transcript,
    };

    try {
      await fetch(ZOHO_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      console.log("Lead data sent to Zoho CRM");
    } catch (error) {
      console.error("Failed to send to Zoho webhook:", error);
    }
  }, [messages, leadData, bookingClicked, bookingCompleted]);

  // Send data to Zoho when chat closes
  useEffect(() => {
    if (!isOpen && messages.length > 1 && ZOHO_WEBHOOK_URL) {
      sendToZohoWebhook();
    }
  }, [isOpen, messages.length, sendToZohoWebhook]);

  const handleBookingClose = () => {
    setShowBooking(false);
    if (!bookingCompleted) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "No problem — let me know if you need another time.",
      }]);
    }
  };

  const openBookingCalendar = () => {
    setBookingClicked(true);
    setShowBooking(true);
    setMessages(prev => [...prev, {
      role: "assistant",
      content: "I'm opening the scheduling calendar for you now. 📅",
    }]);
  };

  const handleSchedulingIntent = () => {
    // If we don't have name or email, ask for it first (only once)
    if (!leadData.name && awaitingLeadInfo !== "name") {
      setAwaitingLeadInfo("name");
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Great! Before I open the calendar, what's your name?",
      }]);
      return;
    }

    if (!leadData.email && awaitingLeadInfo !== "email" && leadData.name) {
      setAwaitingLeadInfo("email");
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "What's the best email to send confirmation to?",
      }]);
      return;
    }

    // Open the booking calendar
    openBookingCalendar();
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    const currentInput = input;
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Extract any lead info from the message
    extractLeadInfo(currentInput, messages);

    // Handle lead info collection
    if (awaitingLeadInfo === "name") {
      const skipWords = ["skip", "no", "pass", "next"];
      if (!skipWords.some(w => currentInput.toLowerCase().includes(w))) {
        setLeadData(prev => ({ ...prev, name: currentInput.trim() }));
      }
      setAwaitingLeadInfo("email");
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "What's the best email to send confirmation to?",
      }]);
      return;
    }

    if (awaitingLeadInfo === "email") {
      const skipWords = ["skip", "no", "pass", "next"];
      if (!skipWords.some(w => currentInput.toLowerCase().includes(w))) {
        const emailMatch = currentInput.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
        if (emailMatch) {
          setLeadData(prev => ({ ...prev, email: emailMatch[0] }));
        } else {
          setLeadData(prev => ({ ...prev, email: currentInput.trim() }));
        }
      }
      setAwaitingLeadInfo(null);
      openBookingCalendar();
      return;
    }

    // Check for scheduling intent
    if (detectSchedulingIntent(currentInput)) {
      handleSchedulingIntent();
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat-support", {
        body: { messages: [...messages, userMessage] },
      });

      if (error) throw error;

      if (data?.content) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
        
        // Check if AI response suggests scheduling
        if (data.content.toLowerCase().includes("schedule") || 
            data.content.toLowerCase().includes("book a call")) {
          // Don't auto-open, let user confirm
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const markBookingComplete = () => {
    setBookingCompleted(true);
    setShowBooking(false);
    setMessages(prev => [...prev, {
      role: "assistant",
      content: "You're all set — looking forward to speaking with you! 🎉",
    }]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-card border border-border rounded-lg shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Copilot Academy Support</h3>
              <p className="text-xs opacity-90">We're here to help!</p>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-4 py-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Action - Schedule Button */}
          <div className="px-4 pb-2">
            <Button
              onClick={() => handleSchedulingIntent()}
              variant="outline"
              size="sm"
              className="w-full text-xs gap-2"
            >
              <Calendar className="h-3 w-3" />
              Schedule a Call
            </Button>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="max-w-4xl h-[80vh] p-0">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-semibold">Schedule Your Session</h2>
              <div className="flex gap-2">
                <Button
                  onClick={markBookingComplete}
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  I've Booked
                </Button>
                <Button
                  onClick={handleBookingClose}
                  variant="ghost"
                  size="sm"
                >
                  Close
                </Button>
              </div>
            </div>
            <iframe
              src={BOOKING_URL}
              className="flex-1 w-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
