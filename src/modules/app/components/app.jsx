import React from "react";
import { User } from "../../user/components/user";
import styles from "../styles/app.module.css";

export const App = () => {
  const [users, setUsers] = React.useState([]);
  const [name, setName] = React.useState("");
  const [job, setJob] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
    })();
  }, []);

  const addUser = async (ev) => {
    ev.preventDefault();
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        job,
      }),
    });
    const data = await response.json();
    console.log("debug> created user", data);
  };

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <User
          key={user.id}
          email={user.email}
          firstName={user.first_name}
          lastName={user.last_name}
          id={user.id}
          avatar={user.avatar}
        />
      ))}
      <form onSubmit={(ev) => addUser(ev)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
