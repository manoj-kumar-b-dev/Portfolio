import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain once set up
      to: [process.env.TO_EMAIL],                        // Your email address
      replyTo: email,
      subject: `New message from ${name} — Portfolio Contact`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #6366f1; margin-bottom: 8px;">New Portfolio Contact</h2>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin-bottom: 20px;" />

          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 0 0 16px;"><strong>Message:</strong></p>
          <div style="background: #fff; border-left: 4px solid #6366f1; padding: 16px; border-radius: 8px; color: #374151; line-height: 1.6;">
            ${message.replace(/\n/g, '<br/>')}
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin-top: 20px;" />
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">Sent from your portfolio contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
