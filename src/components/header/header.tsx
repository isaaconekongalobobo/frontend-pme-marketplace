import BtnConnexion from "./components/btnConnexion"
import Favicon from "./components/favicon"

const Header = () => {
    return (
        <nav className=" flex justify-between items-center ~p-2/10  ">
           <Favicon/>
           <div>
                <BtnConnexion/>
           </div>
           
        </nav>
    )
}

export default Header