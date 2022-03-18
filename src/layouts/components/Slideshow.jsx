import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SlideshowPill from "./SlideshowPill";

const Slideshow = (props) => {
    const [firstRotate, setFirstRotate] = useState(0);
    const [secondRotate, setSecondRotate] = useState(0);
    const [thirdRotate, setThirdRotate] = useState(-100);
    const [zIndexes, setZ] = useState([2, 1, 3]);
    const [pillArray, setPillArray] = useState(["white", "rgba(255, 255, 255, .5)", "rgba(255, 255, 255, .5)"]);
    function shiftTransition() {
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
        <div className='actual-img-container' onClick={shiftTransition}>
            <motion.div
                className='slide-img'
                animate={{
                    x: firstRotate + "%",
                }}
                initial={false}
                transition={{
                    duration: 0.25,
                }}
                style={{ zIndex: zIndexes[0], backgroundImage: "url(" + props.array[0] + ")" }}
                alt='first-slide'></motion.div>
            <motion.div
                src={props.array[1]}
                className='slide-img'
                initial={false}
                animate={{
                    x: secondRotate + "%",
                }}
                transition={{
                    duration: 0.25,
                }}
                style={{ zIndex: zIndexes[1], backgroundImage: "url(" + props.array[1] + ")" }}
                alt='second-slide'></motion.div>
            <motion.div
                src={props.array[2]}
                initial={false}
                className='slide-img'
                animate={{
                    x: thirdRotate + "%",
                }}
                transition={{
                    duration: 0.25,
                }}
                style={{ zIndex: zIndexes[2], backgroundImage: "url(" + props.array[2] + ")" }}
                alt='third-slide'></motion.div>
            <SlideshowPill array={pillArray} special={props.special}></SlideshowPill>
        </div>
    );
};
export default Slideshow;
