/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { useEffect, useState } from "react"
import { PmeType } from "../home/home"
import axios from "axios"
import CoverImage from "./components/header/coverImage"
import ProfileImage from "./components/header/profileImage"

const PmeDetails = () => {
    // Recuperation de l'id de la PME
    const {id} = useParams ()

    const [pme, setPme] = useState<PmeType> ()

    useEffect (() => {
        try {
            axios.get (`http://localhost:3333/get-pme/${id}`)
            .then ((response) => {
                console.log(response.data);
                setPme (response.data)
            })
        } catch (error) {
            console.error(error);
        }
    }, [])


    return (
        <div>
            <Header/>
                <div>
                    <div>
                        <CoverImage src={pme?.cover} />
                        <ProfileImage src={pme?.profile} />
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default PmeDetails