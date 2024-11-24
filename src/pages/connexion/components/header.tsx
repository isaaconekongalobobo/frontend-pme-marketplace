import {motion} from 'framer-motion'
const headerVariant = {
    initial: {
        y: -10,
        opacity: 0,
        scale: 0.5
    },
    animate: {
        y:0,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.5
        }
    }
}
const Header = () => {
    return (
        <motion.caption className="flex flex-col gap-2 items-center"
        variants={headerVariant} initial="initial" animate="animate"
        >
            <img src="/mosala.png"  alt="logo CRD" className="w-8" />
            <h1 className="text-black-marroon text-[1.10rem] ">Connectez-vous a votre compte</h1>
        </motion.caption>
    );
}

export default Header;
