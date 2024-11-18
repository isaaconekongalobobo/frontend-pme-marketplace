import SideBarOnglet from './sideBarOnglet'
// Icone croisee pour fermer la sidebar
import { RxCross1 } from "react-icons/rx";
import UserAvatar from './userAvatar';
import IconUser from './iconUser';
import {motion} from 'framer-motion'

interface SidebarProps {
    userName : string | undefined,
    userAvatar : string | undefined,
    setSideBar: (newState: boolean) => void
}
interface ItemOnglet {
    to : string,
    text : string
}

const tbOnglet: ItemOnglet[] = [
    {to: '/', text: 'Marketplace'},
    {to: '/success-stories', text: 'Success-stories'},
]

const sideBarVariant = {
    initial : {
        opacity: 0,
        x: 20
    },
    animate : {
        opacity: 1,
        x: 1
    }
}

const Sidebar = ({ userName, userAvatar, setSideBar }: SidebarProps) => {
    const hiddeSideBar = () => {
        setSideBar (false)
    }
    return (
        <motion.div 
            className="w-64 h-screen flex flex-col bg-white border-r border-gray-200 shadow-lg absolute top-0 left-36 p-3"
            variants={sideBarVariant} initial="initial" animate="animate"
        >
            {/* Entete */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between pr-6 ">
                <img src="public/mosala.png" alt="logo CRD" className='w-8' />
                <RxCross1 className='text-black text-xl' onClick={hiddeSideBar} />
            </div>
        
            {/* Onglets */}
            <nav className="flex-1 overflow-y-auto">
                <ul className="flex flex-col gap-2">
                    {
                        tbOnglet.map ((onglet) => (
                            <SideBarOnglet to={onglet.to} text={onglet.text}/>
                        ))
                    }
                </ul>
            </nav>

            {/* Bouton */}
            <button className="flex items-center bg-main-yellow rounded-full p-2 gap-2">
                {userAvatar ? <UserAvatar userAvatar={userAvatar} userName={userName} /> : <IconUser/> }
                <span className="text-sm font-medium">{userName? userName : 'Connexion | Inscription'}</span>
            </button>
        </motion.div>
    )
}

export default Sidebar