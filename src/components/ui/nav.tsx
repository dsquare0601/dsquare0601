"use client";

import { cn } from "@/lib/utils";

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Nav({ className, ...props }: NavProps) {
  return (
    <div
      className={cn("flex flex-col gap-1", className)}
      role="navigation"
      {...props}
    />
  );
}
