import logo from "./react-logo.png"
export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </nav>
        </header>
    )
}
