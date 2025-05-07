"use client";

import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import useTheme from "@/theme/useTheme";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div className="flex md:min-w-md min-w-sm items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 ">
        <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Список задач
        </h5>

        <button
          onClick={toggleTheme}
          type="button"
          className="flex items-center gap-2 py-2.5 cursor-pointer px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-[22px] border-gray-200 border-3 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:scale-[1.08] duration-300"
        >
          <span>Сменить тему</span>
          {theme === "light" && (
            <IoSunny className="w-[20px] h-[20px] text-yellow-300" />
          )}
          {theme === "dark" && <FaRegMoon className="w-[20px] h-[20px]" />}
        </button>
      </div>
    </div>
  );
};
