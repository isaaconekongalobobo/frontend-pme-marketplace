import { PiFarm } from "react-icons/pi";
import Beauty from "./sectionCategoryIcons/beauty";
import RealEstate from "./sectionCategoryIcons/realEstate";
import Computer from "./sectionCategoryIcons/computer";
import Energy from "./sectionCategoryIcons/energy";
import Consulting from "./sectionCategoryIcons/consulting";
import Travel from "./sectionCategoryIcons/travel";
import Oil from "./sectionCategoryIcons/oil";
import Car from "./sectionCategoryIcons/car";
import Decorate from "./sectionCategoryIcons/decorate";
import Hotel from "./sectionCategoryIcons/hotel";
import { Link } from "react-router-dom";
const icons = [
    {
        categorie: 'Agriculture',
        icon : <PiFarm/>
    },    
    {
        categorie: 'Beaute et Cosmetique',
        icon : <Beauty/>
    },    
    {
        categorie: 'Himobilier',
        icon : <RealEstate/>
    },    
    {
        categorie: 'Informatique',
        icon : <Computer/>
    },   
    {
        categorie: 'Energies',
        icon : <Energy/>
    },    
    {
        categorie: 'Consulting',
        icon : <Consulting/>
    },    
    {
        categorie: 'Voyage',
        icon : <Travel/>
    },    
    {
        categorie: 'Hydrocarbure',
        icon : <Oil/>
    },    
    {
        categorie: 'Voitures',
        icon : <Car/>
    },    
    {
        categorie: 'Decoration',
        icon : <Decorate/>
    },    
    {
        categorie: 'Hotel',
        icon : <Hotel/>
    },

]

const SectionCategorie = () => {
    return (
        <div className="flex ">
            {
                icons.map ((icon, index) => (
                    <Link to={''} key={index}>
                        <span className="text-black">
                            {icon.icon}
                        </span>
                    </Link>
                ))
            }
        </div>
    );
}

export default SectionCategorie;
