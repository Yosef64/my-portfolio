import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Port from "./components/protfolio/port";
import Tes from "./components/testimonials/tes";
import Topbar from "./components/topbar/topbar";
import Works from "./components/works/works";
import './app.scss'
import {useState} from 'react'
import Menu from "./components/Menu/menu";
function App() {
  const [menuopen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar  menuopen={menuopen} setMenuOpen={setMenuOpen}/>
      <Menu menuopen={menuopen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Port />
        <Works />
        <Tes />
        <Contact />
      </div>
    </div>
  );
}

export default App;
