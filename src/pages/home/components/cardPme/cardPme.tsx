import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import BtnCard from './btnCard';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
interface pmeCardType {
    idPme: number
    profile: string | undefined,
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

const CardPme = ({idPme,profile, name, services} : pmeCardType) => {
    // const [pmeServices, setPmeServices] = useState ()
    
    // // Requette pour recuperer les services de la PME
    // useEffect(() => {
    //     axios.get (`http://localhost:3333/get-pme-services/${idPme}`)
    //     .then ((res) => {
    //         setPmeServices (res.data)
    //     })
    // }, []);
    return (
        <Link to={`/pme-details/${idPme}`} >
            <div className=" flex flex-col items-center gap-2 mb-[-80px] sm:mb-[-100px]">
                <motion.img 
                    src={profile} alt={`Profil de ${name}`} className="size-[18rem] rounded-xl shadow-black shadow-sm " 
                    variants={imageVariant} initial="initial" animate="animate" whileHover="hover"
                />
                <div className=" flex flex-col text-center ">
                    <h3 className="text-black font-medium text-xl "> {name} </h3>
                    <p className="text-black" > { `${services![1]} +${services?.length}` } </p>
                </div>
                <BtnCard idPme={idPme} />
            </div>
        </Link>

    );
}

export default CardPme;
