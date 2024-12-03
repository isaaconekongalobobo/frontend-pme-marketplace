import { PmeType } from "../../../home/home";
import BtnServices from "./btnServices";
import SocialMedia from "./socialMedia";

const Infos = ({pme, showOrHiddeServices}:{pme: PmeType | undefined, showOrHiddeServices: ()=> void}) => {
    return (
        <div className="pt-12 sm:pt-28 flex flex-col gap-1 sm:gap-1">
            <h1 className="text-black-marroon text-[1.5rem] sm:text-4xl font-medium ">{pme?.nom}</h1>
            <div className="flex items-center gap-3">
                <h2 className="text-black-marroon text-xs sm:text-lg">{pme?.description}</h2>
                <BtnServices showOrHiddeServices={showOrHiddeServices}/>
            </div>
            <SocialMedia/>
        </div>
    );
}

export default Infos;
