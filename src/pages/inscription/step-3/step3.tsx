import Header from "../components/header";
import BtnSubmition from "../components/btnSubmition";
import {motion} from 'framer-motion'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Loader } from "../components/loader";
// import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import CategoryInput from "./components/categoryInput";
import ImageInput from "./components/imageInput";
// import { useNavigate } from "react-router-dom";

const {log, clear} = console

const fieldsetVariant = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            delay: 0.5
        }
    }
}

const btnDivVariant = {
    initial: {
        opacity: 0,
        left: 30
    },
    animate: {
        opacity: 1,
        left: 0,

    }
}

interface Step1type {
    address: string
    license: string
    category: string
    profile: File[]
}


const Step3 = () => {
    // const navigate = useNavigate ()
    const {handleSubmit, register,formState: {errors}} = useForm<Step1type> ()
    const [loader, setLoader] = useState (false)
    const onSubmit = (data: Step1type) => {
        clear()
        const {address,license,category,profile} = data
        if (profile !== null) {
            const formData = new FormData ()
            formData.append ("address", address)
            formData.append ("licence", license)
            formData.append ("category", category)
            formData.append ("profile", profile[0])

            try {
                setLoader (true)
                axios.post (import.meta.env.VITE_ENDPOINT_SIGN_IN_PME_S3, formData)
                .then ((res) => {
                    log (res.data)
                })
            } catch (error) {
                log (error)
            }
        }

    }
    return (
        <main className='flex justify-center items-center p-8 w-screen bg-breaked-white h-screen'>
            <form 
                onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data"
                className='bg-white p-9 pl-8 pr-8 shadow-lg rounded-2xl flex flex-col sm:flex-row gap-5 items-center ' >
                <div className="flex flex-col gap-5 ">
                    <Header title="Ajoutez les informations suplementaire de votre entreprise"/>
                    {  loader && <Loader/>}
                    <motion.div className="flex flex-col gap-2" variants={fieldsetVariant} initial="initial" animate="animate"  >
                        <fieldset className="flex justify-between gap-1">
                            <Input type="text" name="address" register={register} errors={errors} placeholder="Addresse"/>
                            <Input type="text" name="licence" register={register} errors={errors} placeholder="licence"/>
                        </fieldset>
                        <fieldset className="flex flex-col gap-2">
                            <CategoryInput register={register} errors={errors}/>
                            <ImageInput register={register} errors={errors}/>
                        </fieldset>
                    </motion.div>

                    <motion.div className="flex flex-col items-center gap-2" variants={btnDivVariant} initial="initial" animate="animate" >
                        <BtnSubmition text="Terminer l'inscription" />
                    </motion.div>
                </div>
            </form>
        </main>
    );
}

export default Step3;
