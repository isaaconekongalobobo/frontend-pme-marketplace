import Header from "../components/header";
import BtnSubmition from "../components/btnSubmition";
import ConnexionLink from "../components/connexionLink";
import {motion} from 'framer-motion'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Loader } from "../components/loader";
import InputPhoneNumber from "../components/inputPhoneNumber";
import InputPassword from "../components/inputPassword";
import { useNavigate } from "react-router-dom";
import { passwordRegex, phoneRegex } from "../../../utils/regex";
import Input from "../components/input";
import CategoryInput from "./components/categoryInput";
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
    phoneNumber: string,
    password: string,
}


const Step3 = () => {
    // const navigate = useNavigate ()
    const {handleSubmit, register,control, formState: {errors}} = useForm<Step1type> ()
    const navigate = useNavigate ()
    const [loader, setLoader] = useState (false)
    const onSubmit = (data: Step1type) => {
        clear()
        const {phoneNumber, password} = data
        log (data)
        if (phoneRegex.test (phoneNumber) === false) {
            alert ('Numero invalide')
        } else if (passwordRegex.test (password) === false) {
            const errorMessage = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (@$!%*?&)"
            alert (errorMessage)
        } else {
            setLoader (true)
            try {
                axios.post (import.meta.env.VITE_ENDPOINT_SIGN_IN_PME_S2, {phoneNumber, password})
                .then ((res) => {
                    if (!res.data.error) {
                        navigate ('/inscription/inscription-step-3') 
                    } else {
                        alert (res.data.message)
                    }
                }).finally (() => setLoader (false))            
            } catch (error) {
                log ('erreur')
                console.log(error);
            }            
        }


    }
    return (
        <main className='flex justify-center items-center p-8 w-screen bg-breaked-white h-screen'>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white p-9 pl-8 pr-8 shadow-lg rounded-2xl flex flex-col sm:flex-row gap-5 items-center ' >
                <div className="flex flex-col gap-5 ">
                    <Header title="Ajoutez les informations suplementaire de votre entreprise"/>
                    {  loader && <Loader/>}
                    <motion.div className="flex flex-col gap-3" variants={fieldsetVariant} initial="initial" animate="animate"  >
                        <fieldset className="justify-between">
                            <Input type="text" name="address" register={register} errors={errors} placeholder="Addresse"/>
                            <Input type="text" name="licence" register={register} errors={errors} placeholder="licence"/>
                        </fieldset>
                        <fieldset>
                            <CategoryInput register={register} errors={errors}/>
                        </fieldset>
                    </motion.div>

                    <motion.div className="flex flex-col items-center gap-2" variants={btnDivVariant} initial="initial" animate="animate" >
                        <BtnSubmition text="Suivant" />
                        <ConnexionLink/>
                    </motion.div>
                </div>
            </form>
        </main>
    );
}

export default Step3;
