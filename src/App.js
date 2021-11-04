import "./App.css";
import Home from "./layouts/home/Home.jsx";
import AboutMe from "./layouts/aboutme/AboutMe.jsx";
import Projects from "./layouts/projects/Projects.jsx";
import Contact from "./layouts/contact/Contact.jsx";

function App() {
    return (
        <div className='App'>
            <Home></Home>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
}

export default App;
