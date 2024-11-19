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
import {motion} from 'framer-motion'
const icons = [
    {
        categorie: 'agriculture',
        icon : <PiFarm className="~size-7/9 p-1" />
    },    
    {
        categorie: 'beaute-Cosmetique',
        icon : <Beauty/>
    },    
    {
        categorie: 'himobilier',
        icon : <RealEstate/>
    },    
    {
        categorie: 'informatique',
        icon : <Computer/>
    },   
    {
        categorie: 'energies',
        icon : <Energy/>
    },    
    {
        categorie: 'consulting',
        icon : <Consulting/>
    },    
    {
        categorie: 'voyage',
        icon : <Travel/>
    },    
    {
        categorie: 'hydrocarbure',
        icon : <Oil/>
    },    
    {
        categorie: 'voitures',
        icon : <Car/>
    },    
    {
        categorie: 'decoration',
        icon : <Decorate/>
    },    
    {
        categorie: 'hotelerie',
        icon : <Hotel/>
    },

]

const iconVariant = {
    hover: {
        scale: 1.1,
        y: -2
    }
}

const SectionCategorie = () => {
    return (
        <div className="flex justify-center relative top-[-9rem] ~gap-1/8 pl-14 pr-14 ">
            {
                icons.map ((icon, index) => (
                    <motion.div key={index} variants={iconVariant} whileHover="hover" className="hover:bg-main-yellow rounded-full" >
                        <Link to={`categorie/${icon.categorie}`} >
                            <motion.span className="text-black" >
                                {icon.icon}
                            </motion.span>
                        </Link>                        
                    </motion.div>

                ))
            }
        </div>
    );
}

export default SectionCategorie;
