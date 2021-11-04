import "./Contact.css";
import Triangle from "../components/Triangle.jsx";
const Contact = (props) => {
    return (
        <div className='total-contact-div'>
            <Triangle className='triangle-to-contact'></Triangle>

            <div className='formDiv'>
                <form action='https://formspree.io/wycowley@gmail.com' method='post' id='form'>
                    <br />
                    <br />
                    <h1 className='contactTitle'>Contact Me</h1>
                    <label>Name:</label>
                    <br />
                    <input type='text' name='name' placeholder='Your name' />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input type='email' name='email' placeholder='email@domain.com' />
                    <br />
                    <label>Message:</label>
                    <br />
                    <textarea placeholder='Write your message here' rows='4' name='message'></textarea>
                    <br />
                    <input type='submit' value='Send' id='formpart' name='submit' style={{ width: 100 + "%" }} />
                    <br />
                </form>
            </div>
            <div className='lowDisclaimer'>
                <p style={{ marginLeft: 1 + "%" }}>Coded by Wyatt Cowley</p>
            </div>
        </div>
    );
};
export default Contact;
