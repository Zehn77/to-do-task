"use client";

import { DeleteButton } from "./DeleteButton";
import { Checkbox } from "./Checkbox";
import { EditButton } from "./EditButton";
import { Todo, Action } from "@/store/todoReducer";

type TasksListProps = {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
};

export const TasksList = ({ todos, dispatch }: TasksListProps) => {
  return (
    <div className="border-1 border-dashed rounded border-gray-300 p-4 mt-5 min-h-[200px]">
      <ul>
        {todos.map((i) => (
          <div key={i.id} className="flex items-center justify-between mb-4">
            <Checkbox task={i} dispatch={dispatch} />

            <div className="flex gap-2">
              <EditButton task={i} dispatch={dispatch} />
              <DeleteButton id={i.id} dispatch={dispatch} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
