import { Link } from "react-router-dom";
export interface ItemOngletType {
    to: string,
    text: string
}
const ItemOnglet = ({to, text}:ItemOngletType) => {
    return (
        <div>
            <Link to={to}>
                <span className="text-black">{text}</span>
            </Link>
        </div>
    );
}

export default ItemOnglet;
