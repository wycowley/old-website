import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const array = ["./images/wyattPic.jpg", "./images/familyHonduras.jpg", "./images/wildflowers.jpg"];

const Slideshow = (props) => {
    const [firstY, setFirstY] = useState(0);
    const [secondY, setSecondY] = useState(0);
    const [thirdY, setThirdY] = useState(0);
    console.log(firstY);

    useEffect(() => {
        // window.setTimeout((e) => {
        //     setFirstY(100);
        // }, 0);
        setFirstY(100);
        setInterval(switchThings, 2000);
        // return clearInterval(thing);
    }, []);
    const switchThings = () => {
        // console.log("CONSOLE");
        if (firstY == 100) {
            // console.log("Second");
            // console.log(firstY, secondY, thirdY);
            setFirstY(0);
            setSecondY(100);
            setThirdY(0);
            // return;
        } else if (secondY == 100) {
            // console.log("Third");
            // console.log(firstY, secondY, thirdY);

            setFirstY(0);
            setSecondY(0);
            setThirdY(100);
            // return;
        } else {
            // console.log("First");
            // console.log(firstY, secondY, thirdY);

            setFirstY(100);
            setSecondY(0);
            setThirdY(0);
            // return;
        }
    };
    return (
        <div id='full-height full-width'>
            <motion.img src={array[0]} rel='preload' className={" full-width full-height openerSlide "} animate={{ height: firstY + "%" }} />
            <motion.img src={array[1]} rel='preload' className={" full-width full-height openerSlide "} animate={{ height: secondY + "%" }} />
            <motion.img src={array[2]} rel='preload' className={" full-width full-height openerSlide "} animate={{ height: thirdY + "%" }} />
            <div id={"titleContainer"}>
                <h1 id={"nameTitle"}>
                    Wyatt Cowley{" "}
                    <a id={"lowerArrow"} href={"#aboutMe"}>
                        <img src='./images/chevron.png' className={"arrowThing"}></img>
                    </a>
                </h1>
            </div>
        </div>
    );
};
export default Slideshow;

const FancyImg = (props) => {
    return <img className={" full-width full-height openerSlide "} src={props.src}></img>;
};
