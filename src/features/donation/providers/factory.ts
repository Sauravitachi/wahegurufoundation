import { PaymentProvider } from "./types";
import { RazorpayProvider } from "./razorpay";
import { MockPaymentProvider } from "./mock";
import { env } from "@/lib/env";

/**
 * Returns the active payment provider based on PAYMENT_PROVIDER environment configuration.
 * Adding new gateways (e.g. Stripe, PayU, Cashfree) only requires implementing PaymentProvider
 * and registering a case below. UI never imports payment providers directly.
 */
export function getPaymentProvider(): PaymentProvider {
  const provider = env.PAYMENT_PROVIDER;

  switch (provider) {
    case "razorpay":
      return new RazorpayProvider();
    case "mock":
    default:
      return new MockPaymentProvider();
  }
}
