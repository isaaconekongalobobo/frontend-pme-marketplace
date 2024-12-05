import SectionTitle from "../../sectionTitle";
interface contactType {
    name: string | undefined
}
const ContactSection = ({name}: contactType) => {
    return (
        <section>
            <SectionTitle title="Contact"/>
            <p className="text-black-marroon">{`Voici comment vous pouves joindre ${name}`}</p>

        </section>
    );
}

export default ContactSection;
