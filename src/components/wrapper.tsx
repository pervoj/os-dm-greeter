import { ReactNode } from "react";
import { globalPadding } from "../constants";
import { branding } from "../utils/branding";
import BatteryIndicator from "./battery-indicator";
import PowerMenu from "./power-menu";

export default function Wrapper({ children }: { children?: ReactNode }) {
  const logo = branding?.logo_image;

  return (
    <div
      className="dark fixed inset-0 grid h-screen w-screen cursor-default select-none bg-neutral-900 text-neutral-100"
      style={{ padding: globalPadding }}
    >
      {children}

      <BatteryIndicator />

      <PowerMenu />

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
