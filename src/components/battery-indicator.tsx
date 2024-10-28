import {
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
} from "lucide-react";
import { lightdm, LightDMBattery } from "nody-greeter-types";
import { useEffect, useState } from "react";
import { globalPadding } from "../constants";

export default function BatteryIndicator() {
  const [battery, setBattery] = useState<LightDMBattery | undefined>(undefined);

  useEffect(() => {
    if (lightdm?.can_access_battery) setBattery(lightdm?.battery_data);
    lightdm?.battery_update?.connect(setBattery);
    return () => {
      lightdm?.battery_update?.disconnect(setBattery as unknown as () => void);
    };
  }, []);

  if (!battery || !battery.level) return null;

  function Icon(props: { className?: string }) {
    if (battery?.ac_status) return <BatteryCharging {...props} />;
    if (!battery?.level || battery.level < 10) return <Battery {...props} />;
    if (battery.level < 30) return <BatteryLow {...props} />;
    if (battery.level < 80) return <BatteryMedium {...props} />;
    return <BatteryFull {...props} />;
  }

  return (
    <div
      className="fixed flex items-center gap-2 text-sm font-medium opacity-80"
      style={{ top: globalPadding, right: globalPadding }}
    >
      <Icon className="size-4" />
      {battery.level} %
    </div>
  );
}
