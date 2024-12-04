import { CgClose } from "react-icons/cg";
import {motion} from 'framer-motion'

const cardVariant = {
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
}

const ProfileZoom = ({src, showOrHiddeProfile}:{src:string | undefined, showOrHiddeProfile: () => void}) => {
    return (
        <div className="absolute flex justify-center w-full  p-10 z-10" onClick={showOrHiddeProfile}>
            <motion.div 
                className="bg-black-marroon bg-opacity-75 pt-10 flex flex-col items-end"
                variants={cardVariant} initial="initial" animate="animate"
            >
                <CgClose className="text-2xl hover:opacity-75 relative bottom-5 right-5" onClick={showOrHiddeProfile} />
                <img src={src} alt="Photo de profil" className="w-96"  />  
            </motion.div>
        </div>
    );
}

export default ProfileZoom;
