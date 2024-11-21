import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import BtnCard from './btnCard';
interface pmeCardType {
    idPme: number | string
    image: string | undefined,
    name: string | undefined,
    services: string[] | undefined
}

const imageVariant = {
    initial : {
        opacity: 0,
        y: -20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    hover: {
        y: -10,
    }
}

const CardPme = ({idPme,image, name, services} : pmeCardType) => {
    return (
        <Link to={`/pme-details/${idPme}`} >
            <div className=" flex flex-col items-center gap-2 ">
                <motion.img 
                    src={image} alt={`Profil de ${name}`} className="~w-3/4/5/6 rounded-xl shadow-black shadow-sm " 
                    variants={imageVariant} initial="initial" animate="animate" whileHover="hover"
                />
                <div className=" flex flex-col text-center ">
                    <h3 className="text-black font-medium text-xl "> {name} </h3>
                    <p className="text-black" > { `${services![1]} +${services?.length}` } </p>
                </div>
                <BtnCard/>
            </div>
        </Link>

    );
}

export default CardPme;