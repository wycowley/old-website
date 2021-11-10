import Slideshow from "../components/Slideshow";
import { motion } from "framer-motion";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import "./AboutMe.css";
const AboutMe = (props) => {
    return (
        <div>
            <BrowserView>
                <motion.div className='about-section-container' animate={{ opacity: [0, 1] }}>
                    <div className='about-slideshow-container'>
                        <Slideshow array={["family.webp", "halfzion.webp", "star.webp"]} overlap={0}></Slideshow>
                    </div>
                    <div className='about-text-container'>
                        <h1 style={{ textDecoration: "underline", textDecorationStyle: "dotted", textDecorationColor: "rgb(231, 106, 116)" }}>Welcome</h1>
                        <p>
                            My name is Wyatt Cowley, and I'm a senior in high school. Thanks for stopping by!
                            <br /> <br />
                            In my family, I have two siblings, Cyrus and Tessa, my dog, Kody, and my two parents. After graduating, I plan on attending college, and I'm in the application process right now!
                        </p>
                    </div>
                </motion.div>
                <motion.div className='about-section-container'>
                    <div className='about-text-container'>
                        <h1 style={{ textDecoration: "underline", textDecorationStyle: "dotted", textDecorationColor: "rgb(231, 106, 116)" }}>Work Experience</h1>
                        <p>
                            I work at{" "}
                            <a href='https://www.peeryacademy.com/' className='link' target='_blank' rel='noopener'>
                                Peery Piano Academy
                            </a>{" "}
                            as one of their Lead Guides, teaching piano to 5+ students. I have played piano for over ten years and have performed pieces such as Sonate Pathetique and Aufschwung. <br />
                            <br /> This year, I've become a Head Lifeguard at Mountain View Aquatics, leading shifts and trainings.
                            <br />
                            <br /> I also participate and lead a couple of clubs at my high school. I am the President of the Practical Skills Club, and am part of the CS and Business clubs.
                        </p>
                    </div>
                    <div className='about-slideshow-container'>
                        <Slideshow array={["piano2.webp", "chess.webp", "wakeboard.webp"]} overlap={0}></Slideshow>
                    </div>
                </motion.div>
                <motion.div className='about-section-container'>
                    <div className='about-slideshow-container'>
                        <Slideshow array={["eagle.webp", "zionind.webp", "shasta.webp"]} overlap={0}></Slideshow>
                    </div>
                    <div className='about-text-container'>
                        <h1 style={{ textDecoration: "underline", textDecorationStyle: "dotted", textDecorationColor: "rgb(231, 106, 116)" }}>Interests</h1>
                        <p>
                            At school I play Water Polo and Swimming, and have played for all 4 years, on varsity my Junior and Senior years. <br />
                            <br />I am a member of the Church of Jesus Christ of Latter Day Saints, and attend weekly devotionals and activities with my church and youth congregation. I am also a Eagle Scout, receiving my award in Sophomore year. <br />
                            <br />
                            In my free time, I love to read epic fantasy, spend time in the outdoors, and play Minecraft bedwars with my friends. I love going on adventures with my communities: such as scaling Mt. Shasta or scuba diving in Honduras.
                        </p>
                    </div>
                </motion.div>
            </BrowserView>
            {/* ONLY RENDERED FOR MOBILE */}
            <MobileView>
                <motion.div className='about-section-container no-flex' animate={{ opacity: [0, 1] }}>
                    <div className='about-text-container full-width'>
                        <h1 style={{ textDecoration: "underline", textDecorationStyle: "dotted", textDecorationColor: "rgb(231, 106, 116)" }}>Welcome</h1>
                        <p>
                            My name is Wyatt Cowley, and I'm a senior in high school. Thanks for stopping by!
                            <br /> <br />
                            In my family, I have two siblings, Cyrus and Tessa, my dog, Kody, and my two parents. After graduating, I plan on attending college, and I'm in the application process right now!
                        </p>
                    </div>
                    <div className='about-slideshow-container full-width-slideshow'>
                        <Slideshow array={["family.webp", "halfzion.webp", "star.webp"]} overlap={0}></Slideshow>
                    </div>
                </motion.div>
                <motion.div className='about-section-container no-flex'>
                    <div className='about-text-container full-width'>
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
                    <div className='about-slideshow-container full-width-slideshow'>
                        <Slideshow array={["piano2.webp", "chess.webp", "wakeboard.webp"]} overlap={0}></Slideshow>
                    </div>
                </motion.div>
                <motion.div className='about-section-container no-flex'>
                    <div className='about-text-container full-width'>
                        <h1 style={{ textDecoration: "underline", textDecorationStyle: "dotted", textDecorationColor: "rgb(231, 106, 116)" }}>Interests</h1>
                        <p>
                            At school I play Water Polo and Swimming, and have played for all 4 years, on varsity my Junior and Senior years. <br />
                            <br />I am a member of the Church of Jesus Christ of Latter Day Saints, and attend weekly devotionals and activities with my church and youth congregation. I am also a Eagle Scout, receiving my award in Sophomore year. <br />
                            <br />
                            In my free time, I love to read epic fantasy, spend time in the outdoors, and play Minecraft bedwars with my friends. I love going on adventures with my communities: such as scaling Mt. Shasta or scuba diving in Honduras.
                        </p>
                    </div>
                    <div className='about-slideshow-container full-width-slideshow'>
                        <Slideshow array={["eagle.webp", "zionind.webp", "shasta.webp"]} overlap={0}></Slideshow>
                    </div>
                </motion.div>
            </MobileView>
        </div>
    );
};
export default AboutMe;
