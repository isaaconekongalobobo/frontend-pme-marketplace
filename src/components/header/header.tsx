import BtnConnexion from "./components/btnConnexion"
import Favicon from "./components/favicon"
import Onglets from "./components/onglets"

const Header = () => {
    return (
        <nav className="flex justify-between items-center ~p-2/4 ~pl-5/12 ~pr-5/12 fixed top-[0.1rem] w-full z-20 shadow-md ">
           <Favicon/>
           <div className="hidden sm:flex items-center gap-7">
                <Onglets/>
                <BtnConnexion/>
           </div>
           
        </nav>
    )
}

export default Header