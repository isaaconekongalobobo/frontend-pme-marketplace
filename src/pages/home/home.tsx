import { Outlet } from "react-router-dom"
import Header from "../../components/header/header"
import SearchBar from "./components/searchBar"
import SectionCategorie from "./components/sectionCategorie"
import SubmitButton from "./components/submitButton"
import { useEffect, useState } from "react"
import axios from "axios"
import CardPme from "./components/cardPme/cardPme"
import Footer from "../../components/footer/footer"

export interface PmeType {
    idPme: number,
    nom: string,
    physicAdress: string,
    emailAdress: string,
    identificationNumber: string | '',
    description: string | '',
    communicationMode: string[],
    licence: string,
    logoType: string,
    validated: boolean
}

const HomePage = () => {
    const [allPme, setAllPme] = useState<PmeType[]> ([])
    useEffect (() => {
        try {
            axios.get ('http://localhost:3333/get-all-pmes')
            .then ((response) => {
                setAllPme (response.data)
            })
        } catch (error) {
            console.error (error)
        }
    }, [])
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
                <div className="relative ~top-20/28 " >
                    <Outlet/>
                    <section className="grid sm:grid-cols-4 ~p-14/16 gap-14 mt-2 mb-28 ">
                        {
                            allPme.map (pme => <CardPme idPme={pme.idPme} image={pme.logoType} name={pme.nom} services={pme.communicationMode} /> )
                        }
                    </section>                
                </div>
                <Footer/>                 
            </div>
        </div>
    )
}

export default HomePage