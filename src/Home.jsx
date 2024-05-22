import { Container } from "react-bootstrap";
import SearchForm from "./SearchForm";
import Movies from "./Movies";

const Home = () => {
    return <main>
        <Container>
            <SearchForm />
            <Movies />
        </Container>
    </main>;
};
export default Home;
