import { cn } from "@/lib/utils";

type Props = { children: React.ReactNode; className?: string };

export default function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs",
        "border-white/15 bg-white/5 text-zinc-200",
        className
      )}
    >
      {children}
    </span>
  );
}


