import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
interface contactType {
    address: string | undefined,
    email: string | undefined,
    phone: string | undefined
}
const Contacts = ({address, email, phone}: contactType) => {

    // Algo pour encoder l'address afin la mettre dans l'url vers google maps
    let encodedAddress
    if (address !== undefined) {
        encodedAddress = encodeURIComponent (address) 
    } else {
        encodedAddress = ''
    }

    return (
        <div className="flex flex-col gap-2">
            {/* Address */}
            <div className="flex items-center gap-2">
                <FaLocationDot className="text-black-marroon text-2xl font-bold "/>
                <a
                href={`https://www.google.com/maps?q=${encodedAddress}`}
                className="text-black-marroon text-lg font-medium hover:text-main-yellow 
                hover:underline "
                title="Cliquez pour voir l'emplacement"
                >{address}</a>
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-2">
                <MdMail className="text-black-marroon text-2xl font-bold "/>
                <a 
                href={`mail.to:${email}` }
                className="text-black-marroon text-lg font-medium hover:text-main-yellow 
                hover:underline"
                title="Cliquez pour ecrire un message"
                >{email}</a>
            </div>

            {/* Telephone */}
            <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-black-marroon text-2xl font-bold "/>
                <a 
                href={`tel:${phone}` }
                className="text-black-marroon text-lg font-medium hover:text-main-yellow 
                hover:underline"
                title="Cliquez pour appeller"
                >{phone}</a>
            </div>
        </div>
    );
}

export default Contacts;
