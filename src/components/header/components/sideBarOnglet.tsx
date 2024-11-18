import { NavLink } from "react-router-dom";

interface sideBarOngletType {
    to: string,
    text : string
}
const SideBarOnglet = ({to, text} : sideBarOngletType) => {
    return (
        <li>
            <NavLink to={to}>
                <span 
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 text-black "
                > 
                {text} 
                </span>
            </NavLink>
        </li>
    );
}

export default SideBarOnglet;
