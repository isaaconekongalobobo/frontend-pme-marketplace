import { BiArrowFromLeft } from "react-icons/bi";
import { motion } from 'framer-motion'
import { useState } from "react";

const iconVariant = {
    initial: {
        x: -10,
        opacity: 0,
    },
    animate: {
        x: 2,
        opacity: 1,
        transition: {
            delay: 0.1
        }
    }
}

const BtnSubmition = () => {
    const [icon, setIcon] = useState<boolean> (false)
    const show = () => setIcon (true)
    const hidde = () => setIcon (false)
    return (
        <button type="submit" className="rounded-full w-3/4 flex items-center justify-center"
         onMouseOver={show} onMouseLeave={hidde}>Se connecter
            <motion.span variants={iconVariant} initial="initial" whileInView="animate" className={icon? "block" : "hidden"}>
                <BiArrowFromLeft className="relative left-3 text-2xl"/>
            </motion.span>
        </button>
    );
}

export default BtnSubmition;
