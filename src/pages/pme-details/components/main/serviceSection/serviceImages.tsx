import { ServiceType } from "./serviceSection";
import ImageItem from "./imageItem";
import {motion} from 'framer-motion'
const DivVariant = {
    initial: { opacity: 0 },
    animate: { 
        opacity: 1, 
        // Decalage de 0.1 seconde entre chaque enfant
        transition: { staggerChildren: 0.1 } 
    } 
  }

const ServiceImages = ({services}:{services: ServiceType[]}) => {
    return (
    <motion.div className=" grid grid-cols-2  sm:grid-cols-3 ~gap-2/20 ~mt-4/8" 
    variants={DivVariant} initial="initial" animate="animate" >
        {
            services.map ((sv) => <ImageItem idService={sv.idService} image={sv.image}/> )
        }
    </motion.div>
    );
}

export default ServiceImages;
