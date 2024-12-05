import { Link } from "react-router-dom";

const ImageItem = ({idService, image}:{idService: number, image: string}) => {
    return (

        <>
            <Link to={`/details/services/${idService}`}>
                <div className="size-40 sm:size-72 bg-blue-600 rounded-xl bg-cover " style={{ backgroundImage: `url(${image})` }}></div>
            </Link>
        </>
    );
}

export default ImageItem;
