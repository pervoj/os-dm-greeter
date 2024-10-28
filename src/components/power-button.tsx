import {
  LucideIcon,
  MonitorPause,
  MoonStar,
  Power,
  RefreshCcw,
} from "lucide-react";
import { lightdm } from "nody-greeter-types";
import { useState } from "react";
import { globalPadding } from "../constants";
import { cn } from "../utils/cn";
import { IconButton } from "./button";

export default function PowerButton() {
  const [isOpened, setIsOpened] = useState(false);

  function ActionButton({
    active,
    action,
    icon: Icon,
    title,
  }: {
    active: boolean | undefined;
    action: (() => void) | undefined;
    icon?: LucideIcon;
    title?: string;
  }) {
    if (!active || !action) return null;

    return (
      <button
        className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring"
        onClick={() => {
          action();
          setIsOpened(false);
        }}
      >
        {Icon && <Icon className="size-8" />}
        {title && <span className="text-sm font-medium">{title}</span>}
      </button>
    );
  }

  return (
    <>
      <IconButton
        className="fixed block"
        style={{ bottom: globalPadding, right: globalPadding }}
        onClick={() => setIsOpened(true)}
      >
        <Power className="size-6" />
      </IconButton>

      <div
        className={cn(
          "fixed inset-0 isolate z-50 opacity-100 transition-opacity",
          !isOpened && "pointer-events-none opacity-0",
        )}
      >
        <div
          className="absolute inset-0 -z-10 bg-black/75"
          onClick={() => setIsOpened(false)}
        ></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="grid grid-flow-col gap-3 rounded-3xl border-2 border-white/5 bg-neutral-900 p-3">
            {/* <ActionButton
              active={true}
              action={() => {}}
              icon={Power}
              title="Shutdown"
            />
            <ActionButton
              active={true}
              action={() => {}}
              icon={Power}
              title="Shutdown"
            />
            <ActionButton
              active={true}
              action={() => {}}
              icon={Power}
              title="Shutdown"
            /> */}

            <ActionButton
              active={lightdm?.can_shutdown}
              action={lightdm?.shutdown}
              icon={Power}
              title="Shutdown"
            />
            <ActionButton
              active={lightdm?.can_suspend}
              action={lightdm?.suspend}
              icon={MoonStar}
              title="Sleep"
            />
            <ActionButton
              active={lightdm?.can_restart}
              action={lightdm?.restart}
              icon={RefreshCcw}
              title="Reboot"
            />
            <ActionButton
              active={lightdm?.can_hibernate}
              action={lightdm?.hibernate}
              icon={MonitorPause}
              title="Hibernate"
            />
          </div>
        </div>
      </div>
    </>
  );
}
