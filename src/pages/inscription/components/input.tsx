import {motion} from 'framer-motion'
interface inputType {
    type: string,
    name: string,
    placeholder: string
}

const inputVariant = {
    hover: {
        y: -5
    }
}
const Input = ({type, name, placeholder}:inputType) => {
    return (
        <motion.input type={type} name={name} placeholder={placeholder} 
        variants={inputVariant} whileHover="hover"
        className="p-2 rounded-full bg-transparant border-4 border-black-marroon 
        placeholder:text-black-marroon placeholder:text-sm text-black-marroon pl-4"
        />
    );
}

export default Input;