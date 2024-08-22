import "../src/App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";

function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center p-4 bg-[#16161D]">
      <div className="h-full w-full grid grid-cols-12 md:grid-rows-4 gap-4 text-white">
        <About />
        <Technologies />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}

export default App
