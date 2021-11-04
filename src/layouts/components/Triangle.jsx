const Triangle = (props) => {
    return (
        <svg className={props.className} width='100%' viewBox='0 0 100 102' preserveAspectRatio='none'>
            <path id='path' d='M0 0 L50 100 L0 100 Z'></path>
            <path id='path' d='M50 100 L100 100 L100 0 Z'></path>
        </svg>
    );
};
export default Triangle;
