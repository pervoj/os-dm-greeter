import { ReactNode, useEffect, useState } from "react";
import { globalPadding } from "../constants";
import { branding } from "../utils/branding";
import BatteryIndicator from "./battery-indicator";
import Page from "./page";
import PowerMenu from "./power-menu";

export default function Wrapper({ children }: { children?: ReactNode }) {
  const logo = branding?.logo_image;

  const [isPowerMenuOpen, setIsPowerMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key == "Escape") setIsPowerMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="dark fixed inset-0 grid h-screen w-screen cursor-default select-none bg-neutral-900 text-neutral-100"
      style={{ padding: globalPadding }}
    >
      <Page active focusable={!isPowerMenuOpen}>
        {children}
      </Page>

      <BatteryIndicator />
      <PowerMenu isOpen={isPowerMenuOpen} setIsOpen={setIsPowerMenuOpen} />

      {logo && (
        <img
          src={logo}
          alt=""
          className="fixed left-1/2 block -translate-x-1/2"
          style={{ bottom: globalPadding }}
          draggable="false"
        />
      )}
    </div>
  );
}
