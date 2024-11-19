import { Outlet } from "react-router-dom"
import Header from "../../components/header/header"
import SearchBar from "./components/searchBar"
import SectionCategorie from "./components/sectionCategorie"
import SubmitButton from "./components/submitButton"

const HomePage = () => {
    return (
        <>
            <Header/>
            <form className="flex justify-center items-center relative top-[-11rem] ~gap-2/1 ">
                <SearchBar/>
                <SubmitButton/>
            </form>
            <SectionCategorie/>
            <Outlet/>
        </>
    )
}

export default HomePage