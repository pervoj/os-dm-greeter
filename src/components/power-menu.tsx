import { MonitorPause, MoonStar, Power, RefreshCcw, XIcon } from "lucide-react";
import { lightdm } from "nody-greeter-types";
import { globalPadding } from "../constants";
import { IconButton } from "./button";
import Page from "./page";

const actions = [
  {
    active: true,
    action: () => {},
    icon: Power,
    title: "Shutdown",
  },
  {
    active: true,
    action: () => {},
    icon: MoonStar,
    title: "Sleep",
  },
  {
    active: true,
    action: () => {},
    icon: RefreshCcw,
    title: "Reboot",
  },
  {
    active: true,
    action: () => {},
    icon: MonitorPause,
    title: "Hibernate",
  },

  {
    active: lightdm?.can_shutdown,
    action: lightdm?.shutdown,
    icon: Power,
    title: "Shutdown",
  },
  {
    active: lightdm?.can_suspend,
    action: lightdm?.suspend,
    icon: MoonStar,
    title: "Sleep",
  },
  {
    active: lightdm?.can_restart,
    action: lightdm?.restart,
    icon: RefreshCcw,
    title: "Reboot",
  },
  {
    active: lightdm?.can_hibernate,
    action: lightdm?.hibernate,
    icon: MonitorPause,
    title: "Hibernate",
  },
];

export default function PowerMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <>
      <IconButton
        className="fixed block"
        style={{ bottom: globalPadding, right: globalPadding }}
        onClick={() => setIsOpen(true)}
        tabIndex={isOpen ? -1 : undefined}
      >
        <Power className="size-6" />
      </IconButton>

      <Page active={isOpen}>
        <div
          className="absolute inset-0 -z-10 bg-black/75"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-row items-center gap-3 rounded-3xl border-2 border-white/5 bg-neutral-900 p-3 shadow">
            {actions
              .filter(({ active, action }) => active && action)
              .map(({ action, icon: Icon, title }) => (
                <button
                  className="flex size-28 flex-col items-center justify-center gap-4 rounded-xl bg-white/5 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring"
                  onClick={() => {
                    action();
                    setIsOpen(false);
                  }}
                >
                  <Icon className="size-8" />
                  <span className="font-semibold">{title}</span>
                </button>
              ))}
            <button
              className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-neutral-800 p-2 shadow focus:outline-none"
              onClick={() => setIsOpen(false)}
              tabIndex={-1}
            >
              <XIcon className="size-4" />
            </button>
          </div>
        </div>
      </Page>
    </>
  );
}
