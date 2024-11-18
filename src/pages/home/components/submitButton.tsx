import { LiaSearchSolid } from "react-icons/lia";
import {motion} from 'framer-motion'
const btnVariant = {
    whenHover : {
        y: -4
    }
}

const SubmitButton = () => {
    return (
        <motion.button 
            type="submit" className="flex rounded-full size-20 justify-center items-center bg-transparant "
            variants={btnVariant} whileHover="whenHover"
         >
            <span className=" bg-main-yellow hover:bg-black-marroon rounded-full p-2 border-8 border-white shadow-black-marroon  shadow " >
                <LiaSearchSolid className=" text-2xl" />
            </span>
        </motion.button>
    );
}

export default SubmitButton;
