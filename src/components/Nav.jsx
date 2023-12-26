import logo from "../assets/logo.svg"

const Nav = ()=>{
    return(
        <header className=" font-raleway p-4 bg-intro">
            <nav className="flex justify-between text-white items-center bg-intro">
                <img src={logo} className="w-24" alt="Fylo" />
                <ul className="flex text-sm">
                    <li><a href="#" target="_blank">Features</a></li>
                    <li className="ml-4"><a href="#" target="_blank">Team</a></li>
                    <li className="ml-4"><a href="#" target="_blank">Sign in</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav