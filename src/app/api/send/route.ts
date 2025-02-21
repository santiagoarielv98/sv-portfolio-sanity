import { EmailTemplate } from "@/components/email-template";
import { contactFormSchema } from "@/lib/schemas/contact";
import type { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.EMAIL_TO || "your@email.com",
      subject: `New Contact Form: ${validatedData.subject}`,
      react: EmailTemplate(validatedData) as ReactNode,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
