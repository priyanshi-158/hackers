import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Rootlayout = () => {
  return (
    <div className="overflow-x-hidden">
    <header>
        <Navbar/>
    </header>
    <main className="overflow-x-hidden">
        <Outlet/>
    </main>
    </div>
  )
}

export default Rootlayout