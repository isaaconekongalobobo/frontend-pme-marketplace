import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {motion} from 'framer-motion'
const iconVariant = {
    hover: {
        y: -3,
        scale: 1.1,
    }
}
const Socialmedias = () => {
    return (
        <div className="flex gap-4 text-xl ">
            <motion.a variants={iconVariant} whileHover="hover" className="hover:text-main-yellow" href="">
                <FaFacebook/>
            </motion.a>
            <motion.a variants={iconVariant} whileHover="hover" className="hover:text-main-yellow" href="">
                <FaTwitter/>
            </motion.a>
            <motion.a variants={iconVariant} whileHover="hover" className="hover:text-main-yellow" href="">
                <FaInstagram/>
            </motion.a>
            <motion.a variants={iconVariant} whileHover="hover" className="hover:text-main-yellow" href="">
                <FaLinkedin/>
            </motion.a>
            
        </div>
    );
}

export default Socialmedias;
