import logo from "../assets/logo.svg"
import pin from "../assets/icon-location.svg"
import phone from "../assets/icon-phone.svg"
import email from "../assets/icon-email.svg"
import facebook from "../assets/icon-facebook.svg"
import instagram from "../assets/icon-instagram.svg"
import twitter from "../assets/icon-twitter.svg"

const Footer = () => {
    return (
        <footer className="bg-footer">
            <img src={logo} alt="Fylo Logo" />

            <div>
                <div>
                    <div>
                        <img src={pin} alt="Location pin" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magnam ut optio accusantium corporis id autem expedita laboriosam dolorum repudiandae debitis voluptatem iure, quam explicabo natus qui sed vitae labore!</p>
                    </div>

                    <div>
                        <img src={phone} alt="Phone" />
                        <p>+1-543-123-4567</p>
                    </div>

                    <div>
                        <img src={email} alt="envelop" />
                        <p>example@fylo.com</p>
                    </div>
                </div>
            </div>

            <div>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
            
        </footer>
    )
}

export default Footer