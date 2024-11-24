import {motion} from 'framer-motion'
import Input from './components/input';
import Header from './components/header';
import BtnSubmition from './components/btnSubmition';
import { Link } from 'react-router-dom';
const Connexion = () => {
    return (
        <main className='flex justify-center items-center p-8 w-screen bg-breaked-white h-screen '>
            <motion.form className='bg-white p-9 pl-8 pr-8 shadow-lg rounded-2xl flex flex-col gap-5'>
                {/* En tete */}
                <Header/>

                <div className='flex flex-col gap-2'>
                    <Input type='text' name='email' placeholder='E-mail'/>
                    <Input type='text' name='password' placeholder='Mot de passe'/>                    
                </div>

                <div className='flex flex-col gap-2 items-center' >
                    <BtnSubmition/>
                    <Link to="/inscription-step-1">
                        <span className='text-black-marroon hover:underline hover:underline-offset-4'>Je n'aie pas un compte</span>
                    </Link>
                </div>
            </motion.form>
        </main>
    );
}

export default Connexion;
