import { NavLink } from "react-router-dom"
import './styles.css'

export const NavBar = () => {
    return (
        <>
            <div className="title-container">
                <span className="ff-text">HACKER NEWS</span>
            </div>


            <nav className="nav-container">
                <ul className="ul-style">
                    <li className="nav-all">
                        <NavLink
                            className="all-style"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "#1797ff" : "#606060",
                                };
                            }}
                            to="/"
                        >
                            All
                        </NavLink>
                    </li>
                    <li className="nav-faves">
                        <NavLink
                            className="faves-style"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "#1797ff" : "#606060",
                                };
                            }}
                            to="faves"
                        >
                            Myfaves
                        </NavLink>
                    </li>


                </ul>
            </nav>
        </>

    )
}
