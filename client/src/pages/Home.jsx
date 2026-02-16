import { useEffect, useState } from "react";
import TaskApi from "../entities/task/TaskApi";

export default function Home({ user }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function load() {
      const loaded = await TaskApi.getAllTasks();
      setTasks(loaded);
    }

    load();
  }, []);

  return (
    <ul>
      {tasks.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}
