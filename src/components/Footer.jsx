import logo from "../assets/logo.svg"
import pin from "../assets/icon-location.svg"
import phone from "../assets/icon-phone.svg"
import email from "../assets/icon-email.svg"
import facebook from "../assets/icon-facebook.svg"
import instagram from "../assets/icon-instagram.svg"
import twitter from "../assets/icon-twitter.svg"

const Footer = () => {
    return (
        <footer className="bg-footer px-5 pt-64 pb-14 text-white">
            <img src={logo} alt="Fylo Logo" />

            <div className="mt-12">
                <div className="flex">
                    <img src={pin} className="self-start w-10 mt-1" alt="Location pin" />
                    <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magnam ut optio accusantium corporis </p>
                </div>

                <div className="flex items-center mt-4">
                    <img src={phone} alt="Phone" />
                    <p className="ml-4">+1-543-123-4567</p>
                </div>

                <div className="flex items-center mt-4">
                    <img src={email} alt="envelop" />
                    <p className="ml-4">example@fylo.com</p>
                </div>
            </div>

            <div className="mt-16 ">
                <div className="flex flex-col justify-between">
                    <p className="mt-3">About us</p>
                    <p className="mt-3">Jobs</p>
                    <p className="mt-3">Press</p>
                    <p className="mt-3">Blog</p>
                </div>

                <div className="flex flex-col justify-between mt-8">
                    <p className="mt-3">Contact us</p>
                    <p className="mt-3">Terms</p>
                    <p className="mt-3">Privacy</p>
                </div>
            </div>

            <div className="flex justify-between mt-20 mx-auto max-w-[8rem]">
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

        </footer>
    )
}

export default Footer