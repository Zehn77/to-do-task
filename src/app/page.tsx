"use client";

import { AddTaskForm } from "@/components/AddTaskForm";
import { Header } from "@/components/Header";
import { TasksList } from "@/components/TasksList";

import { useReducer, useEffect } from "react";
import { todoReducer } from "@/store/todoReducer";

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatch({ type: "INIT" });
  }, []);

  return (
    <div className="py-12 min-h-screen flex justify-center items-center bg-white dark:bg-gray-800">
      <div className="md:w-md min-w-sm p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
        <Header />

        <AddTaskForm dispatch={dispatch} />

        <TasksList todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}
