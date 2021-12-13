import React from "react";
import { Task } from "../";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  deleteTasks: Task[];
};

export const TaskDelete: React.FC<Props> = ({
  tasks,
  setTasks,
  deleteTasks,
}) => {
  const handleCheckTask = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const newTasks = deleteTasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: !e.target.checked } : task;
    });
  };
  const handleBackTask = () => {};
  return (
    <>
      <h2>完了したタスク一覧</h2>
      {deleteTasks.map((deleteTask, index) => (
        <li key={`delete_${index}`}>
          {deleteTask.label}
          <input
            type="checkbox"
            onChange={(e) => {
              handleCheckTask(e, index);
            }}
          />
        </li>
      ))}
      <br />
      <input type="submit" onSubmit={handleBackTask} value="Redo" />
    </>
  );
};
