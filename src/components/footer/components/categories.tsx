import ItemCategorie from "./itemCategorie";

const Categories = () => {
    const tbCategories: string[] = [
        "Cosmetique",
        "Informatique",
        "Agriculture",
        "Energie",
        "Alimentaire",
        "Consulting",
        "Voitures",
        "Imobilier",
        "Elevage",
        "Hydrocarbures",
        "Couture",
        "Assurance",
        "Peche",
        "Marketing",
        "Technologie",
        "Mecanique",
        "Construiction",
        "Sous-traitance",
        "Peche",
        "Marketing",
        "Technologie",
        "Mecanique",
        "Construiction",
        "Sous-traitance",
    ]
    return (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-sm mt-5 font-medium text-center sm:text-start " >
            {
                tbCategories.map ((categorie) => (
                    <ItemCategorie categorie={categorie}/>
                ))
            }
        </div>
    );
}

export default Categories;
