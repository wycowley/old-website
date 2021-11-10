import "./Home.css";
import Slideshow from "../components/Slideshow.jsx";
import Triangle from "../components/Triangle.jsx";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

const Home = () => {
    return (
        <div className=' home'>
            <Slideshow array={["portrait.webp", "familyHonduras.webp", "wildflowers.webp"]} overlap={0} special={true}></Slideshow>

            <BrowserView>
                <div className='title-container'>
                    <h1 className='main-title'>Wyatt Cowley</h1>

                    <a className='main-chevron-container' href='#about'>
                        <img src='chevron.webp' className='main-chevron' alt='chevron'></img>
                    </a>
                </div>
            </BrowserView>
            <MobileView>
                <div className='title-container-mobile'>
                    <h1 className='main-title'>Wyatt Cowley</h1>
                </div>
            </MobileView>
            <BrowserView>
                <Triangle className='triangle-beneath'></Triangle>
                <Triangle className='triangle-beneath2'></Triangle>
            </BrowserView>
        </div>
    );
};
export default Home;
