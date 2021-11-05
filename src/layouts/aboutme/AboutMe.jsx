import Slideshow from "../components/Slideshow";
import { motion } from "framer-motion";

import "./AboutMe.css";
const AboutMe = (props) => {
    return (
        <div>
            <motion.div className='about-section-container' animate={{ opacity: [0, 1] }}>
                <div className='about-slideshow-container'>
                    <Slideshow array={["family.jpg", "halfzion.jpg", "star.jpg"]} overlap={0}></Slideshow>
                </div>
                <div className='about-text-container'>
                    <h1 style={{ textDecoration: "underline", textDecorationStyle: "dotted", textDecorationColor: "rgb(231, 106, 116)" }}>Welcome</h1>
                    <p>
                        My name is Wyatt Cowley, and I'm a senior in high school. <br /> <br />I have two siblings, Cyrus and Tessa, my dog Kody, and my parents in my family.
                    </p>
                </div>
            </motion.div>
            <motion.div className='about-section-container'>
                <div className='about-text-container'>
                    <h1 style={{ textDecoration: "underline", textDecorationStyle: "dotted", textDecorationColor: "rgb(231, 106, 116)" }}>Work Experience</h1>
                    <p>
                        I work at{" "}
                        <a href='https://www.peeryacademy.com/' className='link' target='_blank'>
                            Peery Piano Academy
                        </a>{" "}
                        as one of their Lead Guides, teaching piano to 5+ students. I have played piano for over ten years and have performed pieces such as Sonate Pathetique and Aufschwung. <br />
                        <br /> This year, I've become a Head Lifeguard at Mountain View Aquatics, leading shifts and trainings.
                        <br />
                        <br /> I also participate and lead a couple of clubs at my high school. I am the President of the Practical Skills Club, and am part of the CS and Business clubs.
                    </p>
                </div>
                <div className='about-slideshow-container'>
                    <Slideshow array={["piano2.png", "chess.jpg", "wakeboard.jpg"]} overlap={0}></Slideshow>
                </div>
            </motion.div>
            <motion.div className='about-section-container'>
                <div className='about-slideshow-container'>
                    <Slideshow array={["eagle.jpg", "zionind.jpg", "shasta.jpg"]} overlap={0}></Slideshow>
                </div>
                <div className='about-text-container'>
                    <h1 style={{ textDecoration: "underline", textDecorationStyle: "dotted", textDecorationColor: "rgb(231, 106, 116)" }}>Interests</h1>
                    <p>
                        At school I play Water Polo and Swimming, and have played for all 4 years, on varsity my Junior and Senior years. <br />
                        <br />I love the outdoors I am an Eagle Scout and a member of the Church of Jesus Christ of Latter Day Saints.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
export default AboutMe;
