import { useState } from "react"
import BtnConnexion from "./components/btnConnexion"
import BurgerButton from "./components/burgerButton"
import Favicon from "./components/favicon"
import Onglets from "./components/onglets"
import SideBar from "./components/sideBar"

const Header = () => {
    const [sideBar, setSideBar] = useState<boolean> (false)
    return (
        <nav className="flex justify-between items-center ~p-2/4 ~pl-5/12 ~pr-5/12 fixed top-[0.1rem] w-full z-20 shadow-md ">
           <Favicon/>
           <div className="hidden sm:flex items-center gap-7">
                <Onglets/>
                <BtnConnexion/>
           </div>
           <div className=" sm:hidden ">
                <BurgerButton sideBar={sideBar} setSideBar={setSideBar} />
           </div>
           { sideBar && <SideBar userName="" userAvatar="" setSideBar={setSideBar} /> }
        </nav>
    )
}

export default Header