import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || 'manojkumarb.2305@gmail.com';
  const pass = (process.env.SMTP_PASS || 'uzvx eyvw qwrg kizc').replace(/\s+/g, '');
  const toEmail = process.env.TO_EMAIL || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for port 465, false for 587
    auth: {
      user,
      pass,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: toEmail,
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

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error('SMTP Error:', err);
    return res.status(500).json({ error: err.message || 'Failed to send email. Please try again.' });
  }
}

