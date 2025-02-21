"use client";

import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ExtendedFormMessage } from "../extended-form";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const t = useTranslations("contact");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success(t("form.success.title"), {
        description: t("form.success.message"),
      });
      form.reset();
    } catch {
      toast.error(t("form.error.title"), {
        description: t("form.error.message"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ExtendedCard variant="default" className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{t("form.title")}</CardTitle>
        <CardDescription>{t("form.subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.name.label")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("form.name.placeholder")}
                          {...field}
                        />
                      </FormControl>
                      <ExtendedFormMessage namespace="contact" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.email.label")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("form.email.placeholder")}
                          {...field}
                        />
                      </FormControl>
                      <ExtendedFormMessage namespace="contact" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.subject.label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("form.subject.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <ExtendedFormMessage namespace="contact" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.message.label")}</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-full min-h-[100px] resize-none"
                        placeholder={t("form.message.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <ExtendedFormMessage namespace="contact" />
                  </FormItem>
                )}
              />
            </div>
            <input type="submit" className="hidden" />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <ExtendedButton
          type="submit"
          variant="default"
          className="w-full"
          disabled={isLoading}
          onClick={form.handleSubmit(onSubmit)}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("form.sending")}
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              {t("form.send")}
            </>
          )}
        </ExtendedButton>
      </CardFooter>
    </ExtendedCard>
  );
};

export default ContactForm;
