import {AnimatePresence, motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const spanVariant = {
    initial: {
        opacity: 0,
        y: -10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.5,
        },
    },
}
const AlertMessage = ({message}:{message: string}) => {
    const navigate = useNavigate ()
    return (
        <AnimatePresence>
            <motion.span variants={spanVariant} initial="initial" animate="animate" exit="exit"
            className='absolute z-10 bg-white p-10 rounded-lg shadow-lg flex flex-col gap-8'
            >
                <p className='text-center'> {message} </p>
                <div className='flex gap-2'>
                    <button className='bg-main-yellow' onClick={() => navigate ('/connexion')} >Se connecter</button>
                    <button className='bg-black-marroon text-main-yellow'>Changer de compte</button>
                </div>
            </motion.span>            
        </AnimatePresence>

    )
}

export default AlertMessage;