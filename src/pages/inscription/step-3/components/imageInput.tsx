/* eslint-disable @typescript-eslint/no-explicit-any */
import {motion} from 'framer-motion'
interface inputType {
    register: any,
    errors: any
}

const inputVariant = {
    initial: {
        scale: 0.5,
        y: -10,
        opacity: 0,
    },
    animate: {
        scale: 1,
        y: 0,
        opacity: 1,
    },
    hover: {
        y: -5
    }
}
const ImageInput = ({register, errors }:inputType) => {
    return (
        <motion.input 
        type="file"
        {...register ("profile", {required: ""})}
        variants={inputVariant} initial="initial" animate="animate" whileHover="hover"
        className={`p-2 rounded-full bg-transparant border-4  ${errors["file"]? 'border-red' : 'border-black-marroon'}   
        placeholder:text-black-marroon placeholder:text-sm text-black-marroon pl-4 w-full`}
        />
    );
}

export default ImageInput;
