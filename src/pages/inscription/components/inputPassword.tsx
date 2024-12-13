/* eslint-disable @typescript-eslint/no-explicit-any */
import {motion} from 'framer-motion'
import { useState } from 'react'
interface inputType {
    name: string,
    register: any,
    errors: any
}
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

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
const InputPassword = ({name, register, errors }:inputType) => {
    const errorMessage = `Un mot de passe est requis`
    const [inputType, setInputType] = useState (false)
    return (
        <motion.div 
        className={`flex items-center justify-between text-black-marroon border-4 p-2 rounded-full ${errors[name]? 'border-red' : 'border-black-marroon'}
            placeholder:text-black-marroon placeholder:text-sm text-black-marroon pl-4 `}
            variants={inputVariant} initial="initial" animate="animate" whileHover="hover"
        >
            
            <input type={inputType ? "text" : "password"} {...register (name, {required: errorMessage})} placeholder="Mot de passe" className='bg-transparant outline-none '/>     
            <span className='text-2xl' onClick={() => setInputType (!inputType)} >
               { inputType ? <IoMdEyeOff/> : <IoMdEye/> } 
            </span>     
              
        </motion.div>

    );
}

export default InputPassword;
