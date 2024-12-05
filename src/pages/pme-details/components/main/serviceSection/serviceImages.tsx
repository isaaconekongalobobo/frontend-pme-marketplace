import { ServiceType } from "./serviceSection";
import ImageItem from "./imageItem";

const ServiceImages = ({services}:{services: ServiceType[]}) => {
    return (
    <div className=" grid grid-cols-2 sm:flex sm:flex-wrap gap-4 mt-5  ">
        {
            services.map ((sv) => <ImageItem idService={sv.idService} image={sv.image}/> )
        }
    </div>
    );
}

export default ServiceImages;
