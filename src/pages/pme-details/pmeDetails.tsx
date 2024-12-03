/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { useEffect, useState } from "react"
import { PmeType } from "../home/home"
import axios from "axios"
import ProfileImage from "./components/header/profileImage"
import Infos from "./components/header/infos"

const PmeDetails = () => {
    // Recuperation de l'id de la PME
    const {id} = useParams ()
    const [pme, setPme] = useState<PmeType> ()
    const [showServices, setShowServices] = useState (false)

    const showOrHiddeServices = () => {
        setShowServices (!showServices)
    }

    useEffect (() => {
        try {
            axios.get (`http://localhost:3333/get-pme/${id}`)
            .then ((response) => {
                setPme (response.data)
            })
        } catch (error) {
            console.error(error);
        }
    }, [])


    return (
        <div>
            <Header/>
                <div className="relative">
                    <div className="bg-cover bg-center w-full ~h-40/64 p-8" style={{ backgroundImage: `url(${pme?.profile})` }}>
                    <div className="relative top-16 sm:top-32 left-[-14px] sm:left-4 flex items-center gap-5">
                        <ProfileImage src={pme?.cover} />
                        <Infos pme={pme} showOrHiddeServices={showOrHiddeServices} />
                    </div>
                        
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default PmeDetails