import { lightdm } from "nody-greeter-types";

const users = lightdm.users ?? [];

function App() {
  return (
    <div className="w-screen h-screen fixed inset-0 dark bg-neutral-900 text-neutral-100 grid place-content-center">
      <div className="grid gap-3 w-full max-w-96 px-4">
        <h1 className="text-center">Users</h1>
        <div className="grid gap-3">
          {users.map((user) => (
            <div
              key={user.username}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors grid grid-cols-[auto_1fr] gap-2 items-center"
            >
              <img
                src={user.image}
                alt=""
                className="size-12 rounded-full border-2 border-white/5 bg-white/5"
              />
              <div className="grid gap-1 leading-none">
                <span className="text-lg font-bold truncate">
                  {user.display_name}
                </span>
                <span className="truncate">{user.username}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
