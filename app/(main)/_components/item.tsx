"use client";

import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

export const Item = ({
  id,
  label,
  onClick,
  icon: Icon,
  active,
  documentIcon,
  isSearch,
  level = 0,
  onExpand,
  expanded,
}: ItemProps) => {
  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <>
      <div
        role="button"
        onClick={onClick}
        style={{
          paddingLeft: level ? `${level * 12 + 12}px` : "12px",
        }}
        className={cn(
          "group flex items-center w-full min-h-[27px] py-1 pr-3",
          "text-muted-foreground text-sm font-medium hover:bg-primary/5",
          active && "bg-primary/5 text-primary"
        )}
      >
        {!!id && (
          <div
            role="button"
            onClick={() => {}}
            className="h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1"
          >
            <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
          </div>
        )}
        {documentIcon ? (
          <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
        ) : (
          <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
        )}
        <span className="truncate">{label}</span>
        {isSearch && (
          <kbd
            className={cn(
              "ml-auto pointer-vents-none inline-flex h-5 select-none items-center gap-1 opacity-100",
              "rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground"
            )}
          >
            <span className="text-xs">Ctrl</span>K
          </kbd>
        )}
      </div>
    </>
  );
};
