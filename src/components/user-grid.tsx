import { ChevronRight, User } from "lucide-react";
import { LightDMUser } from "nody-greeter-types";
import {
  globalPadding,
  gridGap,
  gridItemWidth,
  gridMaxCols,
  gridMaxItemCount,
  gridMaxRows,
} from "../constants";
import { TextButton } from "./button";
import UserGridItem from "./user-grid-item";

export default function UserGrid({
  users,
  onSelected,
}: {
  users: LightDMUser[];
  onSelected: (user: LightDMUser | undefined) => void;
}) {
  const list = users.slice(0, gridMaxItemCount);

  const cols =
    list.length < gridMaxItemCount && list.length / gridMaxRows > 1
      ? Math.ceil(list.length / gridMaxRows)
      : gridMaxCols;

  return (
    <div className="grid items-center">
      <div
        className="relative mx-auto flex w-full flex-wrap justify-center"
        style={{
          gap: gridGap,
          width: cols * gridItemWidth + (cols - 1) * gridGap,
        }}
      >
        {list.map((user) => (
          <UserGridItem
            key={user.username}
            user={user}
            width={gridItemWidth}
            onSelected={onSelected}
          />
        ))}

        {!list.length && (
          <p className="flex items-center gap-1 leading-none opacity-80">
            <User />
            No Users Found
          </p>
        )}

        <TextButton
          className="absolute left-1/2 -translate-x-1/2 pr-3"
          style={{ top: `calc(100% + ${globalPadding}px)` }}
          onClick={() => onSelected(undefined)}
        >
          Enter User Name
          <ChevronRight className="size-4" />
        </TextButton>
      </div>
    </div>
  );
}
