import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Github, { gitHubInfoLoader } from "./components/Github/Github.jsx"
import User from "./components/User/User.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route loader={gitHubInfoLoader} path="github" element={<Github />} />
            <Route path="user/" element={<User />}>
                <Route path=":userId" element={<User />} />
            </Route>
            <Route path="*" element={<div>NOT FOUND</div>} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
