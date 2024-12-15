
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'
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
        transition: {
            delay: 1
        },
    },
    hover: {
        y: -5
    }
}

interface categoryType {
    idCategorie: number
    name: string
    description: string
}
const CategoryInput = ({register, errors }:inputType) => {
    const [categories, setCategories] = useState<categoryType[]> ()
    useEffect (() => {
        try {
            axios.get (import.meta.env.VITE_ENDPOINT_GET_CATEGORIES)
            .then ((res) => setCategories (res.data))
        } catch (error) {
            console.log(error);
        }
    })
    return (
        <motion.select name="category" {...register ("categories")} 
            className={`p-2 rounded-full bg-transparant border-4  ${errors["categorie"]? 'border-red' : 'border-black-marroon'} placeholder:text-black-marroon 
            placeholder:text-sm text-black-marroon pl-4 w-full`}
            variants={inputVariant} initial="initial" animate="animate" whileHover="hover"
        >
            <option value="">Selectionnez une categorie</option>
            { categories?.map ((category) => <option key={category.idCategorie} value={category.name}>{category.name}</option>)}
        </motion.select>
    );
}

export default CategoryInput;
