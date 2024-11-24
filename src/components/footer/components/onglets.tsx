import { Link } from "react-router-dom";

const Onglets = () => {
    return (
        <div className="flex flex-col gap-2 text-sm mt-5 font-medium text-center sm:text-start " >
            <Link to="/" >
                <span className="hover:text-main-yellow hover:underline hover:underline-offset-4">Marketplace</span>
            </Link>
            <Link to="/success-stories" >
                <span className="hover:text-main-yellow hover:underline hover:underline-offset-4">Success-stories</span>
            </Link>
            <Link to="/inscription" >
                <span className="hover:text-main-yellow hover:underline hover:underline-offset-4">Creer un compte</span>
            </Link>
            <Link to="/connexion" >
                <span className="hover:text-main-yellow hover:underline hover:underline-offset-4">Se connecter</span>
            </Link>
        </div>
    );
}

export default Onglets;

