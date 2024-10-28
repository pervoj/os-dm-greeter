import { ChevronRight } from "lucide-react";
import UserGrid from "./components/user-grid";
import Wrapper from "./components/wrapper";
import { globalPadding } from "./constants";
import { users } from "./utils/users";

export default function App() {
  return (
    <Wrapper>
      <UserGrid users={users} />

      <button
        className="fixed flex cursor-pointer items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold opacity-80 shadow transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring"
        style={{ bottom: globalPadding, right: globalPadding }}
      >
        Enter User Name
        <ChevronRight className="size-4" />
      </button>
    </Wrapper>
  );
}
