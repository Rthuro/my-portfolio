import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    const resend = new Resend(apiKey);

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Ruth <portfolio@ruthiemyoribello.tech>",
      to: ["oribelloruthiemy@gmail.com"],
      replyTo: email,
      subject: subject || `New message from ${name}`,
      text: `
Sender name: ${name}
Sender email: ${email}

${message}
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to the sender
    await resend.emails.send({
      from: "Ruth <portfolio@ruthiemyoribello.tech>",
      to: email,
      replyTo: "oribelloruthiemy@gmail.com",
      subject: "Message received — thank you!",
      text: `Hi ${name},

Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Best regards,
Ruthiemy Oribello
      `,
    });

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}