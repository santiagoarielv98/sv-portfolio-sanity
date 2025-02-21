"use client";

import { Mail } from "lucide-react";

import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("contact");
  return (
    <ExtendedCard variant="default" className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{t("form.title")}</CardTitle>
        <CardDescription>{t("form.subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Typography variant="small">{t("form.name.label")}</Typography>
            <Input placeholder={t("form.name.label")} />
          </div>
          <div className="space-y-2">
            <Typography variant="small">{t("form.email.label")}</Typography>
            <Input type="email" placeholder={t("form.email.label")} />
          </div>
        </div>
        <div className="space-y-2">
          <Typography variant="small">{t("form.subject.label")}</Typography>
          <Input placeholder={t("form.subject.label")} />
        </div>
        <div className="space-y-2">
          <Typography variant="small">{t("form.message.label")}</Typography>
          <Textarea
            placeholder={t("form.message.label")}
            className="h-full min-h-[100px] resize-none"
          />
        </div>
      </CardContent>
      <CardFooter>
        <ExtendedButton variant="default" className="w-full">
          <Mail className="mr-2 h-4 w-4" />
          {t("form.send")}
        </ExtendedButton>
      </CardFooter>
    </ExtendedCard>
  );
};

export default ContactForm;
