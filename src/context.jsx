import { useState, useEffect, useContext, createContext } from "react"
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [query, setQuery] = useState("Batman");
    const [page, setPage] = useState(1);

    const {isLoading, error, data} = useFetch(true ,`query=${query}&page=${page}`);

    function goToNextPage () {
        if (data.total_pages > page) setPage(page + 1);
        else return;
    }
    function goToPrevPage () {
        if (page > 1) setPage(page - 1);
        else return;
    }

    return (
        <AppContext.Provider value={{
            query, setQuery, isLoading, error, data, goToNextPage, goToPrevPage, setPage, page
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider

export const useGlobalContext = () => {
    return useContext(AppContext);
}