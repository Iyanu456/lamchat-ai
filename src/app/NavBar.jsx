import Image from "next/image"
import logo from "./assets/icons/lama-svg-0.svg"
export default function NavBar() {
    return (
        <header>
            <Image style={{height: "40px", width: "40px"}}src={logo} alt="llama" />
            <nav>
                <ul>
                    <li><b>Home</b></li>
                    <li><b>About</b></li>
                </ul>
            </nav>
        </header>  
    )
}