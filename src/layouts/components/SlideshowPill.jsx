import "./components.css";
const SlideshowPill = (props) => {
    return (
        <div>
            <span className='filledCircle first' style={{ backgroundColor: props.array[0] }}></span>
            <span className='transparentCircle second' style={{ backgroundColor: props.array[1] }}></span>
            <span className='transparentCircle third' style={{ backgroundColor: props.array[2] }}></span>
        </div>
    );
};
export default SlideshowPill;
