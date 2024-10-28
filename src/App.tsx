import { greeter_config, lightdm } from "nody-greeter-types";
import UserGrid from "./components/user-grid";

import image30 from "./images/30.jpg";
import image44 from "./images/44.jpg";
import imageDomi from "./images/dominik.jpg";
import hyprlandLogo from "./images/hyprland.svg";
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

const globalPadding = 24;

function App() {
  return (
    <div
      className="dark fixed inset-0 grid h-screen w-screen select-none items-center bg-neutral-900 text-neutral-100"
      style={{ padding: globalPadding }}
    >
      <UserGrid users={users} />

      {logo && <img className="fixed bottom-4 left-4 max-h-8" src={logo} />}
    </div>
  );
}

export default App;
