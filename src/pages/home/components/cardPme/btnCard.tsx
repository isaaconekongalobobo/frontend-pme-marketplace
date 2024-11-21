import { CgPlayListAdd } from "react-icons/cg";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const btnVariant = {
    initial: {
        scale: 0.5,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 1
        }
    },
    hover: {
        scale: 1.1,
        y: -8,
    }
}

const BtnCard = ({idPme}:{idPme: number}) => {
    return (
        <Link to={`/pme-details/${idPme}`} >
            <motion.button variants={btnVariant} initial="initial" animate="animate" whileHover="hover"
                className="relative bottom-[7rem] left-[10rem] rounded-full size-[5rem] flex justify-center
                bg-black-marroon  border-white  hover:border-main-yellow border-4 shadow-xl "
            >
                <CgPlayListAdd 
                    title="Voir les details de la PME"
                    className="text-white size-14 hover:text-main-yellow relative top-[2px] left-[2px] "
                />                
            </motion.button>

        </Link>
    );
}

export default BtnCard;
