import "./App.css";
import Home from "./layouts/home/Home.jsx";
import AboutMe from "./layouts/aboutme/AboutMe.jsx";
import Projects from "./layouts/projects/Projects.jsx";
import Contact from "./layouts/contact/Contact.jsx";
import Navbar from "./layouts/navbar/Navbar.jsx";
import { Helmet } from "react-helmet";

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
            <Helmet>
                <meta charSet='utf-8' />
                <title>Wyatt Cowley's Website</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='description' content="Wyatt Cowley's website, including his resume, work experience, and contact info." />

                <link rel='canonical' href='http://wyattcowley.com/' />
                <link rel='icon' href='main_logo.gif' />
            </Helmet>
        </div>
    );
}

export default App;
