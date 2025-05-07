export type Todo = {
  id: number;
  title: string;
  done: boolean;
  date: Date;
};

export type Action =
  | { type: "INIT" }
  | { type: "ADD"; title: string }
  | { type: "DELETE"; id: number }
  | { type: "COMPLETED"; id: number; done: boolean }
  | { type: "EDIT"; id: number; title: string };

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  const saveToLocalStorage = (items: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(items));
  };

  switch (action.type) {
    case "INIT":
      if (typeof window === "undefined") return [];
      const json = localStorage.getItem("todos");
      return json ? JSON.parse(json) : [];
    case "ADD":
      const newTodo: Todo = {
        id: Date.now(),
        title: action.title,
        done: false,
        date: new Date(),
      };
      const items = [...state, newTodo];
      saveToLocalStorage(items);
      return items;
    case "DELETE":
      const filteredItems = state.filter((i) => i.id !== action.id);
      saveToLocalStorage(filteredItems);
      return filteredItems;
    case "COMPLETED":
      const newItems = state.map((i) =>
        i.id === action.id ? { ...i, done: action.done } : i
      );
      saveToLocalStorage(newItems);
      return newItems;
    case "EDIT":
      const editedItems = state.map((i) =>
        i.id === action.id ? { ...i, title: action.title } : i
      );
      saveToLocalStorage(editedItems);
      return editedItems;
    default:
      return state;
  }
};
