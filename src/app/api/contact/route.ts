import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/features/forms/schemas";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local_client";
    const limiter = rateLimit(`contact_form_${ip}`, { limit: 10, windowMs: 60 * 1000 });
    if (!limiter.success) {
      return NextResponse.json(
        { message: "Too many requests. Please wait a moment." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid form input", errors: result.error.format() },
        { status: 400 }
      );
    }

    // Bot honeypot check
    if (result.data.honeypot && result.data.honeypot.length > 0) {
      return NextResponse.json({ message: "Invalid submission" }, { status: 400 });
    }

    // TODO: Send notification email to contact@wahegurufoundation.org
    console.log(`[CONTACT_ENQUIRY] From: ${result.data.name} <${result.data.email}>, Subject: ${result.data.subject}`);

    return NextResponse.json({
      success: true,
      message: "Your message has been received. Our team will contact you shortly.",
    });
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { message: "Internal server error submitting contact form" },
      { status: 500 }
    );
  }
}
