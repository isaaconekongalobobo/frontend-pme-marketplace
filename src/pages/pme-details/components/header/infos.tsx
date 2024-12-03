import { PmeType } from "../../../home/home";
import BtnServices from "./btnServices";
import SocialMedia from "./socialMedia";

const Infos = ({pme, showOrHiddeServices}:{pme: PmeType | undefined, showOrHiddeServices: ()=> void}) => {
    return (
        <div className="sm:pt-28 flex flex-col sm:gap-1">
            <h1 className="text-black-marroon text-2xl sm:text-4xl font-medium ">{pme?.nom}</h1>
            <div className="flex items-center gap-3">
                <h2 className="text-black-marroon sm:text-lg">{pme?.description}</h2>
                <BtnServices showOrHiddeServices={showOrHiddeServices}/>
            </div>
            <SocialMedia/>
        </div>
    );
}

export default Infos;
