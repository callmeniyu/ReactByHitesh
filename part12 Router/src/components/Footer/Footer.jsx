import React from "react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <hr />
            <div className="footer">
                <div>
                    <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        alt=""
                        className="footer-logo"
                    />
                </div>
                <div className="footer-elements-div">
                    <ul>
                        <h4>RESOURCES</h4>
                        <Link to="">
                            <li>Home</li>
                        </Link>
                        <Link to="about">
                            <li>About</li>
                        </Link>
                    </ul>

                    <ul>
                        <h4>FOLLOW US</h4>
                        <Link to="#">
                            <li>Github</li>
                        </Link>
                        <Link to="#">
                            <li>Discord</li>
                        </Link>
                    </ul>

                    <ul>
                        <h4>LEGAL</h4>
                        <Link to="#">
                            <li>Privacy Policy</li>
                        </Link>
                        <Link to="#">
                            <li>Terms & Conditions</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Footer
