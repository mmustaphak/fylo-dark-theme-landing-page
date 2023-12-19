import logo from "../assets/logo.svg"
import pin from "../assets/icon-location.svg"
import phone from "../assets/icon-phone.svg"
import email from "../assets/icon-email.svg"

const Footer = () => {
    return (
        <footer className="">
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
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </footer>
    )
}

export default Footer