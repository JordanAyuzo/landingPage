import './App.css';
import { NavBar} from  "./components/NavBar";
import {Banner} from  "./components/Banner";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from "./components/about";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
