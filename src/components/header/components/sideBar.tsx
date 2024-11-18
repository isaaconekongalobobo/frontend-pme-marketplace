import SideBarOnglet from './sideBarOnglet'
import { RxCross1 } from "react-icons/rx";

interface SidebarProps {
    userName : string | undefined,
    userAvatar : string | undefined
}
interface ItemOnglet {
    to : string,
    text : string
}

const tbOnglet: ItemOnglet[] = [
    {to: '/', text: 'Marketplace'},
    {to: '/success-stories', text: 'Success-stories'},
]

const Sidebar = ({ userName, userAvatar }: SidebarProps) => {
  return (
    <div className="w-64 h-screen flex flex-col bg-white border-r border-gray-200 shadow-lg absolute top-0 left-36 ">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between pr-6 ">
        <img src="public/mosala.png" alt="logo CRD" className='w-8' />
        <RxCross1 className='text-black text-xl ' />
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-2">
            {
                tbOnglet.map ((onglet) => (
                    <SideBarOnglet to={onglet.to} text={onglet.text}/>
                ))
            }
        </ul>
      </nav>
      <button className="flex items-center bg-orange-100 rounded-full p-2">
          <img 
            src={userAvatar} 
            alt={`${userName} profil`} 
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm font-medium">{userName? userName : 'Connexion | Inscription'}</span>
        </button>
    </div>
  )
}

export default Sidebar