import { Outlet } from "react-router-dom"
import Header from "../../components/header/header"
import SearchBar from "./components/searchBar"
import SectionCategorie from "./components/sectionCategorie"
import SubmitButton from "./components/submitButton"
import { useEffect, useState } from "react"
import axios from "axios"
import CardPme from "./components/cardPme/cardPme"
import Footer from "../../components/footer/footer"

export interface PmeType {
    idPme: number,
    nom: string,
    physicAdress: string,
    emailAdress: string,
    identificationNumber: string | '',
    description: string | '',
    communicationMode: string[],
    licence: string,
    logoType: string,
    validated: boolean
}

const pmeData = [
    {
      idPme: 1,
      nom: "Tech Innovations",
      physicAdress: "123 Rue des Startups, Paris, France",
      emailAdress: "contact@techinnovations.com",
      identificationNumber: "FR123456789",
      description: "Une société innovante spécialisée dans les nouvelles technologies.",
      communicationMode: ["Email", "Téléphone", "Visioconférence"],
      licence: "Licence A",
      logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165924/cruel-summer_dqvgk0.png",
      validated: true
    },
    {
      idPme: 2,
      nom: "EcoServices",
      physicAdress: "45 Avenue Verte, Lyon, France",
      emailAdress: "info@ecoservices.fr",
      identificationNumber: "FR987654321",
      description: "Services écologiques pour une ville plus verte.",
      communicationMode: ["Email", "Chat en ligne"],
      licence: "Licence B",
      logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
      validated: false
    },
    {
      idPme: 3,
      nom: "Creative Solutions",
      physicAdress: "78 Boulevard des Arts, Marseille, France",
      emailAdress: "contact@creativesolutions.com",
      identificationNumber: "",
      description: "",
      communicationMode: ["Email", "Rencontre en personne"],
      licence: "Licence C",
      logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
      validated: true
    },
    {
      idPme: 4,
      nom: "GreenTech",
      physicAdress: "22 Rue des Innovateurs, Bordeaux, France",
      emailAdress: "support@greentech.com",
      identificationNumber: "FR1122334455",
      description: "Technologies vertes pour un avenir durable.",
      communicationMode: ["Email", "Téléphone"],
      licence: "Licence D",
      logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
      validated: true
    },
    {
      idPme: 5,
      nom: "Digital Dynamics",
      physicAdress: "99 Rue des Pixels, Toulouse, France",
      emailAdress: "hello@digitaldynamics.com",
      identificationNumber: "FR5566778899",
      description: "Solutions digitales pour booster votre entreprise.",
      communicationMode: ["Email", "Chat en ligne", "Webinaires"],
      licence: "Licence E",
      logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
      validated: false
    },
    {
        idPme: 2,
        nom: "EcoServices",
        physicAdress: "45 Avenue Verte, Lyon, France",
        emailAdress: "info@ecoservices.fr",
        identificationNumber: "FR987654321",
        description: "Services écologiques pour une ville plus verte.",
        communicationMode: ["Email", "Chat en ligne"],
        licence: "Licence B",
        logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
        validated: false
      },
      {
        idPme: 3,
        nom: "Creative Solutions",
        physicAdress: "78 Boulevard des Arts, Marseille, France",
        emailAdress: "contact@creativesolutions.com",
        identificationNumber: "",
        description: "",
        communicationMode: ["Email", "Rencontre en personne"],
        licence: "Licence C",
        logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
        validated: true
      },
      {
        idPme: 4,
        nom: "GreenTech",
        physicAdress: "22 Rue des Innovateurs, Bordeaux, France",
        emailAdress: "support@greentech.com",
        identificationNumber: "FR1122334455",
        description: "Technologies vertes pour un avenir durable.",
        communicationMode: ["Email", "Téléphone"],
        licence: "Licence D",
        logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
        validated: true
      },    {
        idPme: 2,
        nom: "EcoServices",
        physicAdress: "45 Avenue Verte, Lyon, France",
        emailAdress: "info@ecoservices.fr",
        identificationNumber: "FR987654321",
        description: "Services écologiques pour une ville plus verte.",
        communicationMode: ["Email", "Chat en ligne"],
        licence: "Licence B",
        logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
        validated: false
      },
      {
        idPme: 3,
        nom: "Creative Solutions",
        physicAdress: "78 Boulevard des Arts, Marseille, France",
        emailAdress: "contact@creativesolutions.com",
        identificationNumber: "",
        description: "",
        communicationMode: ["Email", "Rencontre en personne"],
        licence: "Licence C",
        logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
        validated: true
      },
      {
        idPme: 4,
        nom: "GreenTech",
        physicAdress: "22 Rue des Innovateurs, Bordeaux, France",
        emailAdress: "support@greentech.com",
        identificationNumber: "FR1122334455",
        description: "Technologies vertes pour un avenir durable.",
        communicationMode: ["Email", "Téléphone"],
        licence: "Licence D",
        logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
        validated: true
      },
      {
        idPme: 4,
        nom: "GreenTech",
        physicAdress: "22 Rue des Innovateurs, Bordeaux, France",
        emailAdress: "support@greentech.com",
        identificationNumber: "FR1122334455",
        description: "Technologies vertes pour un avenir durable.",
        communicationMode: ["Email", "Téléphone"],
        licence: "Licence D",
        logoType: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png",
        validated: true
      },
  ];
  
  // Affichage des données dans la console pour vérification
  console.log(pmeData);
  

const HomePage = () => {
    const [allPme, setAllPme] = useState<PmeType[]> ([])
    useEffect (() => {
        try {
            axios.get ('')
            .then ((response) => {
                setAllPme (response.data)
            })
        } catch (error) {
            console.error (error)
        }
    }, [])
    return (
        <div>
            <Header/>
            <div className="flex flex-col gap-10" >
                <div className="relative top-72" >
                    <form className="flex justify-center items-center relative top-[-11rem] ~gap-2/1 ">
                        <SearchBar/>
                        <SubmitButton/>
                    </form>
                    <SectionCategorie/>                
                </div>
                <div className="relative ~top-20/28 " >
                    <Outlet/>
                    <section className="grid sm:grid-cols-4 p-14 gap-5">
                        {
                            pmeData.map (pme => <CardPme image={pme.logoType} name={pme.nom} services={pme.communicationMode} /> )
                        }
                    </section>                
                </div>
                <Footer/>                 
            </div>
        </div>
    )
}

export default HomePage