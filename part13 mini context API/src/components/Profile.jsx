import React, { useContext } from "react"
import UserContext from "../contexts/userContext"
function Profile() {
    const { user } = useContext(UserContext)

    if(!user) return <h2 className="text-white absolute absolute right-[38rem]">Not logged in</h2>
    return (
        <>
            
            <div className="text-white absolute right-[38rem]">Profile : {user.userName}</div>
        </>
    )
}

export default Profile
