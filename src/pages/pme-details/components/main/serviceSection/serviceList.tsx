import { ServiceType } from "./serviceSection";

const ServiceList = ({services}:{services: ServiceType[]}) => {
    return (
        <div>
            {
                services.map ((sv) => (
                    <p className="text-black-marroon">{sv.name}</p>
                ))
            }
        </div>
    );
}

export default ServiceList;
