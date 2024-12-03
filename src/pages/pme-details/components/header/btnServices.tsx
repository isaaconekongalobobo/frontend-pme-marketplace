import { LuListPlus } from "react-icons/lu";

const BtnServices = ({showOrHiddeServices}:{showOrHiddeServices: () => void}) => {
    return (
        <button 
            className="flex items-center p-2 text-sm font-normal gap-2 rounded-full bg-main-yellow"
            onClick={showOrHiddeServices}
        >
            <span>Voir tout les services</span>
            <LuListPlus className="text-xl"/>
        </button>
    );
}

export default BtnServices;
