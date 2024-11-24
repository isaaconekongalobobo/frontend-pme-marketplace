import { Link } from "react-router-dom";

const ItemCategorie = ({categorie}:{categorie:string}) => {
    return (
        <Link to={`categorie/${categorie}`}>
            <span className="hover:text-main-yellow hover:underline hover:underline-offset-4 ">{categorie}</span> 
        </Link>
    );
}

export default ItemCategorie;
