import { NextRequest, NextResponse } from "next/server";
import { volunteerSchema } from "@/features/forms/schemas";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local_client";
    const limiter = rateLimit(`volunteer_form_${ip}`, { limit: 10, windowMs: 60 * 1000 });
    if (!limiter.success) {
      return NextResponse.json(
        { message: "Too many requests. Please wait." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = volunteerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid form input", errors: result.error.format() },
        { status: 400 }
      );
    }

    if (result.data.honeypot && result.data.honeypot.length > 0) {
      return NextResponse.json({ message: "Invalid submission" }, { status: 400 });
    }

    // TODO: Register sevadar in CRM / volunteer database
    console.log(`[VOLUNTEER_SIGNUP] Name: ${result.data.fullName}, Domain: ${result.data.skills}, City: ${result.data.city}`);

    return NextResponse.json({
      success: true,
      message: "Sevadar application received with gratitude.",
    });
  } catch (err: unknown) {
    console.error("Volunteer API error:", err);
    return NextResponse.json(
      { message: "Internal server error submitting volunteer application" },
      { status: 500 }
    );
  }
}
