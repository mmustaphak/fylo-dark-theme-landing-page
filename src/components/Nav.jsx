import logo from "../assets/logo.svg"
const nav = ()=>{
    return(
        <nav className="flex font-raleway items-center justify-between p-4 bg-intro">
            <img className="w-20" src={logo} alt="" />
            <ul className="text-white flex justify-between w-[60%] max-w-[15rem]">
                <li><a href="#">Features</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Sign in</a></li>
            </ul>
        </nav>
    )
}

export default nav