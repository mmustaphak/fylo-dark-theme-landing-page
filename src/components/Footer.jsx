import logo from "../assets/logo.svg"
import pin from "../assets/icon-location.svg"
import phone from "../assets/icon-phone.svg"
import email from "../assets/icon-email.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import instagram from "../assets/icon-instagram.svg"


const Footer = () => {
    return (
        <footer className="bg-main">
            <img src={logo} />
            <div>
                <div>
                    <img src={pin} alt="Location" />
                    <p></p>
                </div>
                <div>
                    <img src={phone} alt="Phone number" />
                    <p></p>
                </div>
                <div>
                    <img src={email} alt="Email address" />
                    <p></p>
                </div>
            </div>

            <div>
                <div>
                    <p>About us</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>
                <div>
                    <p>Contact us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
            </div>

            <div>
                <a href="" target="">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="" target="_self">
                    <img src={twitter} alt="Twitter" />
                </a>
                <a href="" target="_self">
                    <img src={instagram} alt="Instagram" />
                </a>
            </div>
        </footer>
    )
}

export default Footer