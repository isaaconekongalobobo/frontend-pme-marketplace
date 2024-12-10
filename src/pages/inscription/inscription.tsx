import { Outlet } from "react-router-dom";
import UserInscriptionContext from "../../contexts/userInscription";

const Inscription = () => {
    return (
        <UserInscriptionContext.Provider value={null}>
            <Outlet/>
        </UserInscriptionContext.Provider>
        
    );
}

export default Inscription;
