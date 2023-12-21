import logo from "../assets/logo.svg"
const nav = () => {
    return (
        <nav className="font-raleway bg-intro pt-3">
            <div className="flex items-center justify-between p-4 max-w-[1410px] mx-auto">
                <img className="w-20" src={logo} alt="" />
                <ul className="text-white flex justify-between w-[60%] max-w-[15rem]">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Sign in</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default nav