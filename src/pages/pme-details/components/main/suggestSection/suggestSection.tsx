/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { PmeType } from "../../../../home/home";
import SuggestItem from "./suggestItem";

const SuggestSection = ({idPme}:{idPme: number}) => {
    const pmeEndPoint = import.meta.env.VITE_ENDPOINT_ALL_PMES
    const [allPme, setAllPme] = useState<PmeType[]> ([])
    useEffect(() => {
        axios.get (pmeEndPoint)
        .then ((res) => {
            setAllPme (res.data)
        })
    }, []);
    return (
        <section className="flex gap-4">
            {
                allPme.filter (pme => pme.idPme !== idPme)
                .map ((pme) => (
                    <SuggestItem id={pme.idPme} image={pme.profile}  name={pme.nom}  description={pme.description} />
                ))
            }
        </section>
    );
}

export default SuggestSection;
