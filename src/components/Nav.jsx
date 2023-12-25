import logo from "../assets/logo.svg"

const Nav = ()=>{
    return(
        <header>
            <nav>
                <img src={logo} alt="Fylo" />
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Sign in</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav