export type DonationFrequency = "one-time" | "monthly";

export interface DonationInput {
  amount: number; // in INR
  frequency: DonationFrequency;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  donorPan?: string;
  donorAddress?: string;
  campaignSlug?: string;
  isAnonymous?: boolean;
}

export interface OrderResult {
  orderId: string;
  amount: number; // in paise or base unit
  currency: string;
  provider: "razorpay" | "mock" | "stripe" | "payu";
  keyId?: string;
  notes?: Record<string, string>;
}

export interface VerifyResult {
  success: boolean;
  transactionId?: string;
  orderId?: string;
  message?: string;
  receiptNumber?: string;
}

export interface PaymentProvider {
  name: string;
  createOrder(input: DonationInput): Promise<OrderResult>;
  verifyPayment(payload: unknown): Promise<VerifyResult>;
}
