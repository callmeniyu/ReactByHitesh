import React, { useContext ,useState } from "react"
import UserContext from "../contexts/userContext"
import Profile from "./Profile"

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)
    
    const handleClick = () => {
        setUser({userName,password})
    }

    return (
        <div className="bg-black w-full h-screen flex items-center justify-center">
            <div className="">
                <input
                    className="rounded-md py-2 px-2 mx-3"
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username"
                />
                <input
                    className="rounded-md py-2 px-2"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
            </div>
            <div>
                <button
                    className="bg-white rounded-md w-24 py-2 px-2 mx-2 my-4" type="submit"
                    onClick={handleClick}
                >
                    Login
                </button>
                <Profile />

            </div>
        </div>
    )
}

export default Login
