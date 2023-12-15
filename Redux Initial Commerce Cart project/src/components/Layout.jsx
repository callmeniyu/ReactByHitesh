import React from "react"
import { Outlet } from "react-router"
import {Navbar} from "./index"

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    )
}

export default Layout
