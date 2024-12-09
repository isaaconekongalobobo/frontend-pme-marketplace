import { Link } from "react-router-dom";

interface sugestionType {
    id: number,
    image: string,
    name: string,
    description: string
}
const SuggestItem = ({id, image,name,  description}: sugestionType) => {
    return (
        <>
            <Link to={`/pme-details/${id}`}>
                <div className="size-60 bg-white rounded-xl shadow-lg overflow-hidden">
                    <img className="w-full h-2/4 object-cover" src={image}/>
                    <div className="p-6 text-black-marroon">
                        <h3 className="text-lg font-medium text-black-marroon">{name}</h3>
                        <p className="text-gray-600 text-sm">
                             {
                                description.length > 20? description.slice(0, 20) + '...': description
                             } 
                        </p>
                    </div>
                </div>          
            </Link>
        </>

    );
}

export default SuggestItem;
