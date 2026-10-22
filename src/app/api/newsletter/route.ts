import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/features/forms/schemas";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local_client";
    const limiter = rateLimit(`newsletter_form_${ip}`, { limit: 10, windowMs: 60 * 1000 });
    if (!limiter.success) {
      return NextResponse.json(
        { message: "Too many requests. Please wait." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Please provide a valid email address", errors: result.error.format() },
        { status: 400 }
      );
    }

    if (result.data.honeypot && result.data.honeypot.length > 0) {
      return NextResponse.json({ message: "Invalid submission" }, { status: 400 });
    }

    // TODO: Add to newsletter audience (e.g. Mailchimp, Brevo, Resend)
    console.log(`[NEWSLETTER_SUBSCRIBE] Email: ${result.data.email}`);

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to our monthly transparency updates.",
    });
  } catch (err: unknown) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
