import React from "react";
import github from "../assets/github.svg"; 
import linkedin from "../assets/linkedin.svg";
import CVsvg from "../assets/CV.svg";
import CV from "../assets/CV.pdf";

import "./contact.css";
const Contact = () => {
    return (
        <footer id="contact">
        <div className="footer__contacts">
            <div className="footer__contact">
                <h3 className="footer__contact__title">Mail</h3>
                <a href="mailto:brad.savary10@gmail.com" className="footer__contact__desc">brad.savary10@gmail.com</a>
            </div>
            <div className="footer__contact">
                <h3 className="footer__contact__title">Téléphone</h3>
                <p className="footer__contact__desc">06 98 27 45 45</p>
            </div>
        </div>
        <div className="footer__medias">
            <a href={CV} target="_blank">
                <img className="footer__media" draggable="false" src={CVsvg} id="CV" alt="CV"/>
            </a>
            <a href="https://www.linkedin.com/in/brad-savary-07322b294/" target="_blank">
                <img className="footer__media" draggable="false" src={linkedin} alt="LinkedIn"/>
            </a>
            <a href="https://github.com/bradsavary" target="_blank">
                <img className="footer__media" draggable="false" src={github} alt="GitHub"/>
            </a>
        </div>
    </footer>
    );
};

export default Contact;