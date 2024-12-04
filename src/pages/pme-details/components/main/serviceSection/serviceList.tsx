import { ServiceType } from "./serviceSection";

const ServiceList = ({services}:{services: ServiceType[]}) => {
    return (
        <div className="flex flex-wrap gap-2">
            {
                services.map ((sv) => (
                    <p 
                    key={sv.idService} 
                    className="text-black-marroon bg-main-yellow pl-2 pr-2 p-2 rounded-full text-center text-sm"
                    >  {sv.name}</p>
                ))
            }
        </div>
    );
}

export default ServiceList;
