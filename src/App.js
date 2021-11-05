import "./App.css";
import Home from "./layouts/home/Home.jsx";
import AboutMe from "./layouts/aboutme/AboutMe.jsx";
import Projects from "./layouts/projects/Projects.jsx";
import Contact from "./layouts/contact/Contact.jsx";
import Navbar from "./layouts/navbar/Navbar.jsx";
function App() {
    return (
        <div className='App'>
            <Navbar></Navbar>
            <a id='home'></a>
            <Home></Home>
            <a id='about'></a>

            <AboutMe></AboutMe>
            <a id='project'></a>

            <Projects></Projects>
            <a id='contact'></a>

            <Contact></Contact>
        </div>
    );
}

export default App;
