import { LightDMUser } from "nody-greeter-types";
import {
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
    </div>
  );
}
