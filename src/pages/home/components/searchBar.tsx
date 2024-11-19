import {motion} from 'framer-motion'
const inputVariant = {
    whenHover: {
        y: -4,
    }
}
const SearchBar = () => {
    return (
        <>
            <motion.input 
                variants={inputVariant}
                whileHover="whenHover"
                type="search" 
                name="search" 
                placeholder="Recherchez une PME | service | produit" 
                className=" p-2 sm:~p-3/5 pl-4 w-3/4 sm:w-2/4 bg-white border-4 border-gray hover:border-black-marroon rounded-full text-black placeholder-black placeholder:~text-xs/sm "
            />
        </>
    );
}

export default SearchBar;

