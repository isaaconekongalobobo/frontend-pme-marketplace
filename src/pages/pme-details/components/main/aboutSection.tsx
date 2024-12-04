import SectionTitle from "../sectionTitle";

const AboutSection = ({description}:{description: string | undefined}) => {
    return (
        <section className="flex flex-col gap-1">
            <SectionTitle title="À propos" />
            <p className="text-black-marroon text-wrap">{description}</p>
        </section>
    );
}

export default AboutSection;
