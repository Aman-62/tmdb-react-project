import { useState, useEffect, useContext, createContext } from "react"
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [query, setQuery] = useState("Batman");
    const [page, setPage] = useState(1);

    const {isLoading, error, data} = useFetch(true ,`query=${query}&page=${page}`);

    return (
        <AppContext.Provider value={{
            query, setQuery, page, setPage, isLoading, error, data
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider

export const useGlobalContext = () => {
    return useContext(AppContext);
}