import "./components.css";
const SlideshowPill = (props) => {
    return (
        <div>
            <span className={props.special ? "filledCircle firstRight less" : "filledCircle first"} style={{ backgroundColor: props.array[0] }}></span>
            <span className={props.special ? "filledCircle secondRight less" : "filledCircle second"} style={{ backgroundColor: props.array[1] }}></span>
            <span className={props.special ? "filledCircle thirdRight less" : "filledCircle third"} style={{ backgroundColor: props.array[2] }}></span>
        </div>
    );
};
export default SlideshowPill;
