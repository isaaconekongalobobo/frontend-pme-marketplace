/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface InputType {
  name: string
  register: any
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
    transition: {
      delay: 0.2,
    },
  },
  hover: {
    y: -5,
  },
}

const InputPhoneNumber = ({ name, register, errors}: InputType) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const errorMessage = `Le champ ${name} est requis`

  return (
    <motion.div
      variants={inputVariant}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <PhoneInput
        country={'fr'}
        value={phoneNumber}
        onChange={(phone) => setPhoneNumber(phone)}
        inputProps={{
          name: name,
          required: true,
          ...register(name, { required: errorMessage }),
        }}
        containerClass={`${errors[name] ? 'border-red-500' : 'border-black-marroon'}`}
        inputClass="p-2 rounded-full bg-transparent border-4 border-black-marroon placeholder:text-black-marroon placeholder:text-sm text-black-marroon pl-12 w-full"
        buttonClass="bg-transparent border-4 border-black-marroon rounded-l-full"
        dropdownClass="bg-white border-4 border-black-marroon rounded-lg"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </motion.div>
  )
}

export default InputPhoneNumber

