import { AddTaskForm } from "@/components/AddTaskForm";
import { Header } from "@/components/Header";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-800">
      <div className="md:min-w-md min-w-sm p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
        <Header />

        <AddTaskForm />

        <div className="border-1 border-dashed rounded border-gray-300 p-4 mt-5 min-h-[200px]">
          
        </div>
      </div>
    </div>
  );
}
