import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  badge?: string
  align?: "left" | "center"
  lightText?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = "left",
  lightText = false,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <span className={cn(
          "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider border",
          lightText
            ? "bg-white/10 text-white/90 border-white/20"
            : "bg-[#eef2eb] text-[#23361D] border-[rgba(35,54,29,0.15)]"
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn("section-title", lightText && "!text-white")}>
        {title.split(" ").map((word, i) => {
          if (["Change", "Progress", "Lives", "Difference", "Action", "Together", "Society", "Parivartan", "Community", "Welfare", "People", "Nature"].includes(word)) {
            return (
              <span key={i} className="text-gradient-primary">
                {word}{" "}
              </span>
            )
          }
          return <span key={i}>{word} </span>
        })}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "section-subtitle",
            align === "center" ? "max-w-2xl" : "max-w-xl",
            lightText && "!text-white/80"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
