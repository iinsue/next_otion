"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ItemProps {
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

export const Item = ({ label, onClick, icon: Icon }: ItemProps) => {
  return (
    <>
      <div
        role="button"
        onClick={onClick}
        style={{ paddingLeft: "12px" }}
        className={cn(
          "group flex items-center w-full min-h-[27px] py-1 pr-3",
          "text-muted-foreground text-sm font-medium hover:bg-primary/5"
        )}
      >
        <Icon className="shrink-0 h-[18px] mr-2" />
        <span className="truncate">{label}</span>
      </div>
    </>
  );
};
