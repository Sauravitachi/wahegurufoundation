import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const volunteerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Please provide a valid 10-digit mobile number"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  skills: z.enum([
    "Kitchen & Langar Seva",
    "Medical & Healthcare",
    "Teaching & Tutoring",
    "Digital & Social Media",
    "Logistics & Packaging",
    "Legal & Administration",
  ]),
  availability: z.enum([
    "Weekends only",
    "A few hours on weekdays",
    "Full-time volunteer",
    "Remote / Pro-bono",
  ]),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected"),
});

export type VolunteerFormData = z.infer<typeof volunteerSchema>;

export const csrSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  workEmail: z.string().email("Please provide a valid corporate email"),
  phone: z.string().min(10, "Please provide a valid contact number"),
  projectInterest: z.enum([
    "Village Solar Water Plants",
    "Rural Digital Classroom Adoptions",
    "Mobile Health Dispensaries",
    "Community Langar Hub Partnerships",
    "Custom CSR Intervention",
  ]),
  budgetRange: z.enum([
    "₹5 Lakhs – ₹15 Lakhs",
    "₹15 Lakhs – ₹50 Lakhs",
    "₹50 Lakhs – ₹1 Crore",
    "₹1 Crore+",
  ]),
  message: z.string().min(10, "Please describe your CSR objectives"),
  honeypot: z.string().max(0, "Bot detected"),
});

export type CsrFormData = z.infer<typeof csrSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  honeypot: z.string().max(0, "Bot detected"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
