"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ElementType } from "react";

interface NavLinkProps {
  name: string;
  url: string;
  icon: ElementType;
  isActive?: boolean;
  onClick?: () => void;
}

export function NavLink({
  name,
  url,
  icon: Icon,
  isActive,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={url}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "w-full justify-start gap-2",
        isActive && "bg-accent",
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="group-data-[collapsible=icon]:hidden lg:inline-block">
        {name}
      </span>
    </Link>
  );
}
