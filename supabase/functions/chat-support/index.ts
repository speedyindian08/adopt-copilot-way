import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received messages:", messages);

    // System prompt with knowledge about Copilot Academy
    const systemPrompt = `You are a helpful customer support assistant for Copilot Academy, a comprehensive training program for Microsoft Copilot.

Key Information:
- Copilot Academy helps organizations maximize their Microsoft Copilot investment with a 353% ROI
- We offer role-based training for HR, Finance, Sales, IT, and other departments
- Training includes prompt engineering playbooks and best practices
- Pricing: Essentials ($799), Professional ($1,899), Full Adoption ($3,999 - recommended)
- All employees need Microsoft 365 license (E3/E5/Business Premium/Standard) and Copilot add-on
- Results typically seen within 30 days, with adoption rates jumping from 20% to over 85%
- Training heavily focuses on role-based prompt engineering
- Copilot inherits all existing security permissions and compliance settings
- Available for all departments with specific role-based sessions

Be friendly, professional, and helpful. Answer questions about the training program, pricing, requirements, and benefits. If you don't know something specific, suggest they contact us directly through the contact form on the website.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      throw new Error("AI gateway error");
    }

    const data = await response.json();
    console.log("AI response:", data);

    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error("No content in AI response");
    }

    return new Response(
      JSON.stringify({ content }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chat support error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
