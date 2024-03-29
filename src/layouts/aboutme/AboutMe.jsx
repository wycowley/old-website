import Slideshow from "../components/Slideshow";
import { motion } from "framer-motion";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import "./AboutMe.css";
const AboutMe = (props) => {
    return (
        <div>
            <BrowserView>
                <div className='about-section-container'>
                    <div className='about-slideshow-container'>
                        <Slideshow array={["family.webp", "halfzion.webp", "star.webp"]} overlap={0}></Slideshow>
                    </div>
                    <div className='about-text-container'>
                        <h1>Welcome</h1>
                        <p>
                            My name is Wyatt Cowley, and I'm an incoming freshman to BYU planning to study Computer Science. Thanks for stopping by!
                            <br /> <br />
                            In my family, I have two siblings, Cyrus and Tessa, my dog (Kody), and my two parents.
                        </p>
                    </div>
                </div>
                <div className='about-section-container'>
                    <div className='about-text-container'>
                        <h1>Work Experience</h1>
                        <p>
                            I work at{" "}
                            <a href='https://www.peeryacademy.com/' className='link' target='_blank' rel='noopener'>
                                Peery Piano Academy
                            </a>{" "}
                            as one of their Lead Guides, teaching piano to 5+ students. I have played piano for over ten years and have performed pieces such as Sonate Pathetique and Liebestraum. Check out{" "}
                            <a href='https://wyattcowley.com/music/' className='link' target='_blank' rel='noopener'>
                                my portfolio here
                            </a>
                            !<br />
                            <br /> During the summer, I lifeguard and teach swim lessons at my local pool.
                            <br />
                            <br /> I participated and led a couple of clubs in high school. I was the President of the Practical Skills Club, and was part of the CS and Business clubs on campus.
                        </p>
                    </div>
                    <div className='about-slideshow-container'>
                        <Slideshow array={["piano2.webp", "chess.webp", "wakeboard.webp"]} overlap={0}></Slideshow>
                    </div>
                </div>
                <div className='about-section-container'>
                    <div className='about-slideshow-container'>
                        <Slideshow array={["eagle.webp", "zionind.webp", "shasta.webp"]} overlap={0}></Slideshow>
                    </div>
                    <div className='about-text-container'>
                        <h1>Interests</h1>
                        <p>
                            At school I play Water Polo and Swimming, and have played for all 4 years, on varsity my Junior and Senior years. I am Varsity Swim Captain this year.
                            <br />
                            <br />I am a member of the Church of Jesus Christ of Latter Day Saints, and attend weekly devotionals and activities with my church and youth congregation. I am also a Eagle Scout, receiving my award in Sophomore year. <br />
                            <br />
                            In my free time, I love to read epic fantasy, spend time in the outdoors, and play Minecraft bedwars with my friends. I love going on adventures with my communities: such as scaling Mt. Shasta or scuba diving in Honduras.
                        </p>
                    </div>
                </div>
            </BrowserView>
            {/* ONLY RENDERED FOR MOBILE */}
            <MobileView>
                <div className='about-section-container no-flex'>
                    <div className='about-text-container full-width'>
                        <h1>Welcome</h1>
                        <p>
                            My name is Wyatt Cowley, and I'm an incoming freshman to BYU planning to study Computer Science. Thanks for stopping by!
                            <br /> <br />
                            In my family, I have two siblings, Cyrus and Tessa, my dog (Kody), and my two parents.
                        </p>
                    </div>
                    <div className='about-slideshow-container full-width-slideshow'>
                        <Slideshow array={["family.webp", "halfzion.webp", "star.webp"]} overlap={0}></Slideshow>
                    </div>
                </div>
                <div className='about-section-container no-flex'>
                    <div className='about-text-container full-width'>
                        <h1>Work Experience</h1>
                        <p>
                            I work at{" "}
                            <a href='https://www.peeryacademy.com/' className='link' target='_blank' rel='noopener'>
                                Peery Piano Academy
                            </a>{" "}
                            as one of their Lead Guides, teaching piano to 5+ students. I have played piano for over ten years and have performed pieces such as Sonate Pathetique and Liebestraum. Check out{" "}
                            <a href='https://wyattcowley.com/music/' className='link' target='_blank' rel='noopener'>
                                my portfolio here
                            </a>
                            !<br />
                            <br /> During the summer, I lifeguard and teach swim lessons at my local pool.
                            <br />
                            <br /> I participated and led a couple of clubs in high school. I was the President of the Practical Skills Club, and was part of the CS and Business clubs on campus.
                        </p>
                    </div>
                    <div className='about-slideshow-container full-width-slideshow'>
                        <Slideshow array={["piano2.webp", "chess.webp", "wakeboard.webp"]} overlap={0}></Slideshow>
                    </div>
                </div>
                <div className='about-section-container no-flex'>
                    <div className='about-text-container full-width'>
                        <h1>Interests</h1>
                        <p>
                            At school I play Water Polo and Swimming, and have played for all 4 years, on varsity my Junior and Senior years. I am Varsity Swim Captain this year.
                            <br />
                            <br />I am a member of the Church of Jesus Christ of Latter Day Saints, and attend weekly devotionals and activities with my church and youth congregation. I am also a Eagle Scout, receiving my award in Sophomore year. <br />
                            <br />
                            In my free time, I love to read epic fantasy, spend time in the outdoors, and play Minecraft bedwars with my friends. I love going on adventures with my communities: such as scaling Mt. Shasta or scuba diving in Honduras.
                        </p>
                    </div>
                    <div className='about-slideshow-container full-width-slideshow'>
                        <Slideshow array={["eagle.webp", "zionind.webp", "shasta.webp"]} overlap={0}></Slideshow>
                    </div>
                </div>
            </MobileView>
        </div>
    );
};
export default AboutMe;
