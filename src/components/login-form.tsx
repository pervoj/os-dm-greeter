import { LightDMUser } from "nody-greeter-types";
import { TextButton } from "./button";

export default function LoginForm({
  // user,
  goBack,
}: {
  user: LightDMUser | undefined;
  goBack?: () => void;
}) {
  return (
    <div>
      <TextButton onClick={goBack}>Back</TextButton>
    </div>
  );
}
