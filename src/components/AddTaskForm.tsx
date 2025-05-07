"use client";

import { useState } from "react";
import { Action } from "@/store/todoReducer";

interface AddTaskFormProps {
  dispatch: React.Dispatch<Action>;
}

export const AddTaskForm = ({ dispatch }: AddTaskFormProps) => {
  const [text, setText] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD", title: text });
    setText("");
  };

  return (
    <form onSubmit={handleOnSubmit} className="mt-5 flex items-center gap-2">
      <input
        type="text"
        id="default-search"
        autoComplete="off"
        className="block w-full px-2 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-[0.5px] focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder:text-[15px] placeholder:font-medium"
        placeholder="Введите новую задачу"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="submit"
        className="py-2.5 cursor-pointer px-5 text-sm font-medium text-white hover:opacity-90 focus:outline-none bg-green-600 rounded dark:bg-green-800 dark:hover:text-white dark:hover:bg-green-700 "
      >
        Добавить
      </button>
    </form>
  );
};
