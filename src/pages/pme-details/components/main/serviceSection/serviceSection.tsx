/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SectionTitle from "../../sectionTitle";
import axios from "axios";
interface infos {
    name: string | undefined,
    idPme: number | undefined
}
const ServiceSection = ({name, idPme}:infos) => {
    const request  = `http://localhost:3333/get-pme-services/${idPme}`
    const [services, setServices] = useState ([])
    const [loading, setLoading] = useState (false)

    useEffect (() => {
        setLoading (true)
        console.clear()

        axios.get (request)
        .then ((res) => console.log (res.data))
        .catch ((error) => console.error (error))
        .finally (() => setLoading (false))
    }, []);
    
    return (
        <section className="flex flex-col gap-1">
            <SectionTitle title="Services | Produits" />
            <div>
                <p className="text-black-marroon">{`${name?.toUpperCase()} vous propose plusieurs services et produits repondant a vos besoin.`}</p>
                <p className="text-black-marroon">Voici nos services:</p>                
            </div>

        </section>
    );
}

export default ServiceSection;
