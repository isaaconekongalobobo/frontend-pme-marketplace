import {motion} from 'framer-motion'
import IconUser from './iconUser'
import { Link } from 'react-router-dom'
const btnVariant = {
    whenHover: {
        y: -2,
    }
}
const BtnConnexion = () => {
    return (
        <Link to="/connexion">
            <motion.button 
                className = " hidden sm:flex items-center gap-2 bg-main-yellow hover:bg-black-marroon font-normal rounded-full"
                variants = {btnVariant}
                whileHover = "whenHover"
            >
                <span>Connexion | Inscription </span>
                <IconUser/>
            </motion.button>            
        </Link>

    )
}
export default BtnConnexion