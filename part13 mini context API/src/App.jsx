import { useState } from "react"
import "./App.css"
import Login from "./components/Login"
import UserContextProvider from "./contexts/UserContextProvider"

function App() {
    return (
      <>
        <UserContextProvider>
          <Login />
        </UserContextProvider>
            
        </>
    )
}

export default App
