
import Home from "./Pages/Home.jsx";
import Navbar from "./Pages/Navbar.jsx";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";
import Contact from "./Pages/Contact.jsx";
 export default function App(){
  return (
    <div className="min-w-[320px] ">

      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      </div>
  );
}
