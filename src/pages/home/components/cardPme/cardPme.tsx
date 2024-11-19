interface pmeCardType {
    image: string | undefined,
    name: string | undefined,
    services: string[] | undefined
}

const CardPme = ({image, name, services} : pmeCardType) => {
    return (
        <div className=" flex flex-col items-center gap-2 ">
            <img src={image} alt={`Profil de ${name}`} className="~w-3/4/5/6 rounded-xl " />
            <div className=" flex flex-col text-center ">
                <h3 className="text-black font-medium text-xl "> {name} </h3>
                <p className="text-black" > { `${services![1]} +${services?.length}` } </p>
            </div>
            
        </div>
    );
}

export default CardPme;
