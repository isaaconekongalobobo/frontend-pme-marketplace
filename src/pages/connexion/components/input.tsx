import {motion} from 'framer-motion'
interface inputType {
    type: string,
    name: string,
    placeholder: string
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
        transition: {
            delay: 2
        },
    },
    hover: {
        y: -5
    }
}
const Input = ({type, name, placeholder}:inputType) => {
    return (
        <motion.input type={type} name={name} placeholder={placeholder} 
        variants={inputVariant} initial="initial" animate="animate" whileHover="hover"
        className="p-2 rounded-full bg-transparant border-4 border-black-marroon 
        placeholder:text-black-marroon placeholder:text-sm text-black-marroon pl-4"
        />
    );
}

export default Input;
