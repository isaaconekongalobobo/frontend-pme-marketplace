/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { useEffect, useState } from "react"
import { PmeType } from "../home/home"
import axios from "axios"
import ProfileImage from "./components/header/profileImage"

const PmeDetails = () => {
    // Recuperation de l'id de la PME
    const {id} = useParams ()

    const [pme, setPme] = useState<PmeType> ()
    const profile =  pme?.profile

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
                    <div className="bg-cover bg-center w-full ~h-40/64 p-8" style={{ backgroundImage: `url(${profile})` }}>
                        <ProfileImage src={pme?.cover} />
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default PmeDetails