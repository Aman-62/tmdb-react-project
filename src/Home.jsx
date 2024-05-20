import { Container } from "react-bootstrap";
import SearchForm from "./SearchForm";
import Movies from "./Movies";
import { useGlobalContext } from "./context";

const Home = () => {
    const  {query} = useGlobalContext();
    return <main>
        <Container>
            <SearchForm />

            <h1>{query}</h1>

            <Movies />
        </Container>
    </main>;
};
export default Home;
