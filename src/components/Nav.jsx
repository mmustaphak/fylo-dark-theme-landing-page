import logo from "../assets/logo.svg"
const nav = ()=>{
    return(
        <nav className="flex items-center justify-between p-4 bg-[#181F2A]">
            <img className="w-20" src={logo} alt="" />
            <ul className="text-white flex justify-between w-[60%] max-w-[15rem]">
                <li>Features</li>
                <li>Team</li>
                <li>Sign in</li>
            </ul>
        </nav>
    )
}

export default nav