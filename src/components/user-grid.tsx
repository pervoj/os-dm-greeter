import { LightDMUser } from "nody-greeter-types";
import UserGridItem from "./user-grid-item";

const width = 224;
const gap = 16;

const maxCols = 4;
const maxRows = 2;
const maxCount = maxCols * maxRows;

export default function UserGrid({ users }: { users: LightDMUser[] }) {
  const list = users.slice(0, maxCount);

  const cols =
    list.length < maxCount && list.length / maxRows > 1
      ? Math.ceil(list.length / maxRows)
      : maxCols;

  return (
    <div
      className="mx-auto flex w-full flex-wrap justify-center"
      style={{ gap, width: cols * width + (cols - 1) * gap }}
    >
      {list.map((user) => (
        <UserGridItem key={user.username} user={user} width={width} />
      ))}

      <button className="fixed bottom-4 right-4">Enter User Name &gt;</button>
    </div>
  );
}
