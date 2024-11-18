import { NavLink } from "react-router-dom";
export interface ItemOngletType {
    to: string,
    text: string
}
const ItemOnglet = ({to, text}:ItemOngletType) => {
    return (
        <div>
            <NavLink to={to}>
                <span className="text-black">{text}</span>
            </NavLink>
        </div>
    );
}

export default ItemOnglet;
