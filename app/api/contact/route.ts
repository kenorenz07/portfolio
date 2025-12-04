import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("Attempting to send email...");
    console.log("To:", process.env.EMAIL_USER);
    console.log("From:", email);
    console.log("Subject:", subject);

    // Send email using Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend's test email
      to: "renzpalonpon@gmail.com", // Hardcoded for testing - must match your Resend account email
      replyTo: email, // This will be the contact form sender's email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Name:</strong> 
              <span style="color: #6b7280;">${name}</span>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Email:</strong> 
              <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Subject:</strong> 
              <span style="color: #6b7280;">${subject}</span>
            </p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #6366f1; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Sent on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully!", data);

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
