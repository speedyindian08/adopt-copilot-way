/**
 * Zoho CRM Configuration Guide
 * 
 * To connect this contact form to your Zoho CRM, follow these steps:
 * 
 * Option 1: Web-to-Lead Form (Recommended)
 * 1. Log in to your Zoho CRM account
 * 2. Go to Setup > Webforms > Web-to-Lead
 * 3. Create a new web form with the following fields:
 *    - First Name
 *    - Last Name
 *    - Email
 *    - Phone
 *    - Company
 *    - Description
 * 4. Copy the generated form URL or webhook URL
 * 5. Update the ZOHO_WEBHOOK_URL in ContactForm.tsx with your URL
 * 
 * Option 2: Zoho Flow/Webhook Integration
 * 1. Create a new Flow in Zoho Flow
 * 2. Use Webhook as the trigger
 * 3. Add Zoho CRM as the action to create a lead
 * 4. Copy the webhook URL and update ZOHO_WEBHOOK_URL in ContactForm.tsx
 * 
 * Option 3: Use Lovable Cloud (Backend)
 * For a more secure implementation:
 * 1. Enable Lovable Cloud in your project
 * 2. Create an edge function to handle form submissions
 * 3. Store Zoho API credentials securely in Cloud secrets
 * 4. Make API calls to Zoho CRM from the backend
 * 
 * Current Status: 
 * - The form is ready to use but needs your Zoho webhook URL
 * - Update line 47 in ContactForm.tsx: const zohoWebhookUrl = "YOUR_ZOHO_WEBHOOK_URL";
 * - Replace "YOUR_ZOHO_WEBHOOK_URL" with your actual webhook URL from Zoho
 */

export const ZOHO_CRM_SETUP_INSTRUCTIONS = `
To complete the Zoho CRM integration:

1. Get your Zoho webhook URL from Zoho CRM Web-to-Lead forms
2. Update ContactForm.tsx line 47 with your webhook URL
3. Test the form to ensure leads are created in Zoho CRM

For production use, consider using Lovable Cloud to handle this securely on the backend.
`;
