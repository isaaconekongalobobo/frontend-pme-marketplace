import Header from "../../components/header/header"
import SearchBar from "./components/searchBar"

const HomePage = () => {
    return (
        <>
            <Header/>
            <div className="flex justify-center relative top-[-11rem]  ">
                <SearchBar/>
            </div>
        </>
    )
}

export default HomePage