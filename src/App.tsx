import { greeter_config, lightdm } from "nody-greeter-types";
import UserGrid from "./components/user-grid";

import { globalPadding } from "./constants";
import image30 from "./images/30.jpg";
import image44 from "./images/44.jpg";
import imageDomi from "./images/dominik.jpg";
import hyprlandLogo from "./images/hyprland.png";
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

const logo = greeter_config?.branding?.logo ?? hyprlandLogo;

function App() {
  return (
    <div
      className="dark fixed inset-0 grid h-screen w-screen cursor-default select-none items-center bg-neutral-900 text-neutral-100"
      style={{ padding: globalPadding }}
    >
      <UserGrid users={users} />

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
