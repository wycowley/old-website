import "./Home.css";
import Slideshow from "../components/Slideshow.jsx";
const Home = () => {
    return (
        <div className=' home'>
            <Slideshow array={["portrait.jpg", "familyHonduras.jpg", "wildflowers.jpg"]} overlap={0}></Slideshow>

            <div className='title-container'>
                <h1 className='main-title'>Wyatt Cowley</h1>
            </div>
        </div>
    );
};
export default Home;
