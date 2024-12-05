import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { useState } from "react";
import CommandBtn from "./commandBtn";

const imageVariant = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x:0 },
    hover: {y: -10}
}

const ImageItem = ({idService, image}:{idService: number, image: string}) => {
    const [link, setLink] = useState (false)
    return (

        <>
            <Link to={`/details/services/${idService}`}>
                <motion.div 
                className="size-40 sm:size-72 bg-blue-600 rounded-xl bg-cover hover:opacity-5 
                flex items-center justify-center " 
                style={{ backgroundImage: `url(${image})` }}
                variants={imageVariant} initial="initial" animate="animate" 
                transition={{ duration: 0.5 }} whileHover="hover"
                onMouseOver={() => setLink (true)}
                onMouseLeave={() => setLink (false)}
                >
                {
                    link && <CommandBtn/>
                }
                </motion.div>
            </Link>
        </>
    );
}


export default ImageItem;
