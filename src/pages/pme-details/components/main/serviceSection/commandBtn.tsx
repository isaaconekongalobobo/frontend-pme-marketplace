import {motion} from 'framer-motion'
const pVariant = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    }
}
const CommandBtn = () => {
    return <motion.p 
            className="text-center text-sm sm:text-xl font-medium bg-breaked-white
             text-black-marroon p-2 rounded-full"
            variants={pVariant} initial="initial" animate="animate"
            >
                Commander
            </motion.p>
}

export default CommandBtn;
