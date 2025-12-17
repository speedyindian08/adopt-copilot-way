/**
 * ESS Copilot Academy - Static Export JavaScript
 * Includes: FAQ Accordion, Contact Form, Chatbot Widget
 */

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // FAQ Accordion
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ============================================
    // Contact Form Handling
    // ============================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value || null,
                company: document.getElementById('company').value || null,
                message: document.getElementById('message').value
            };
            
            // Replace with your form handling endpoint
            // Example: Send to Zoho CRM webhook
            const FORM_WEBHOOK_URL = 'YOUR_FORM_WEBHOOK_URL';
            
            try {
                const response = await fetch(FORM_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    alert('Thank you for your message! We\'ll be in touch soon.');
                    contactForm.reset();
                } else {
                    alert('There was an error submitting your message. Please try again.');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('There was an error submitting your message. Please try again.');
            }
        });
    }

    // ============================================
    // Chatbot Widget
    // ============================================
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('send-btn');
    const scheduleBtn = document.getElementById('schedule-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const bookingContainer = document.getElementById('booking-container');
    const bookingIframe = document.getElementById('booking-iframe');
    const closeBookingBtn = document.getElementById('close-booking');
    
    // Configuration
    const ZOHO_BOOKING_URL = 'https://sales-enterprisessoftwaresolutions98.zohobookings.com/portal-embed#/4630761000000794002';
    const CHAT_API_URL = 'YOUR_CHAT_API_URL'; // Replace with your chat API endpoint
    const ZOHO_WEBHOOK_URL = 'YOUR_ZOHO_WEBHOOK_URL'; // Replace with your Zoho webhook
    
    // State
    let isOpen = false;
    let messages = [];
    let leadData = {
        name: null,
        email: null,
        phone: null,
        company: null
    };
    let bookingClicked = false;
    let bookingCompleted = false;
    let awaitingLeadInfo = null; // 'name' | 'email' | null
    
    // Scheduling keywords
    const SCHEDULING_KEYWORDS = ['yes', 'book', 'schedule a call', 'talk to someone', 'schedule', 'speak with', 'meeting', 'appointment'];
    
    // Toggle chatbot window
    function toggleChatbot() {
        isOpen = !isOpen;
        chatbotToggle.classList.toggle('active', isOpen);
        chatbotWindow.classList.toggle('active', isOpen);
    }
    
    chatbotToggle.addEventListener('click', toggleChatbot);
    chatbotClose.addEventListener('click', toggleChatbot);
    
    // Add message to chat
    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.innerHTML = `<p>${content}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        messages.push({
            role: isUser ? 'user' : 'assistant',
            content: content
        });
    }
    
    // Show typing indicator
    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        return typingDiv;
    }
    
    // Extract lead info from message
    function extractLeadInfo(message) {
        // Email regex
        const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
        const emailMatch = message.match(emailRegex);
        if (emailMatch) {
            leadData.email = emailMatch[0];
        }
        
        // Phone regex
        const phoneRegex = /[\d\s()+-]{10,}/;
        const phoneMatch = message.match(phoneRegex);
        if (phoneMatch) {
            leadData.phone = phoneMatch[0].trim();
        }
    }
    
    // Check for scheduling intent
    function hasSchedulingIntent(message) {
        const lowerMessage = message.toLowerCase();
        return SCHEDULING_KEYWORDS.some(keyword => lowerMessage.includes(keyword));
    }
    
    // Open booking calendar
    function openBooking() {
        bookingClicked = true;
        bookingIframe.src = ZOHO_BOOKING_URL;
        bookingContainer.style.display = 'block';
        addMessage("Great! I've opened our booking calendar below. Please select a time that works for you.");
    }
    
    // Close booking calendar
    function closeBooking(completed = false) {
        bookingContainer.style.display = 'none';
        bookingIframe.src = '';
        
        if (completed) {
            bookingCompleted = true;
            addMessage("You're all set — looking forward to speaking with you!");
        } else {
            addMessage("No problem — let me know if you need another time or have any questions.");
        }
    }
    
    closeBookingBtn.addEventListener('click', () => closeBooking(false));
    scheduleBtn.addEventListener('click', openBooking);
    
    // Send message to API
    async function sendMessage(userMessage) {
        if (!userMessage.trim()) return;
        
        // Extract any lead info from the message
        extractLeadInfo(userMessage);
        
        // Handle lead info collection
        if (awaitingLeadInfo === 'name') {
            leadData.name = userMessage.trim();
            awaitingLeadInfo = 'email';
            addMessage(userMessage, true);
            addMessage("Thanks! And what's your email address? (This helps us send you confirmation details)");
            return;
        }
        
        if (awaitingLeadInfo === 'email') {
            if (userMessage.includes('@')) {
                leadData.email = userMessage.trim();
                awaitingLeadInfo = null;
                addMessage(userMessage, true);
                openBooking();
            } else if (userMessage.toLowerCase() === 'skip') {
                awaitingLeadInfo = null;
                addMessage(userMessage, true);
                openBooking();
            } else {
                addMessage(userMessage, true);
                addMessage("That doesn't look like a valid email. Please enter your email or type 'skip' to continue.");
            }
            return;
        }
        
        // Check for scheduling intent
        if (hasSchedulingIntent(userMessage)) {
            addMessage(userMessage, true);
            
            // Check if we need to collect lead info first
            if (!leadData.name) {
                awaitingLeadInfo = 'name';
                addMessage("Before I open the calendar, could I get your name?");
                return;
            }
            
            openBooking();
            return;
        }
        
        // Add user message
        addMessage(userMessage, true);
        
        // Show typing indicator
        const typingIndicator = showTyping();
        
        try {
            // Make API call to chat endpoint
            const response = await fetch(CHAT_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: messages.map(m => ({ role: m.role, content: m.content }))
                })
            });
            
            // Remove typing indicator
            typingIndicator.remove();
            
            if (response.ok) {
                const data = await response.json();
                addMessage(data.response || data.content || "I'm sorry, I couldn't process that. Please try again.");
            } else {
                addMessage("I'm having trouble connecting right now. Please try again or contact us directly at copilotacademy@software-dudes.ai");
            }
        } catch (error) {
            console.error('Chat error:', error);
            typingIndicator.remove();
            addMessage("I'm having trouble connecting right now. Please try again or contact us directly at copilotacademy@software-dudes.ai");
        }
    }
    
    // Send to Zoho webhook when chat closes
    async function sendToZohoWebhook() {
        if (ZOHO_WEBHOOK_URL === 'YOUR_ZOHO_WEBHOOK_URL') return;
        
        const payload = {
            name: leadData.name || null,
            email: leadData.email || null,
            phone: leadData.phone || null,
            company: leadData.company || null,
            lead_source: 'Copilot Academy AI Agent',
            page_url: window.location.href,
            interested_in: 'Copilot Academy',
            booking_clicked: bookingClicked,
            booking_completed: bookingCompleted,
            conversation_transcript: messages.map(m => `${m.role}: ${m.content}`).join('\n\n')
        };
        
        try {
            await fetch(ZOHO_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.error('Webhook error:', error);
        }
    }
    
    // Event listeners
    sendBtn.addEventListener('click', () => {
        const message = chatbotInput.value;
        chatbotInput.value = '';
        sendMessage(message);
    });
    
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatbotInput.value;
            chatbotInput.value = '';
            sendMessage(message);
        }
    });
    
    // Send webhook data when window is closed or user leaves
    window.addEventListener('beforeunload', () => {
        if (messages.length > 1) {
            sendToZohoWebhook();
        }
    });

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // Header Scroll Effect
    // ============================================
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
});
