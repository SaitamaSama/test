import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation/components/navigation";
import styles from "../styles/app.module.css";

export const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (name.trim() === "") return;
    setList([...list, name]);
    setName("");
  };

  const deleteItem = (index) => {
    setList(list.filter((item, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} - <span onClick={() => deleteItem(index)}>Delete</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
