import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState, useEffect } from "react";

const Mode = () => {
  const initialMode = localStorage.getItem('portfolio-mode') || 'light';
  const [mode, setMode] = useState(initialMode);

  const element = document.documentElement;

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (mode === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('portfolio-mode', "dark");
    } else {
      element.classList.remove('dark');
      localStorage.setItem('portfolio-mode', "light");
    }
  }, [mode]);

  return (
    <p 
      className="fixed p-3 transition-transform duration-500 rounded-full shadow-lg cursor-pointer right-10 bottom-10 bg-slate-100 hover:scale-110" 
      onClick={toggleMode}
    >
      {mode === "dark" ? (
        <CiLight className="text-2xl" />
      ) : (
        <MdDarkMode className="text-2xl" />
      )}
    </p>
  );
};

export default Mode;
