import BtnConnexion from "./components/btnConnexion"
import Favicon from "./components/favicon"

const Header = () => {
    return (
        <nav className=" flex justify-between items-center ~p-2/4 ~pl-5/12 ~pr-5/12 relative top-[-300px] sm:top-[-320px] shadow-md ">
           <Favicon/>
           <div>
                <BtnConnexion/>
           </div>
           
        </nav>
    )
}

export default Header