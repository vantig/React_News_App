import React from 'react';
import facebook from "../../static/images/free-icon-facebook-1077041.svg"
import twitter from "../../static/images/free-icon-twitter-1077032.svg"
import instagram from "../../static/images/free-icon-instagram-1077042.svg"
import telegram from "../../static/images/free-icon-telegram-1077048.svg"
const Footer = () => {

    return (
        <>
            <footer>
                <p>© Gordeychik Ivan 2021</p>
                <ul>
                    <li><a href="https://www.facebook.com/"><img src={facebook} alt="facebook"/></a></li>
                    <li><a href="https://twitter.com/"><img src={twitter} alt="twitter"/></a></li>
                    <li><a href="https://www.instagram.com/"><img src={instagram} alt="instagram"/></a></li>
                    <li><a href="https://www.telegram.com/"><img src={telegram} alt="telegram"/></a></li>
                </ul>
            </footer>
        </>);

}

export default Footer;