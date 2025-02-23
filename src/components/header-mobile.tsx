"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navigation } from "@/lib/config/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ExtendedBadge } from "./extended-badge";
import { ExtendedButton } from "./extended-button";
import { ExtendedSeparator } from "./extended-separator";
import { Icon } from "./icon";

type Props = {
  status?: string | null;
  onClose?: () => void;
};

const SiteHeaderMobile = ({ status, onClose }: Props) => {
  const lang = useLocale();
  const available = useTranslations("availability");

  const nav = useTranslations("nav");
  return (
    <div className="border-primary/10 border-t md:hidden">
      <div className="space-y-4 py-4">
        {navigation.map((item) =>
          item.hasSubmenu ? (
            <Accordion
              key={item.name}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value={item.name}>
                <AccordionTrigger className="py-0">
                  <ExtendedButton
                    asChild
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <div>{nav(item.name)}</div>
                  </ExtendedButton>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-0">
                  {item.submenu?.map((submenuItem) => (
                    <ExtendedButton
                      key={submenuItem.href}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start pl-6"
                      asChild
                      onClick={onClose}
                    >
                      <Link
                        href={`/${lang}${submenuItem.href}`}
                        className="flex items-center gap-2"
                      >
                        <Icon icon={submenuItem.icon} className="h-4 w-4" />
                        {nav(submenuItem.titleKey)}
                      </Link>
                    </ExtendedButton>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <ExtendedButton
              key={item.name}
              variant="ghost"
              className="w-full justify-start"
              asChild
              onClick={onClose}
            >
              <Link href={`/${lang}/${item.href}`}>{nav(item.name)}</Link>
            </ExtendedButton>
          ),
        )}
        <ExtendedSeparator className="my-4" />
        <ExtendedBadge className="w-full">
          <span className="relative inline-flex size-2.5 rounded-full" />
          {available(`${status || "unavailable"}`)}
        </ExtendedBadge>
      </div>
    </div>
  );
};

export default SiteHeaderMobile;
