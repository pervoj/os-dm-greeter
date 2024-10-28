import { ReactNode } from "react";
import { globalPadding } from "../constants";
import { cn } from "../utils/cn";

export default function Page({
  active = false,
  children,
}: {
  active?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 grid h-screen w-screen opacity-100 transition-opacity",
        !active && "pointer-events-none opacity-0",
      )}
      style={{ padding: globalPadding }}
    >
      {children}
    </div>
  );
}
