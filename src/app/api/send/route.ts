import { EmailTemplate } from "@/components/resend/email-template";
import { contactFormSchema } from "@/lib/schemas/contact";
import type { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_TO!,
      subject: `Nuevo mensaje de ${validatedData.name}`,
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
