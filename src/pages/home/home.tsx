import Header from "../../components/header/header"
import SearchBar from "./components/searchBar"
import SectionCategorie from "./components/sectionCategorie"
import SubmitButton from "./components/submitButton"

const HomePage = () => {
    return (
        <>
            <Header/>
            <form className="flex justify-center items-center relative top-[-11rem] ">
                <SearchBar/>
                <SubmitButton/>
            </form>
            <SectionCategorie/>
        </>
    )
}

export default HomePage