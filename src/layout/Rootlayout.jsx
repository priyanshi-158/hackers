import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Rootlayout = () => {
  return (
    <div>
    <header>
        <Navbar/>
    </header>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default Rootlayout