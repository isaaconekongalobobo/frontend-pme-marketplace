/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { PmeType } from "../../../../home/home";
import SuggestItem from "./suggestItem";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const SuggestCarousel = ({ idPme }: { idPme: number }) => {
  const pmeEndPoint = import.meta.env.VITE_ENDPOINT_ALL_PMES;
  const [allPme, setAllPme] = useState<PmeType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(pmeEndPoint).then(res => setAllPme (res.data));
  }, []);

  const filteredPme = allPme.filter((pme) => pme.idPme !== idPme);

    // Fonction pour passer a la slide suivante  
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === filteredPme.length - 1 ? 0 : prevIndex + 1
        );
    };
    // Fonction retourner a la slide precedente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? filteredPme.length - 1 : prevIndex - 1
        );
    };

    const divVariant = {
        initial: {opacity: 0},
        animate: {opacity: 1},
    }

  return (
    <div className="relative w-full flex justify-center">
        <BiChevronLeft onClick={prevSlide} className="text-black-marroon text-5xl absolute top-1/2 left-2 " />

        <motion.div variants={divVariant} key={currentIndex} custom={currentIndex} initial="initial" 
        animate="animate" transition={{ duration: 0.5 }} className="">
            {
                filteredPme[currentIndex] && <SuggestItem id={filteredPme[currentIndex].idPme} image={filteredPme[currentIndex].profile} name={filteredPme[currentIndex].nom} description={filteredPme[currentIndex].description}/>
            }
        </motion.div>
        <BiChevronRight onClick={nextSlide} className="text-black-marroon text-5xl  absolute top-1/2 right-2 " />
    </div>
  );
};

export default SuggestCarousel;

