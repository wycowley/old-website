import { useEffect, useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
// import * as rdd from "react-device-detect";

const IndProject = (props) => {
    const [showDesc, setDesc] = useState(false);
    // rdd.isMobile = true;
    useEffect(() => {
        console.log(props.name);
        console.log(props.description);
        console.log(props.src);
    }, [isMobile]);
    function expand() {
        setDesc(!showDesc);
    }
    return (
        <>
            <div onClick={expand} className={isMobile ? "ind-project-container-mobile" : "ind-project-container"} id={showDesc ? (isMobile ? "grow-mobile" : "grow") : ""}>
                <div className='always-visible-section'>
                    <img src={props.src}></img>
                    <h2 className={isMobile ? "mobile-project-title" : ""}>{props.name}</h2>
                </div>
                {showDesc ? (
                    <div>
                        <p>{props.description}</p>
                        <a href={props.link} target='_blank' style={{ textDecoration: "underline dotted 1px", fontWeight: "bold", color: "black" }}>
                            Check it out!
                        </a>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};
export default IndProject;
