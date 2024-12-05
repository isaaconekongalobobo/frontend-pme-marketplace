import { Link } from "react-router-dom";
import { ServiceType } from "./serviceSection";

const Images = ({services}:{services: ServiceType[]}) => {
    return (
    <div className=" grid grid-cols-2 sm:flex sm:flex-wrap gap-4 mt-5  ">
        {
            services.map ((sv) => (
                <Link to={`/details/services/${sv.idService}`}>
                <div className="size-40 sm:size-72 bg-blue-600 rounded-xl bg-cover " style={{ backgroundImage: `url(${sv.image})` }}></div>

                </Link>
            ))
        }
        
    </div>
    );
}

export default Images;
