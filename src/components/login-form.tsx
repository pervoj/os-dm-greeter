import { ChevronLeft } from "lucide-react";
import { LightDMUser } from "nody-greeter-types";
import { globalPadding } from "../constants";
import { TextButton } from "./button";

export default function LoginForm({
  user,
  goBack,
}: {
  user?: LightDMUser;
  goBack?: () => void;
}) {
  return (
    <div>
      <h1>Login Form</h1>
      {user ? <div></div> : <input type="text" />}
      <input type="password" />
      <TextButton
        className="fixed pl-3"
        style={{ bottom: globalPadding, left: globalPadding }}
        onClick={goBack}
      >
        <ChevronLeft className="size-4" />
        Back
      </TextButton>
    </div>
  );
}
