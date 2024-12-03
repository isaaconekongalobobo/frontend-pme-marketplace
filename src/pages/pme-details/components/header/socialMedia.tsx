import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
    return (
        <div className="flex gap-5">
            <FaFacebook className="text-main-yellow text-xl"/>
            <FaXTwitter className="text-main-yellow text-xl"/>
            <FaInstagram className="text-main-yellow text-xl"/>
            <FaLinkedin className="text-main-yellow text-xl"/>
        </div>
    );
}

export default SocialMedia;
