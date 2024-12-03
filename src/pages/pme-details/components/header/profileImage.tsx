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
        y: -5
    },
    tap: {
        scale: 0.5
    }
}
const ProfileImage = ({src, showOrHiddeProfile}:{src: string | undefined, showOrHiddeProfile: () => void}) => {
    return (
        <motion.img src={src} alt="Photo de profile" 
            className=" size-28 sm:size-56 rounded-full shadow-xl border-8 border-baige 
            hover:border-main-yellow  " 
            variants={imgVariant} initial="initial" animate="animate" whileHover="hover" whileTap="tap"
            onClick={showOrHiddeProfile}
        />
    );
}

export default ProfileImage;
