import "./components.css";
const SlideshowPill = (props) => {
    return (
        <div className={props.special ? "slideshow-pill-container large-container" : "slideshow-pill-container"}>
            <span className={"filledCircle"} style={{ backgroundColor: props.array[0] }}></span>
            <span className={"filledCircle"} style={{ backgroundColor: props.array[1] }}></span>
            <span className={"filledCircle"} style={{ backgroundColor: props.array[2] }}></span>
        </div>
    );
};
export default SlideshowPill;
