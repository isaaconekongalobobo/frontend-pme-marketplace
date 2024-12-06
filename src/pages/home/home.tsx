import { Outlet } from "react-router-dom"
import Header from "../../components/header/header"
import SearchBar from "./components/searchBar"
import SectionCategorie from "./components/sectionCategorie"
import SubmitButton from "./components/submitButton"
import Footer from "../../components/footer/footer"

export interface PmeType {
    idPme: number,
    nom: string,
    address: string,
    email: string,
    identificationNumber: string | '',
    description: string | '',
    communicationMode: string,
    licence: string,
    logoType: string,
    profile: string,
    cover:string,
    validated: boolean
}

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div className="flex flex-col gap-10" >
                <div className="relative top-72" >
                    <form className="flex justify-center items-center relative top-[-11rem] ~gap-2/1 ">
                        <SearchBar/>
                        <SubmitButton/>
                    </form>
                    <SectionCategorie/>                
                </div>
                <div className="relative ~top-20/28 z-10" >
                    <Outlet/>               
                </div>
                <Footer/>                 
            </div>
        </div>
    )
}

export default HomePage