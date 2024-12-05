/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SectionTitle from "../../sectionTitle";
import axios from "axios";
import ServiceList from "./serviceList";
import Loader from "../../../../../components/loader";
import ServiceImages from "./serviceImages";
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
        axios.get (request)
        .then ((result) => {
            setServices (result.data)
        })
        .catch ((error) => console.log(error))
        .finally (() => setLoading (false))

    }, []);

    
    
    return (
        <section className="flex flex-col gap-3">
            <SectionTitle title="Services | Produits" />
            <div className="flex flex-col gap-3">
                <div>
                    <p className="text-black-marroon">{`${name?.toUpperCase()} vous propose plusieurs services et produits repondant a vos besoin.`}</p>
                    <p className="text-black-marroon">Voici nos services:</p>    
                </div>
                   
                 { loading ? <Loader/>: <ServiceList services={services} /> }           
            </div>
            <ServiceImages services={services} />
        </section>
    );
}

export default ServiceSection;
