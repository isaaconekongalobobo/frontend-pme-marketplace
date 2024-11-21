import { CgPlayListAdd } from "react-icons/cg";
import { Link } from "react-router-dom";


const BtnCard = ({idPme}:{idPme: number}) => {
    return (
        <Link to={`/pme-details/${idPme}`} >
            <CgPlayListAdd 
                title="Voir les details de la PME"
                className="text-white
                bg-black-marroon size-14 p-2 pl-3 pt-3 rounded-full border-white border-4 
                shadow-xl relative bottom-[6rem] left-[9rem] hover:border-main-yellow hover:text-main-yellow "
             />
        </Link>
    );
}

export default BtnCard;
