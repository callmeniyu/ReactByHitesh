import React, { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <>
            <div className="tw-flex  tw-justify-between">
                <h3>Redux tool kit</h3>
                <div className=" tw-flex nav-items tw-gap-5">
                    <NavLink to="/">Products</NavLink>
                    <NavLink to="cart">Add</NavLink>
                </div>
                <h1 className="plus tw-cursor-pointer" onClick={()=>setIsClicked((prev)=>!prev)}>+</h1>
            </div>

            <div className={`nav-div tw-flex tw-flex-col   ${isClicked ? "show" : "hide"}`}>
                <NavLink to="/">hi</NavLink>
                <NavLink to="cart">there</NavLink>
            </div>
        </>
    )
}

export default Navbar
