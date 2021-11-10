import "./Contact.css";
import Triangle from "../components/Triangle.jsx";

import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

const Contact = (props) => {
    return (
        <div className='total-contact-div'>
            <Triangle className='triangle-to-contact'></Triangle>
            <div className='icon-container'>
                <a href='https://www.instagram.com/wycowley/' target='_blank' rel='noopener' aria-label='instagram'>
                    {" "}
                    <SiInstagram></SiInstagram>
                </a>
                <a href='https://github.com/wycowley' target='_blank' rel='noopener' aria-label='github'>
                    {" "}
                    <SiGithub></SiGithub>
                </a>
                <a href='mailto:wycowley@gmail.com' target='_blank' rel='noopener' aria-label='email'>
                    <MdOutlineMail></MdOutlineMail>
                </a>
            </div>
            <p className='final-title'>
                Created by Wyatt Cowley using{" "}
                <a href='https://reactjs.org/' style={{ color: "black" }} target='_blank' rel='noopener'>
                    React.js
                </a>
            </p>
        </div>
    );
};
export default Contact;
