import { ServiceType } from "./serviceSection";

const ServiceList = ({services}:{services: ServiceType[]}) => {
    return (
        <div>
            {
                services.map ((sv) => (
                    <span key={sv.idService} className="text-black-marroon">{sv.name}</span>
                ))
            }
        </div>
    );
}

export default ServiceList;
