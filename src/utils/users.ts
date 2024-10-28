import { lightdm } from "nody-greeter-types";
import image30 from "../images/30.jpg";
import image44 from "../images/44.jpg";
import imageDomi from "../images/dominik.jpg";
import imagePervoj from "../images/pervoj.png";

export const users = lightdm?.users ?? [
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
    image: "",
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
