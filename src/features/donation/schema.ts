import { z } from "zod";

// Valid Indian PAN format regex: 5 uppercase letters, 4 digits, 1 uppercase letter
const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

export const donationFormSchema = z.object({
  amount: z
    .number({ message: "Please specify a valid contribution amount" })
    .min(100, "Minimum donation amount is ₹100")
    .max(10000000, "For contributions exceeding ₹1 Crore, please contact our CSR office directly"),
  frequency: z.enum(["one-time", "monthly"]),
  donorName: z.string().min(2, "Full name must be at least 2 characters"),
  donorEmail: z.string().email("Please provide a valid email address for receipt delivery"),
  donorPhone: z
    .string()
    .min(10, "Please provide a valid 10-digit mobile number")
    .max(15, "Phone number is too long"),
  donorPan: z
    .string()
    .trim()
    .toUpperCase()
    .optional()
    .refine(
      (val) => !val || panRegex.test(val),
      "Please enter a valid 10-character PAN (e.g. ABCDE1234F) for 80G tax benefit"
    ),
  donorAddress: z.string().optional(),
  campaignSlug: z.string(),
  isAnonymous: z.boolean(),
  honeypot: z.string().max(0, "Bot detected"),
});

export type DonationFormData = z.infer<typeof donationFormSchema>;

export const IMPACT_TIERS = [
  {
    min: 100,
    max: 999,
    text: "Feeds 15 underprivileged hospital caregivers with freshly prepared warm langar thalis.",
  },
  {
    min: 1000,
    max: 2499,
    text: "Provides full winter thermal kit (wool blanket & jacket) to 2 pavement workers.",
  },
  {
    min: 2500,
    max: 4999,
    text: "Funds 1 month of full schooling, books, midday meals, and health checks for a girl scholar.",
  },
  {
    min: 5000,
    max: 14999,
    text: "Equips a rural hamlet with mobile doctor diagnostic screening and free prescription medicine.",
  },
  {
    min: 15000,
    max: Infinity,
    text: "Powers an entire community school digital smart lab or village clean drinking water filtration.",
  },
];

export function getImpactText(amount: number): string {
  const tier = IMPACT_TIERS.find((t) => amount >= t.min && amount <= t.max);
  return tier ? tier.text : "Empowers our grassroots emergency relief and humanitarian programs.";
}
