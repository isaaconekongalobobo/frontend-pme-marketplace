import { useEffect, useState } from "react"
import { PmeType } from "../home"
import axios from "axios"
import CardPme from "./cardPme/cardPme"

const AllCategories = () => {
    const [allPme, setAllPme] = useState<PmeType[]> ([])
    
    // Requette de recuperation des donnee
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
        <section className="grid sm:grid-cols-4 ~p-14/16 gap-14 mt-2 mb-28 ">
            {
                allPme.map (pme => <CardPme key={pme.idPme} idPme={pme.idPme} image={pme.logoType} name={pme.nom} services={pme.communicationMode} /> )
            }
        </section> 
    );
}

export default AllCategories;
