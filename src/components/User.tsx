import { useState } from "react";

interface UserInterface {
  uid: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<UserInterface>();
  const login = () => {
    setUser({
      uid: "asdasd",
      name: "name lastname",
    });
  };
  return (
    <div className="mt-5">
      <h3>User</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      {!user ? (
        <pre>no hay usuario</pre>
      ) : (
        <pre>{JSON.stringify(user, null, 4)}</pre>
      )}
    </div>
  );
};
