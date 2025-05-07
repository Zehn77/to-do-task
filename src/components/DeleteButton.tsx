import { MdDelete } from "react-icons/md";
import { Action } from "@/store/todoReducer";

type DeleteButtonProps = {
  dispatch: React.Dispatch<Action>;
  id: number;
};

export const DeleteButton = ({ dispatch, id }: DeleteButtonProps) => {
  const deleteTask = (id: number) => {
    dispatch({ type: "DELETE", id });
  };
  return (
    <button
      onClick={() => deleteTask(id)}
      className="p-2 cursor-pointer rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Delete"
    >
      <MdDelete className="text-gray-700 dark:text-gray-200" />
    </button>
  );
};
