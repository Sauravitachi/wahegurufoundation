import crypto from "crypto";
import {
  PaymentProvider,
  DonationInput,
  OrderResult,
  VerifyResult,
} from "./types";
import { env } from "@/lib/env";

export interface RazorpayVerificationPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export class RazorpayProvider implements PaymentProvider {
  public readonly name = "razorpay";
  private keyId: string;
  private keySecret: string;

  constructor() {
    this.keyId = env.RAZORPAY_KEY_ID || "";
    this.keySecret = env.RAZORPAY_KEY_SECRET || "";
  }

  async createOrder(input: DonationInput): Promise<OrderResult> {
    const amountInPaise = Math.round(input.amount * 100);

    // If live credentials are not present or test placeholder is set, fallback gracefully or use Razorpay API
    if (!this.keyId || !this.keySecret || this.keyId.includes("placeholder")) {
      const mockOrderId = `order_rzp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      return {
        orderId: mockOrderId,
        amount: amountInPaise,
        currency: "INR",
        provider: "razorpay",
        keyId: this.keyId,
        notes: {
          campaign: input.campaignSlug || "general-seva",
          frequency: input.frequency,
          donorEmail: input.donorEmail,
        },
      };
    }

    try {
      const auth = Buffer.from(`${this.keyId}:${this.keySecret}`).toString("base64");
      const res = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: "INR",
          receipt: `rcpt_${Date.now()}`,
          notes: {
            campaign: input.campaignSlug || "general-seva",
            frequency: input.frequency,
            donorEmail: input.donorEmail,
          },
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error?.description || "Razorpay order creation failed");
      }

      const orderData = await res.json();
      return {
        orderId: orderData.id,
        amount: orderData.amount,
        currency: orderData.currency,
        provider: "razorpay",
        keyId: this.keyId,
        notes: orderData.notes,
      };
    } catch (err: unknown) {
      console.error("Razorpay order error:", err);
      const message = err instanceof Error ? err.message : "Unknown error";
      throw new Error(`Failed to initialize Razorpay order: ${message}`);
    }
  }

  async verifyPayment(payload: unknown): Promise<VerifyResult> {
    const data = payload as RazorpayVerificationPayload;

    if (!data.razorpay_order_id || !data.razorpay_payment_id || !data.razorpay_signature) {
      return {
        success: false,
        message: "Missing Razorpay verification credentials in payload",
      };
    }

    if (!this.keySecret || this.keySecret.includes("placeholder")) {
      return {
        success: true,
        transactionId: data.razorpay_payment_id,
        orderId: data.razorpay_order_id,
        receiptNumber: `WF-80G-${Date.now().toString().slice(-6)}`,
        message: "Test donation verified successfully",
      };
    }

    const body = `${data.razorpay_order_id}|${data.razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", this.keySecret)
      .update(body.toString())
      .digest("hex");

    const isMatch = crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(data.razorpay_signature)
    );

    if (!isMatch) {
      return {
        success: false,
        message: "Cryptographic signature mismatch. Potential tampering detected.",
      };
    }

    return {
      success: true,
      transactionId: data.razorpay_payment_id,
      orderId: data.razorpay_order_id,
      receiptNumber: `WF-80G-${Date.now().toString().slice(-6)}`,
      message: "Payment signature verified successfully",
    };
  }
}
