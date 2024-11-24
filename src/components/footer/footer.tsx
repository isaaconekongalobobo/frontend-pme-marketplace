import { Link } from "react-router-dom";
import Onglets from "./components/onglets";
import Categories from "./components/categories";

const Footer = () => {
    return (
        <footer className="bg-black-marroon relative top-10 p-8 flex flex-col sm:flex-row gap-12 sm:gap-44  " >
            <div className="sm:w-1/4 flex flex-col gap-2 items-center sm:items-start ">
                <Link to="/">
                    <img src="/mosala.png" alt="Logo de PME marketplace" className="w-8"  />
                </Link>
                <p className="text-sm ml-2 text-balance text-center sm:text-start " >La plateforme qui vous fais gagner du temps dans vos recherches des services et produits</p>                
            </div>

            {/* Onglets */}
            <Onglets/>

            {/* Categories */}
            <Categories/>
            
        </footer>
    );
}

export default Footer;
