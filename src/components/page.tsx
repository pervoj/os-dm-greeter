import { ReactNode, useEffect, useRef } from "react";
import { globalPadding } from "../constants";
import { cn } from "../utils/cn";
import { getChildrenRecursive } from "../utils/get-children-recursive";

export default function Page({
  active = false,
  focusable: focusableInput,
  children,
}: {
  active?: boolean;
  focusable?: boolean;
  children?: ReactNode;
}) {
  const pageRef = useRef<HTMLDivElement>(null);
  const focusable = !active ? false : (focusableInput ?? true);

  useEffect(() => {
    const page = pageRef.current!;
    const children = getChildrenRecursive(page);
    const tabindexes = children.map((e) => e.getAttribute("tabindex"));

    function setTabindex(e: HTMLElement, value?: string | null) {
      if (!value) {
        e.removeAttribute("tabindex");
      } else {
        e.setAttribute("tabindex", value);
      }
    }

    children.forEach((e, i) => {
      setTabindex(e, !focusable ? "-1" : tabindexes[i]);
    });

    return () => {
      children.forEach((e, i) => {
        setTabindex(e, tabindexes[i]);
      });
    };
  }, [focusable]);

  return (
    <div
      ref={pageRef}
      className={cn(
        "fixed inset-0 isolate grid h-screen w-screen opacity-100 transition-opacity",
        !active && "pointer-events-none opacity-0",
      )}
      style={{ padding: globalPadding }}
    >
      {children}
    </div>
  );
}
