import React from "react";
import { Task } from "../";

type Props = {
  deleteTasks: Task[];
};
export const TaskDelete: React.FC<Props> = ({ deleteTasks }) => {
  return (
    <>
      <h2>完了したタスク一覧</h2>
      {deleteTasks.map((deleteTask, index) => (
        <li key={`delete_${index}`}>{deleteTask.label}</li>
      ))}
    </>
  );
};
