import { Link } from "react-router-dom";

const Onglets = () => {
    return (
        <div className="flex flex-col gap-2 text-sm mt-5 font-medium " >
            <Link to="/" >Marketplace</Link>
            <Link to="/success-stories" >Success-stories</Link>
            <Link to="/inscription" >Creer un compte</Link>
            <Link to="/connexion" >Se connecter</Link>
        </div>
    );
}

export default Onglets;

