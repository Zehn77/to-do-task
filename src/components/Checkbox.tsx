import { ChangeEvent } from "react";
import { Todo, Action } from "@/store/todoReducer";

type CheckboxProps = {
  task: Todo;
  dispatch: React.Dispatch<Action>;
};

export const Checkbox = ({ task, dispatch }: CheckboxProps) => {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    dispatch({ type: "COMPLETED", id: task.id, done: isChecked });
  };

  return (
    <div className="flex items-center">
      <input
        id={String(task.id)}
        type="checkbox"
        checked={task.done}
        onChange={handleCheckboxChange}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={String(task.id)}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        <span className={`${task.done ? "line-through" : ""}`}>
          {task.title}
        </span>
      </label>
    </div>
  );
};
