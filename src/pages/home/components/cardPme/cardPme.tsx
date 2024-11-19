interface pmeCardType {
    image: string | undefined,
    name: string | undefined,
    services: string[] | undefined
}

const CardPme = ({image, name, services} : pmeCardType) => {
    return (
        <div>
            <img src={image} alt={`Profil de ${name}`} />
            <p> { `${services![1]} +${services?.length}` } </p>
        </div>
    );
}

export default CardPme;
