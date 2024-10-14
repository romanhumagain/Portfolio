import About from "./components/AboutPage/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Mode from "./components/Mode/Mode";

function App() {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 dark:from-neutral-900 dark:to-neutral-900">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <Mode />

        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
