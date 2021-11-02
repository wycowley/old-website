import logo from "./main_logo.gif";
import "./styles/slideshow.css";
import "./styles/header.css";
import "./styles/info.css";
import "./styles/App.css";
import "./styles/projects.css";
import "./styles/contact.css";

import Header from "./components/header.jsx";
import Slideshow from "./components/slideshow.jsx";
import Info from "./components/info.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";

function App() {
    var textArray = [];
    return (
        <div className='App'>
            <Header />
            <Slideshow />
            <a name='aboutMe' id='aboutMePosition'></a>
            <div id='extraPositioning'> </div>
            <Info side={"left"} type={"welcome"} />
            <Info side={"right"} type={"hobby"} />
            <Info side={"left"} type={"career"} />
            <div className='extraPositioning2'></div>
            <h1 className='projectTitle'>Check out some of my projects!</h1>
            <a name='Projects' id=''></a>

            <Projects />
            <a name='contact' id=''></a>

            <Contact />
        </div>
    );
}

export default App;
