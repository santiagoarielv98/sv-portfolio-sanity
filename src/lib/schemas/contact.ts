import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "form.errors.name.min"),
  email: z.string().email("form.errors.email.invalid"),
  subject: z.string().max(50, "form.errors.subject.max"),
  message: z.string().min(5, "form.errors.message.min"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
