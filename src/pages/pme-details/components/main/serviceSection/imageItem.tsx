import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const imageVariant = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x:0 },
    hover: {y: -10}
}

const ImageItem = ({idService, image}:{idService: number, image: string}) => {
    return (

        <>
            <Link to={`/details/services/${idService}`}>
                <motion.div 
                className="size-40 sm:size-72 bg-blue-600 rounded-xl bg-cover hover:opacity-5 " 
                style={{ backgroundImage: `url(${image})` }}
                variants={imageVariant} initial="initial" animate="animate" 
                transition={{ duration: 0.5 }} whileHover="hover"
                >
                </motion.div>
            </Link>
        </>
    );
}

export default ImageItem;
