import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testinomials from "./components/testinomials/Testinomials";
import Contact from "./components/contact/Contact";
import "./app.scss"
function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className = 'sections'>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testinomials/>
        <Contact/>

      </div>
    </div>

  );
}

export default App;


// 32:04 