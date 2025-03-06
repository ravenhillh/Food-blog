import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Contacts = () => {
  return (
    <div>
      <section id="contact">
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            < MdEmail />
            <p>
              <a href="mailto:jonhill1598@gmail.com">jonhill1598@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            < FaFacebook/>
            <p>
              <a href="https://www.facebook.com/jonathan.hill.9085790" style={{color:"blue"}}>Facebook</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
