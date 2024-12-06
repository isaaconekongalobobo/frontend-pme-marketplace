import SectionTitle from "../../sectionTitle";
import Contacts from "./contacts";
interface contactType {
    name: string | undefined,
    address: string | undefined, 
    email: string | undefined,
    phone: string | undefined,
    communicationMode: string | undefined

}
const ContactSection = ({name, address, email, phone, communicationMode}: contactType) => {
    return (
        <section className="flex flex-col gap-2">
            <div>
                <SectionTitle title="Contact"/>
                <p className="text-black-marroon">{`Voici comment vous pouves joindre ${name}`}</p>
                <p className="text-black-marroon">{communicationMode}</p>   
            </div>
            
            <Contacts address={address} email={email} phone={phone} />
        </section>
    );
}

export default ContactSection;
