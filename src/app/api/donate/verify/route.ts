import { NextRequest, NextResponse } from "next/server";
import { getPaymentProvider } from "@/features/donation/providers/factory";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local_client";
    const limiter = rateLimit(`donate_verify_${ip}`, { limit: 20, windowMs: 60 * 1000 });
    if (!limiter.success) {
      return NextResponse.json(
        { message: "Too many verification attempts. Please wait." },
        { status: 429 }
      );
    }

    const payload = await req.json();

    // Verify payment using active provider (e.g. Razorpay HMAC signature or Mock)
    const provider = getPaymentProvider();
    const verification = await provider.verifyPayment(payload);

    if (!verification.success) {
      return NextResponse.json(
        { success: false, message: verification.message || "Payment verification failed" },
        { status: 400 }
      );
    }

    // TODO: Send 80G tax receipt email and Form 10BD ledger entry
    // Example: await sendReceiptEmail({ email: payload.donorEmail, receipt: verification.receiptNumber, amount: payload.amount });
    console.log(`[DONATION_SUCCESS] Order: ${verification.orderId}, Receipt: ${verification.receiptNumber}`);

    return NextResponse.json({
      success: true,
      transactionId: verification.transactionId,
      receiptNumber: verification.receiptNumber,
      orderId: verification.orderId,
    });
  } catch (err: unknown) {
    console.error("Payment verification route error:", err);
    const message = err instanceof Error ? err.message : "Internal server error verifying payment";
    return NextResponse.json(
      { message },
      { status: 500 }
    );
  }
}
