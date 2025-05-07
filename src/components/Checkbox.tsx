import { ChangeEvent } from "react";
import { Todo, Action } from "@/store/todoReducer";
import { formatDateTime } from "@/helper/date";

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
        className="min-w-4 min-h-4 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={String(task.id)}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        <span className={`${task.done ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </span>
        <br />
        <span
          className={`text-[12px] ${
            task.done ? " text-gray-400 line-through" : ""
          }`}
        >
          {formatDateTime(task.date)}
        </span>
      </label>
    </div>
  );
};
