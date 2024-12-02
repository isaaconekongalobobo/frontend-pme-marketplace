import { useParams } from "react-router-dom"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { useEffect, useState } from "react"
import { PmeType } from "../home/home"
import axios from "axios"

const PmeDetails = () => {
    // Recuperation de l'id de la PME
    const {id} = useParams ()

    const [pme, setPme] = useState<PmeType> ()

    useEffect (() => {
        try {
            axios.get ('')
        } catch (error) {
            console.error(error);
        }
    }, [])


    return (
        <div>
            <Header/>
            <Footer/>
        </div>
    )
}

export default PmeDetails