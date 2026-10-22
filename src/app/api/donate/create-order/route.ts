import { NextRequest, NextResponse } from "next/server";
import { donationFormSchema } from "@/features/donation/schema";
import { getPaymentProvider } from "@/features/donation/providers/factory";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting based on IP
    const ip = req.headers.get("x-forwarded-for") || "local_client";
    const limiter = rateLimit(`donate_order_${ip}`, { limit: 15, windowMs: 60 * 1000 });
    if (!limiter.success) {
      return NextResponse.json(
        { message: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    // 2. Parse and Validate Request Body with Zod
    const body = await req.json();
    const validation = donationFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid donation parameters", errors: validation.error.format() },
        { status: 400 }
      );
    }

    const input = validation.data;

    // 3. Honeypot bot protection
    if (input.honeypot && input.honeypot.length > 0) {
      return NextResponse.json({ message: "Invalid submission" }, { status: 400 });
    }

    // 4. Create Order via Agnostic Payment Provider
    const provider = getPaymentProvider();
    const orderResult = await provider.createOrder(input);

    return NextResponse.json({
      success: true,
      ...orderResult,
    });
  } catch (err: unknown) {
    console.error("Order creation route error:", err);
    const message = err instanceof Error ? err.message : "Failed to initialize payment order";
    return NextResponse.json(
      { message },
      { status: 500 }
    );
  }
}
