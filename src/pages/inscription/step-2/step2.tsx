import Header from "../components/header";
import BtnSubmition from "../components/btnSubmition";
import ConnexionLink from "../components/connexionLink";
import Input from "../components/input";
import {motion} from 'framer-motion'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Loader } from "../components/loader";
import InputPhoneNumber from "../components/inputPhoneNumber";
import InputPassword from "../components/inputPassword";
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
        transition: {
            delay: 1
        }
    }
}

interface Step1type {
    name: string,
    email: string,
}


const Step2 = () => {
    // const navigate = useNavigate ()
    const {handleSubmit, register,control, formState: {errors}} = useForm<Step1type> ()
    const [loader, setLoader] = useState (false)
    const onSubmit = (data: Step1type) => {
        clear()
        log (data)
    }
    return (
        <main className='flex justify-center items-center p-8 w-screen bg-breaked-white h-screen'>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white p-9 pl-8 pr-8 shadow-lg rounded-2xl flex flex-col sm:flex-row gap-5 items-center ' >
                <div className="flex flex-col gap-5 ">
                    <Header title="Créez un compte"/>
                    {  loader && <Loader/>}
                    <motion.fieldset className="flex flex-col gap-3" variants={fieldsetVariant} initial="initial" animate="animate"  >
                        <InputPhoneNumber name="phone" register={register} errors={errors} control={control} /> 
                        <InputPassword name="password" register={register} errors={errors} />
                    </motion.fieldset>

                    <motion.div className="flex flex-col items-center gap-2" variants={btnDivVariant} initial="initial" animate="animate" >
                        <BtnSubmition text="Terminer" />
                        <ConnexionLink/>
                    </motion.div>
                </div>
            </form>
        </main>
    );
}

export default Step2;
