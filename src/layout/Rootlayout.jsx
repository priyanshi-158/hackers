import { Outlet } from "react-router-dom"

const Rootlayout = () => {
  return (
    <div>
    <header>
        header
    </header>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default Rootlayout