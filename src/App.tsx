import { LightDMUser } from "nody-greeter-types";
import { useState } from "react";
import LoginForm from "./components/login-form";
import Page from "./components/page";
import UserGrid from "./components/user-grid";
import Wrapper from "./components/wrapper";
import { users } from "./utils/users";

export default function App() {
  const [page, setPage] = useState<"grid" | "form">("grid");
  const [user, setUser] = useState<LightDMUser | undefined>();

  return (
    <Wrapper>
      <Page active={page == "grid"}>
        <UserGrid
          users={users}
          onSelected={(user) => {
            setUser(user);
            setPage("form");
          }}
        />
      </Page>
      <Page active={page == "form"}>
        <LoginForm user={user} goBack={() => setPage("grid")} />
      </Page>
    </Wrapper>
  );
}
