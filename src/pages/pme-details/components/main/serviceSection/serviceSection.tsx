import SectionTitle from "../../sectionTitle";
interface infos {
    name: string | undefined,
    idPme: number | undefined
}
const ServiceSection = ({name, idPme}:infos) => {
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
