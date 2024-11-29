/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PmeType } from "../home";
import CardPme from "./cardPme/cardPme";
import axios from "axios";

const ResultatCategorie = () => {
    const {categorie} = useParams ()
    const [pmeByCategory, setpmeByCategory] = useState<PmeType[]> ([])
    
    // Requette de recuperation des PMEs par categories
    useEffect (() => {
        try {
            axios.get (`http://localhost:3333/get-by-category/${categorie}`)
            .then ((response) => {
                setpmeByCategory (response.data)
            })
        } catch (error) {
            console.error (error)
        }
    }, [])

    return (
        <div>
            <Link to="/home/categorie/">
                <span className="text-black-marroon  relative left-40 text-sm
                 bg-main-yellow p-2 rounded-full ~top-14/0">Voir tout</span>
            </Link>
            <section className="grid sm:grid-cols-4 ~p-14/16 gap-14 mt-2">
                {
                    pmeByCategory.map (pme => <CardPme key={pme.idPme} idPme={pme.idPme} image={pme.logoType} name={pme.nom} services={pme.communicationMode} /> )
                }
            </section>            
        </div>

    );
}

export default ResultatCategorie;
