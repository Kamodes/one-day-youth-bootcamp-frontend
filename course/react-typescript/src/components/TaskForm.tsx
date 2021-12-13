import React from "react";
import { Task } from "../";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
  deleteTasks: Task[];
  setDeleteTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
export const TaskForm: React.FC<Props> = ({
  tasks,
  setTasks,
  newTaskLabel,
  setNewTaskLabel,
  deleteTasks,
  setDeleteTasks,
}) => {
  // フォームの値を保持する
  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(newTaskLabel);
    setNewTaskLabel(e.target.value);
  };
  // Taskの登録
  const handleAddTask = () => {
    const newTask = { label: newTaskLabel, isDone: false };
    setTasks([...tasks, newTask]);
    setNewTaskLabel("");
  };
  // 完了したTaskを削除する
  const handleClearTasks = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
    const newDeleteTasks = tasks.filter((task) => task.isDone);
    setTasks(newTasks);
    const deleteList = [...deleteTasks, ...newDeleteTasks];
    setDeleteTasks(deleteList);
  };
  return (
    <>
      <input
        onChange={handleNewTaskLabel}
        type="text"
        value={newTaskLabel}
        placeholder="Enter the task"
      />
      <button onClick={handleAddTask}>Add</button>
      <br />
      <button onClick={handleClearTasks}>Clear</button>
    </>
  );
};
