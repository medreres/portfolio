import About from "./components/About/About";
import Background from "./components/Background/Background";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Background />
      <Home />
      <About />
      <Skills />
      <Projects />
      <div>Some contacts here</div>
    </>
  );
}

export default App;
