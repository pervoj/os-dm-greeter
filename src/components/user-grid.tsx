import { ChevronRight } from "lucide-react";
import { LightDMUser } from "nody-greeter-types";
import {
  globalPadding,
  gridGap,
  gridItemWidth,
  gridMaxCols,
  gridMaxItemCount,
  gridMaxRows,
} from "../constants";
import UserGridItem from "./user-grid-item";

export default function UserGrid({ users }: { users: LightDMUser[] }) {
  const list = users.slice(0, gridMaxItemCount);

  const cols =
    list.length < gridMaxItemCount && list.length / gridMaxRows > 1
      ? Math.ceil(list.length / gridMaxRows)
      : gridMaxCols;

  return (
    <div
      className="mx-auto flex w-full flex-wrap justify-center"
      style={{
        gap: gridGap,
        width: cols * gridItemWidth + (cols - 1) * gridGap,
      }}
    >
      {list.map((user) => (
        <UserGridItem key={user.username} user={user} width={gridItemWidth} />
      ))}

      <button
        className="fixed flex cursor-pointer appearance-none items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold opacity-80 shadow transition-opacity hover:opacity-100"
        style={{ bottom: globalPadding, right: globalPadding }}
      >
        Enter User Name
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}
