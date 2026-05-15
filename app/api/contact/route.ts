import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, companyName, email, phone, service, message } = data;

    // Basic validation
    if (!email && !phone && !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Decide transporter config. Prefer explicit SMTP_HOST if provided.
    let transporter;
    if (process.env.SMTP_HOST) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: process.env.SMTP_USER
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            }
          : undefined,
      });
    } else if (process.env.SMTP_USER && process.env.SMTP_PASS && /@gmail\.com$/.test(process.env.SMTP_USER)) {
      // Convenience: use Gmail SMTP with App Password
      transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS, // Google App Password
        },
      });
    } else {
      // Fallback: try direct send (may fail on many hosts)
      transporter = nodemailer.createTransport({
        port: 587,
        secure: false,
      });
    }

    const from = process.env.FROM_EMAIL || process.env.SMTP_USER || 'no-reply@example.com';
    const to = process.env.TO_EMAIL || process.env.FROM_EMAIL || process.env.SMTP_USER || 'aagmanrealtyventuresllp@gmail.com';

    const mailOptions = {
      from,
      to,
      subject: `Website Inquiry from ${fullName || 'Website Visitor'}`,
      text: `Name: ${fullName}\nCompany: ${companyName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${fullName}</p>
             <p><strong>Company:</strong> ${companyName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Service:</strong> ${service}</p>
             <p><strong>Message:</strong></p>
             <p>${(message || '').replace(/\n/g, '<br/>')}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact route error:', err);
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
}
