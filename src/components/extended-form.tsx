"use client";

import { useFormField } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import * as React from "react";

export function ExtendedFormMessage({
  className,
  namespace,
  ...props
}: React.ComponentProps<"p"> & { namespace?: string }) {
  const t = useTranslations(namespace);
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : props.children;

  console.log(body);

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm font-medium", className)}
      {...props}
    >
      {t(body)}
    </p>
  );
}
