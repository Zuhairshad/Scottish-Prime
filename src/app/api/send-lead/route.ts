import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, pageUrl, ...fields } = body;

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.LEAD_RECIPIENT_EMAIL || "hello@scottishprimeenergy.co.uk";
    const sender = process.env.LEAD_SENDER_EMAIL || "onboarding@resend.dev";

    console.log(`[Lead received] Form: ${formType}, Page: ${pageUrl}`, fields);

    if (!apiKey || apiKey === "re_your_api_key") {
      console.warn("WARNING: RESEND_API_KEY is not set or is using the placeholder. Skipping email dispatch.");
      return NextResponse.json({
        success: true,
        message: "Lead captured locally (Resend API key not configured)",
        fields,
      });
    }

    // Build list of fields in HTML format
    const fieldsListHtml = Object.entries(fields)
      .map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`)
      .join("\n");

    const subject = `[Scottish Prime Lead] ${formType} submitted from ${pageUrl}`;
    const emailBody = `
      <h2>New Lead Received from Scottish Prime Energy</h2>
      <p><strong>Form Type:</strong> ${formType}</p>
      <p><strong>Submitted From Page:</strong> ${pageUrl}</p>
      <hr />
      <h3>Lead Details:</h3>
      <ul>
        ${fieldsListHtml}
      </ul>
      <hr />
      <p><em>This email was automatically generated and sent via Resend.</em></p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: sender,
        to: recipient,
        subject: subject,
        html: emailBody,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`Resend API Error: ${res.status} - ${errText}`);
      return NextResponse.json(
        { success: false, error: `Resend API returned status ${res.status}` },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, messageId: data.id });
  } catch (error: any) {
    console.error("Error handling lead submission:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
