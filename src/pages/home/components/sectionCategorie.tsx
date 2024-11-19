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
        categorie: 'Agriculture',
        icon : <PiFarm className="~size-7/9 p-1" />
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
                    <motion.div variants={iconVariant} whileHover="hover" className="hover:bg-main-yellow rounded-full" >
                        <Link to={''} key={index}>
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
