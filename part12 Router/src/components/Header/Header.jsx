import React from "react"
import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <nav>
            <Link>
                <img src="	https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" className="header-logo" />
            </Link>

            <Link to="#" className="btns">
                <div className="buttons">
                    <button className="login-btn">Log in</button>
                    <button className="get-started-btn">Get Started</button>
                </div>
            </Link>

            <ul className="nav-items-div">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-item ${isActive && "active"}`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="about"
                        className={({ isActive }) =>
                            `nav-item ${isActive && "active"}`
                        }
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="github"
                        className={({ isActive }) =>
                            `nav-item ${isActive && "active"}`
                        }
                    >
                        Github
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="user"
                        className={({ isActive }) =>
                            `nav-item ${isActive && "active"}`
                        }
                    >
                        User
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
