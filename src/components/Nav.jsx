import logo from "../assets/logo.svg"
const nav = ()=>{
    return(
        <nav className="bg-[#181F2A]">
            <img src={logo} alt="" />
            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Sign in</li>
            </ul>
        </nav>
    )
}

export default nav