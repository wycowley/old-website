import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SlideshowPill from "./SlideshowPill";
import sal from "sal.js";
import "../sal.css";

const Slideshow = (props) => {
    const [firstRotate, setFirstRotate] = useState(0);
    const [secondRotate, setSecondRotate] = useState(0);
    const [thirdRotate, setThirdRotate] = useState(-100);
    const [zIndexes, setZ] = useState([2, 1, 3]);
    const [pillArray, setPillArray] = useState(["white", "rgba(255, 255, 255, .5)", "rgba(255, 255, 255, .5)"]);
    useEffect(() => {
        console.log(firstRotate, secondRotate, thirdRotate);
        sal();
    }, []);
    function shiftTransition() {
        console.log("Things are going down");
        if (thirdRotate == -100) {
            setFirstRotate(-100);
            setSecondRotate(0);
            setThirdRotate(props.overlap);
            setZ([3, 2, 1]);
            setPillArray(["rgba(255, 255, 255, .5)", "white", "rgba(255, 255, 255, .5)"]);
        } else if (secondRotate == -100) {
            setFirstRotate(0);
            setSecondRotate(props.overlap);
            setThirdRotate(-100);
            setZ([2, 1, 3]);
            setPillArray(["white", "rgba(255, 255, 255, .5)", "rgba(255, 255, 255, .5)"]);
        } else {
            setFirstRotate(props.overlap);
            setSecondRotate(-100);
            setThirdRotate(0);
            setZ([1, 3, 2]);
            setPillArray(["rgba(255, 255, 255, .5)", "rgba(255, 255, 255, .5)", "white"]);
        }
    }

    return (
        <div className='actual-img-container' onClick={shiftTransition} data-sal={props.special ? "none" : "slide-right"} data-sal-delay='0' data-sal-easing='ease'>
            <motion.img
                src={props.array[0]}
                className='slide-img'
                animate={{
                    x: firstRotate + "%",
                }}
                initial={false}
                transition={{
                    duration: 0.25,
                }}
                style={{ zIndex: zIndexes[0] }}></motion.img>
            <motion.img
                src={props.array[1]}
                className='slide-img'
                initial={false}
                animate={{
                    x: secondRotate + "%",
                }}
                transition={{
                    duration: 0.25,
                }}
                style={{ zIndex: zIndexes[1] }}></motion.img>
            <motion.img
                src={props.array[2]}
                initial={false}
                className='slide-img'
                animate={{
                    x: thirdRotate + "%",
                }}
                transition={{
                    duration: 0.25,
                }}
                style={{ zIndex: zIndexes[2] }}></motion.img>
            <SlideshowPill array={pillArray} special={props.special}></SlideshowPill>
        </div>
    );
};
export default Slideshow;
