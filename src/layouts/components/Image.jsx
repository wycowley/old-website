const Image = (props) => {
    return (
        <picture>
            <source srcset={props.src + ".webp"} type='image/webp' />
            <source srcset={props.src + ".jpg"} type='image/jpeg' />
            <img src={props.src + ".jpg"} alt={alt} {...props} />
        </picture>
    );
};
export default Image;
