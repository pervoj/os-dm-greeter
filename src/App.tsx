import { lightdm } from "nody-greeter-types";
import { useState } from "react";

const users = lightdm.users;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.username}>{user.display_name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
