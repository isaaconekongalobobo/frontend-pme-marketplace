/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion } from 'framer-motion'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Controller } from 'react-hook-form'

interface InputType {
  name: string
  register: any
  errors: any,
  control: any
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
      delay: 0.2,
    },
  },
  hover: {
    y: -5,
  },
}

const InputPhoneNumber = ({ name, errors, control}: InputType) => {
  const errorMessage = `Veuillez indiquer un numéro de téléphone`

  return (
    <motion.div variants={inputVariant} initial="initial" animate="animate" whileHover="hover">
        <Controller name={name} control={control}
            render={({field: {onChange, value}}) => (
                <PhoneInput country={'cd'} value={value} onChange={onChange} 
                    inputClass='text-black rounded-sm ' placeholder='Telephone'
                    dropdownClass="bg-white border-2  border-black-marroon rounded-2xl text-black-marroon"
                />            
            )}
        />
      {errors[name] && ( <p className="text-black text-sm mt-1 ">{errorMessage}</p>)}
    </motion.div>
  )
}

export default InputPhoneNumber

