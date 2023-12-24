import logo from "../assets/logo.svg"
import pin from "../assets/icon-location.svg"
import phone from "../assets/icon-phone.svg"
import email from "../assets/icon-email.svg"
import facebook from "../assets/icon-facebook.svg"
import instagram from "../assets/icon-instagram.svg"
import twitter from "../assets/icon-twitter.svg"

const Footer = () => {
    return (
        <footer className="bg-footer pt-64 pb-4 px-4 text-white">
            <img src={logo} alt="Fylo Logo" />

            <div className="flex items-start justify-between min-h-[500px] flex-wrap mt-12">
                <div className="flex flex-wrap content-between min-h-[150px]">
                    <div className="flex">
                        <img src={pin} className="self-start mt-1" alt="Location pin" />
                        <p className="ml-4 max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magnam ut optio accusantium corporis </p>
                    </div>

                    <div>
                        <div className="flex items-center">
                            <img src={phone} alt="Phone" />
                            <p className="ml-4">+1-543-123-4567</p>
                        </div>

                        <div className="flex items-center mt-4">
                            <img src={email} alt="envelop" />
                            <p className="ml-4">example@fylo.com</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-wrap justify-between w-full max-w-[300px]">
                    <div className="flex w-2/4 min-w-[200px] flex-col justify-between">
                        <p>About us</p>
                        <p className="mt-4">Jobs</p>
                        <p className="mt-4">Press</p>
                        <p className="mt-4">Blog</p>
                    </div>

                    <div className="flex flex-col">
                        <p>Contact us</p>
                        <p className="mt-4">Terms</p>
                        <p className="mt-4">Privacy</p>
                    </div>
                </div>

                <div className="flex justify-between min-w-[8rem] max-w-[8rem] ">
                    <a href="#">
                        <img src={facebook} className="border rounded-full p-1" alt="Facebook logo" />
                    </a>
                    <a href="#">
                        <img src={twitter} className="border rounded-full p-1" alt="Twitter logo" />
                    </a>
                    <a href="#">
                        <img src={instagram} className="border rounded-full p-1" alt="Instagram Logo" />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer