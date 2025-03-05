"use client";

import React from "react";
import { Icon } from "@/components/icon";
import type { SkillCategory } from "@/sanity/types";
import { ExtendedButton } from "../extended-button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Props = {
  categories: SkillCategory[];
};

const CategoryFilter = ({ categories }: Props) => {
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      let allCategories = params.getAll("categories");

      if (allCategories.includes(value)) {
        allCategories = allCategories.filter((category) => category !== value);
      } else {
        allCategories.push(value);
      }

      params.delete("categories");
      allCategories.forEach((category) =>
        params.append("categories", category),
      );

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <ExtendedButton
          key={category.title}
          variant="gradient"
          size="sm"
          className="min-w-32"
          asChild
        >
          <Link
            href={`?${createQueryString(category.slug as unknown as string)}`}
          >
            <Icon icon={category.icon!} className="h-4 w-4" />
            <span>{category.title}</span>
          </Link>
        </ExtendedButton>
      ))}
    </div>
  );
};

export default CategoryFilter;
