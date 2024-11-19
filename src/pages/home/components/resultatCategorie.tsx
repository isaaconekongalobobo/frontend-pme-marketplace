import { useParams } from "react-router-dom";

const ResultatCategorie = () => {
    const {nom} = useParams ()
    return (
        <section>
            <h1 className="text-black-marroon" > {nom} </h1>
        </section>
    );
}

export default ResultatCategorie;
