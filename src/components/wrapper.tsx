import { ReactNode } from "react";
import { globalPadding } from "../constants";
import { branding } from "../utils/branding";
import BatteryIndicator from "./battery-indicator";
import PowerButton from "./power-button";

export default function Wrapper({ children }: { children?: ReactNode }) {
  const logo = branding?.logo_image;

  return (
    <div
      className="dark fixed inset-0 grid h-screen w-screen cursor-default select-none bg-neutral-900 text-neutral-100"
      style={{ padding: globalPadding }}
    >
      {children}

      <BatteryIndicator />

      <PowerButton />

      {logo && (
        <img
          src={logo}
          alt=""
          className="fixed block"
          style={{ bottom: globalPadding, left: globalPadding }}
          draggable="false"
        />
      )}
    </div>
  );
}
