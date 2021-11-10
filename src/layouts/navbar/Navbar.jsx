import "./Navbar.css";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
// import * as rdd from "react-device-detect";
import { useState } from "react";
const Navbar = (props) => {
    // rdd.isMobile = true;
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='navbar-total'>
                <img src='main_logo.gif' alt='logo' />
                <a style={{ fontWeight: "bold" }} href='#home'>
                    Wyatt Cowley
                </a>
                <BrowserView>
                    <a href='#about'>About Me</a>
                    <a href='#project'>Projects</a>
                    <a href='#contact'>Contact</a>
                </BrowserView>
                <MobileView>
                    <img
                        src='menu.png'
                        onClick={() => {
                            setShow(!show);
                        }}
                    />
                </MobileView>
            </div>
            {show ? (
                <div className='additional-things'>
                    <a href='#about'>About Me</a>
                    <a href='#project'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
export default Navbar;
