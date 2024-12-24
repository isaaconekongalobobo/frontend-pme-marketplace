import {motion} from 'framer-motion'
import Input from './components/input';
import Header from './components/header';
import BtnSubmition from './components/btnSubmition';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const { log } = console
const formVariant = {
    initial : {
        y: -20,
        opacity: 0,
    },
    animate: {
        y:0,
        opacity: 1,
        transition: {
            delay: 1
        }
    }
}

// Champs de formulaire
interface FormType {
    email: string,
    password: string
}
const Connexion = () => {
    const {register, handleSubmit,formState: {errors}} = useForm<FormType> ()
    const onSubmit = (data: FormType) => {
        const {email, password} = data
        try {
            console.clear()
            axios.post (import.meta.env.VITE_ENDPOINT_LOGIN_PME, {email, password})
            .then ((res) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                res.status === 400 && alert('Email ou mot de passe incorrect')
                log(res.data)
            })
            .catch ((err) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                err.response.status === 400 && alert('Email ou mot de passe incorrect')
            })           
        } catch (error) {
            log(error)
        }

    }
    return (
        <main className='flex justify-center items-center p-8 w-screen bg-breaked-white h-screen'>
            <motion.form 
                onSubmit={handleSubmit (onSubmit)}
                className='bg-white p-9 pl-8 pr-8 shadow-lg rounded-2xl flex flex-col gap-5' variants={formVariant} initial="initial" animate="animate" >
                {/* En tete */}
                <Header title='Connectez-vous a votre compte' />

                <div className='flex flex-col gap-2'>
                    <Input type='text' name='email' placeholder='E-mail' register={register} errors={errors} />
                    <Input type='text' name='password' placeholder='Mot de passe' register={register} errors={errors} />                    
                </div>

                <div className='flex flex-col gap-2 items-center' >
                    <BtnSubmition/>
                    <Link to="/inscription/inscription-step-1">
                        <span className='text-black-marroon hover:underline hover:underline-offset-4'>Je n'aie pas un compte</span>
                    </Link>
                </div>
            </motion.form>
        </main>
    );
}

export default Connexion;
