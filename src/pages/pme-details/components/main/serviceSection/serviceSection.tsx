/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SectionTitle from "../../sectionTitle";
import axios from "axios";
import ServiceList from "./serviceList";
import { BiLoader } from "react-icons/bi";
interface infos {
    name: string | undefined,
    idPme: number | undefined
}

export interface ServiceType {
    categorieFk: string,
    createdAt: string
    description: string
    idService: number
    image: string
    name: string
    price: string
    updatedAt: string
    
}
const ServiceSection = ({name, idPme}:infos) => {
    const request  = `http://localhost:3333/get-pme-services/${idPme}`
    const [services, setServices] = useState<ServiceType[]> ([])
    const [loading, setLoading] = useState (false)

    useEffect (() => {
        setLoading (true)
        console.clear()

        axios.get (request)
        .then ((res) => {
            setServices (res.data)
            console.log (res.data)
        })
        .catch ((error) => console.error (error))
        .finally (() => setLoading (false))
    }, []);

    
    
    return (
        <section className="flex flex-col gap-1">
            <SectionTitle title="Services | Produits" />
            <div>
                <p className="text-black-marroon">{`${name?.toUpperCase()} vous propose plusieurs services et produits repondant a vos besoin.`}</p>
                <p className="text-black-marroon">Voici nos services:</p>   
                 {
                    loading ? <BiLoader/> : <ServiceList services={services} />
                 }           
            </div>

        </section>
    );
}

export default ServiceSection;
