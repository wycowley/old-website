import Slideshow from "../components/Slideshow";
import { motion } from "framer-motion";

import "./AboutMe.css";
const AboutMe = (props) => {
    return (
        <div>
            <motion.div className='about-section-container' animate={{ opacity: [0, 1] }}>
                <div className='about-slideshow-container'>
                    <Slideshow array={["prom.jpg", "zion.jpg", "star.jpg"]} overlap={0}></Slideshow>
                </div>
                <div className='about-text-container'>
                    <h1>Welcome</h1>
                    <p>My name is Wyatt Cowley. I am a senior in high school. In this website, you can find information about me, some of the projects I have done, and a way to contact me. I have two siblings, Cyrus and Tessa, my dog Kody, and my parents in my family.</p>
                </div>
            </motion.div>
            <motion.div className='about-section-container'>
                <div className='about-text-container'>
                    <h1>About Me</h1>
                    <p>My name is Wyatt Cowley. I am a sophomore in high school. In this website, you can find information about me, some of the projects I have done, and a way to contact me. I have two siblings, Cyrus and Tessa, my dog Kody, and my parents in my family.</p>
                </div>
                <div className='about-slideshow-container'>
                    <Slideshow array={["shasta.jpg", "wakeboard.jpg", "cool.jpg"]} overlap={0}></Slideshow>
                </div>
            </motion.div>
            <motion.div className='about-section-container'>
                <div className='about-slideshow-container'>
                    <Slideshow array={["star.jpg", "zion.jpg", "cool.jpg"]} overlap={0}></Slideshow>
                </div>
                <div className='about-text-container'>
                    <h1>About Me</h1>
                    <p>My name is Wyatt Cowley. I am a senior in high school. In this website, you can find information about me, some of the projects I have done, and a way to contact me. I have two siblings, Cyrus and Tessa, my dog Kody, and my parents in my family.</p>
                </div>
            </motion.div>
        </div>
    );
};
export default AboutMe;
