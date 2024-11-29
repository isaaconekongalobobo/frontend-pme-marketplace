import { useParams } from "react-router-dom";

const ResultatCategorie = () => {
    const {nom} = useParams ()
    return (
        <section className="grid sm:grid-cols-4 ~p-14/16 gap-14 mt-2 mb-28 ">
            <h1 className="text-black-marroon" > {nom} </h1>
        </section>
    );
}

export default ResultatCategorie;
