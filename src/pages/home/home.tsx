import Header from "../../components/header/header"
import SearchBar from "./components/searchBar"
import SubmitButton from "./components/submitButton"

const HomePage = () => {
    return (
        <>
            <Header/>
            <form className="flex justify-center items-center relative top-[-11rem] ">
                <SearchBar/>
                <SubmitButton/>
            </form>
        </>
    )
}

export default HomePage