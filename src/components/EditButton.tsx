import { useRef, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { Todo, Action } from "@/store/todoReducer";

type EditButtonProps = {
  task: Todo;
  dispatch: React.Dispatch<Action>;
};

export const EditButton = ({ task, dispatch }: EditButtonProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [text, setText] = useState(task.title || "");

  const openModal = () => {
    setText(task.title || "");
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    setText("");
    dialogRef.current?.close();
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "EDIT", id: task.id, title: text });
    setText("");
    closeModal();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="p-2 cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
        aria-label="Edit"
      >
        <MdModeEdit className="text-gray-700 dark:text-gray-200" />
      </button>

      <dialog
        ref={dialogRef}
        className="rounded-lg p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white w-full max-w-md
                   backdrop:bg-black/40"
        style={{
          padding: 0,
          border: "none",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <form onSubmit={handleOnSubmit} method="dialog" className="p-6">
          <h2 className="text-lg font-semibold mb-4">Редактировать задачу</h2>
          <input
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите новую задачу"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={closeModal}
              className="cursor-pointer px-4 py-2 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="cursor-pointer px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Сохранять
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};
