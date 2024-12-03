import {motion} from 'framer-motion'
const imgVariant = {
    initial: {
        opacity: 0,
        x:-20
    },
    animate: {
        opacity: 1,
        x:0 
    },
    hover: {
        y: -10
    },
    tap: {
        scale: 0.5
    }
}
const ProfileImage = ({src}:{src: string | undefined}) => {
    return (
        <motion.img src={src} alt="Photo de profile" 
            className=" size-28 sm:size-56 rounded-full shadow-xl border-8 border-baige 
            hover:border-main-yellow  " 
            variants={imgVariant} initial="initial" animate="animate" whileHover="hover" whileTap="tap"
        />
    );
}

export default ProfileImage;
