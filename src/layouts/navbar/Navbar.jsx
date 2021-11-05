import "./Navbar.css";
const Navbar = (props) => {
    return (
        <div className='navbar-total'>
            <img src='main_logo.gif' />
            <a style={{ fontWeight: "bold" }} href='#home'>
                Wyatt Cowley
            </a>
            <a href='#about'>About Me</a>
            <a href='#project'>Projects</a>

            <a href='#contact'>Contact</a>
        </div>
    );
};
export default Navbar;
