import {
  PaymentProvider,
  DonationInput,
  OrderResult,
  VerifyResult,
} from "./types";

export class MockPaymentProvider implements PaymentProvider {
  public readonly name = "mock";

  async createOrder(input: DonationInput): Promise<OrderResult> {
    const mockOrderId = `mock_order_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    return {
      orderId: mockOrderId,
      amount: Math.round(input.amount * 100),
      currency: "INR",
      provider: "mock",
      keyId: "mock_test_key",
      notes: {
        campaign: input.campaignSlug || "general-seva",
        donorEmail: input.donorEmail,
      },
    };
  }

  async verifyPayment(payload: unknown): Promise<VerifyResult> {
    const data = payload as { orderId?: string; transactionId?: string };
    return {
      success: true,
      orderId: data?.orderId || `mock_order_${Date.now()}`,
      transactionId: data?.transactionId || `mock_tx_${Date.now()}`,
      receiptNumber: `WF-MOCK-80G-${Date.now().toString().slice(-6)}`,
      message: "Mock payment successfully verified (Demo Environment)",
    };
  }
}
