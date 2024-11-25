import { Link } from "react-router-dom";

const ConnexionLink = () => {
    return (
        <Link to="/connexion">
            <span className='text-black-marroon hover:underline hover:underline-offset-4'>J'aie déja un compte</span>
        </Link>
    );
}

export default ConnexionLink;
