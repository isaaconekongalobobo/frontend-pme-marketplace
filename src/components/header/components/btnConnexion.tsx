import {motion} from 'framer-motion'
const btnVariant = {
    whenHover: {
        y: -2,
    }
}
const BtnConnexion = () => {
    return (
        <motion.button 
            className="bg-main-yellow hover:bg-black-marroon font-normal rounded-full hidden sm:block"
            variants={btnVariant}
            whileHover="whenHover"
        >
            Connexion | Inscription
        </motion.button>
    )
}
export default BtnConnexion