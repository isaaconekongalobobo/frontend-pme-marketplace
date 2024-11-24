import { Link } from "react-router-dom";

const Onglets = () => {
    return (
        <div className="flex flex-col gap-2 " >
            <Link to="/" >Marketplace</Link>
            <Link to="/success-stories" >Success-stories</Link>
            <Link to="/inscription" >Creer un compte</Link>
            <Link to="/connexion" >Se connecter</Link>
        </div>
    );
}

export default Onglets;

