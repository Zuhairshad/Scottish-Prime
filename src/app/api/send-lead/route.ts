import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, pageUrl, ...fields } = body;

    const smtpHost = process.env.SMTP_HOST || "mail.privateemail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpSecure = process.env.SMTP_SECURE !== undefined 
      ? process.env.SMTP_SECURE === "true" 
      : smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || "info@scottprimeenergy.co.uk";
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;

    const recipient = process.env.LEAD_RECIPIENT_EMAIL || "info@scottprimeenergy.co.uk";
    const sender = process.env.LEAD_SENDER_EMAIL || `"Scottish Prime Energy" <${smtpUser}>`;

    console.log(`[Lead received] Form: ${formType}, Page: ${pageUrl}`, fields);

    if (!smtpPass || smtpPass === "your_webmail_password_here") {
      console.warn("WARNING: SMTP_PASSWORD is not set. Lead logged to console (skipping direct email dispatch).");
      return NextResponse.json({
        success: true,
        message: "Lead captured locally (Set SMTP_PASSWORD in .env for direct Namecheap delivery)",
        fields,
      });
    }

    // Configure direct SMTP transporter (Namecheap Private Email / cPanel Webmail)
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // true for 465 (SSL), false for other ports (587 STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Build list of fields in HTML format
    const fieldsListHtml = Object.entries(fields)
      .map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`)
      .join("\n");

    const subject = `[Scottish Prime Lead] ${formType} submitted from ${pageUrl}`;
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1e3932; padding: 20px; border: 1px solid #e7e7e7; border-radius: 8px;">
        <h2 style="color: #006241; margin-top: 0;">New Form Submission Received</h2>
        <p><strong>Form Type:</strong> ${formType}</p>
        <p><strong>Submitted From:</strong> ${pageUrl}</p>
        <hr style="border: 0; border-top: 1px solid #e7e7e7; margin: 20px 0;" />
        <h3 style="color: #1e3932;">Submission Details:</h3>
        <ul style="line-height: 1.8;">
          ${fieldsListHtml}
        </ul>
        <hr style="border: 0; border-top: 1px solid #e7e7e7; margin: 20px 0;" />
        <p style="font-size: 12px; color: #888888;">This email was sent directly via Namecheap Webmail SMTP (${smtpUser}).</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: sender,
      to: recipient,
      replyTo: fields.email ? String(fields.email) : undefined,
      subject: subject,
      html: emailBody,
    });

    console.log(`[SMTP Email Sent] Message ID: ${info.messageId}`);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error("Error handling lead submission:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email via SMTP" },
      { status: 500 }
    );
  }
}

