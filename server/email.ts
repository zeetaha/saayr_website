import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  family: 4, // force IPv4 — Node 18+ prefers IPv6 which fails on most SMTP servers
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
} as SMTPTransport.Options);

export async function sendWaitlistNotification(email: string, role: string) {
  const from = `"${process.env.EMAIL_FROM_NAME || "Saayr"}" <${process.env.SMTP_USER}>`;

  await transporter.sendMail({
    from,
    to: "zeeshan@saayr.sa, Abdulaziz@saayr.sa",
    subject: `New waitlist signup — ${role}`,
    text: `A new user joined the waitlist.\n\nEmail: ${email}\nRole: ${role}\nTime: ${new Date().toUTCString()}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
        <h2 style="color:#1a1a1a">New Waitlist Signup</h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:600;width:90px">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Role</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${role}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Time</td>
            <td style="padding:8px 12px">${new Date().toUTCString()}</td>
          </tr>
        </table>
      </div>
    `,
  });
}
