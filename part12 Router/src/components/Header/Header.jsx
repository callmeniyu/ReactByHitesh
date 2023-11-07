import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav>
            <Link to="" >
                <img src="	https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt=""  className="header-logo"/>
            </Link>

            <Link to="#" className="btns">
                <div className="buttons">
                    <button className="login-btn">Log in</button>
                    <button className="get-started-btn">Get Started</button>
                </div>
            </Link>

            <ul className="nav-items-div">
                <Link to="" className="nav-item">
                    <li >Home</li>
                </Link>

                <Link to="about" className="nav-item">
                    <li>About</li>
                </Link>

                <Link to="github" className="nav-item">
                    <li>Github</li>
                </Link>

                <Link to="user" className="nav-item">
                    <li>User</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header
