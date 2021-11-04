import { useEffect, useState } from "react";

const IndProject = (props) => {
    const [showDesc, setDesc] = useState(false);
    useEffect(() => {
        console.log(props.name);
        console.log(props.description);
        console.log(props.src);
    }, []);
    function expand() {
        setDesc(!showDesc);
    }
    return (
        <div onClick={expand} className='ind-project-container' id={showDesc ? "grow" : ""}>
            <div className='always-visible-section'>
                <img src={props.src}></img>
                <h2>{props.name}</h2>
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
    );
};
export default IndProject;
