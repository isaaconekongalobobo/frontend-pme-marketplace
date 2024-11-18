import BtnConnexion from "./components/btnConnexion"
import Favicon from "./components/favicon"
import Onglets from "./components/onglets"

const Header = () => {
    return (
        <nav className=" flex justify-between items-center ~p-2/4 ~pl-5/12 ~pr-5/12 relative top-[-19rem] shadow-md ">
           <Favicon/>
           <div className="flex">
                <Onglets/>
                <BtnConnexion/>
           </div>
           
        </nav>
    )
}

export default Header