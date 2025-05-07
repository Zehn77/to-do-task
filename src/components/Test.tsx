"use client";

import { useEffect } from "react";
import useTheme from "@/theme/useTheme";

export default function Test() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log(theme, "salom");
  }, [theme]);

  return (
    <>
      Test Component
      <div className="bg-white text-black dark:bg-black dark:text-white">
        Salom!
      </div>
      <button onClick={toggleTheme}>Dark</button>
    </>
  );
}
