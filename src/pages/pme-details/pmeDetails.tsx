/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { useEffect, useState } from "react"
import { PmeType } from "../home/home"
import axios from "axios"
import ProfileImage from "./components/header/profileImage"
import Infos from "./components/header/infos"
import ProfileZoom from "./components/profileZoom"
import AboutSection from "./components/main/aboutSection"
import ServiceSection from "./components/main/serviceSection/serviceSection"

const PmeDetails = () => {
    // Recuperation de l'id de la PME
    const {id} = useParams ()
    const [pme, setPme] = useState<PmeType> ()
    const [showServices, setShowServices] = useState (false)
    const [showProfile, setShowProfile] = useState (false)

    const showOrHiddeServices = () => {
        setShowServices (!showServices)
    }

    const showOrHiddeProfile = () => {
        setShowProfile (!showProfile)
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
                <div className="mb-[15rem]">
                    <div className="bg-cover bg-center w-full ~h-32/64 pl-4 pr-4 sm:p-8" style={{ backgroundImage: `url(${pme?.cover})` }}>
                        {/* En tete de la page */}
                        <div className="relative top-24 sm:top-32 sm:left-4 flex flex-row sm:items-center  gap-2 sm:gap-5">
                            <ProfileImage src={pme?.profile} showOrHiddeProfile={showOrHiddeProfile} />
                            { showProfile && <ProfileZoom src={pme?.profile} showOrHiddeProfile={showOrHiddeProfile} /> }   
                            <Infos pme={pme} showOrHiddeServices={showOrHiddeServices} />
                        </div>

                        {/* Corps de la page */}
                        <main className="relative top-[8rem] sm:top-[12rem] p-2 flex flex-col sm:pl-64 sm:pr-64 gap-8">
                            <AboutSection description={pme?.description} />
                            <ServiceSection name={pme?.nom} idPme={pme?.idPme}/>
                        </main>
                        
                    </div>
                </div>

            <Footer/>
        </div>
    )
}

export default PmeDetails