import { ChevronRight } from "lucide-react";
import { greeter_config, lightdm } from "nody-greeter-types";
import BatteryIndicator from "./components/battery-indicator";
import UserGrid from "./components/user-grid";
import { globalPadding } from "./constants";

import image30 from "./images/30.jpg";
import image44 from "./images/44.jpg";
import imageDomi from "./images/dominik.jpg";
import imagePervoj from "./images/pervoj.png";

const users = lightdm?.users ?? [
  {
    username: "pervoj",
    display_name: "Vojtěch Perník",
    image: imagePervoj,
  },
  {
    username: "domi",
    display_name: "Dominik Bartuška",
    image: imageDomi,
  },
  {
    username: "jdoe",
    display_name: "John Doe",
    image: image44,
  },
  {
    username: "fbar",
    display_name: "Foo Bar",
    image: image30,
  },
  {
    username: "fbar2",
    display_name: "Foo Bar",
    image: image30,
  },
  {
    username: "fbar3",
    display_name: "Foo Bar",
    image: image30,
  },
  {
    username: "fbar4",
    display_name: "Foo Bar",
    image: image30,
  },
  {
    username: "fbar5",
    display_name: "Foo Bar",
    image: image30,
  },
  {
    username: "fbar6",
    display_name: "Foo Bar",
    image: image30,
  },
];

const logo = greeter_config?.branding?.logo;

function App() {
  return (
    <div
      className="dark fixed inset-0 grid h-screen w-screen cursor-default select-none items-center bg-neutral-900 text-neutral-100"
      style={{ padding: globalPadding }}
    >
      <UserGrid users={users} />

      <BatteryIndicator />

      <button
        className="fixed flex cursor-pointer items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold opacity-80 shadow transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring"
        style={{ bottom: globalPadding, right: globalPadding }}
      >
        Enter User Name
        <ChevronRight className="size-4" />
      </button>

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

export default App;
