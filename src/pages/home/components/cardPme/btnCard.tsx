import { CgPlayListAdd } from "react-icons/cg";
import { Link } from "react-router-dom";

const BtnCard = () => {
    return (
        <Link to={""} >
            <CgPlayListAdd 
            className="text-white bg-black-marroon size-14 p-2 pl-3 pt-3 rounded-full border-white border-2 shadow-xl relative bottom-[6rem] left-[9rem]  " />
        </Link>
    );
}

export default BtnCard;
