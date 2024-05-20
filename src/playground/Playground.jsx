import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

console.log(import.meta.env.VITE_TMDB_API_KEY);

const Playground = () => {
    const [popularMovies, setPopularMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPopularMovies() {
            try {
                // const response = await axios.request(options);
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${
                        import.meta.env.VITE_TMDB_API_KEY
                    }`
                );
                console.log(response);
                setPopularMovies(response.data);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPopularMovies();
    }, []);

    if (isLoading) {
        return (
            <Container className="py-5">
                <h1>Loading...</h1>
            </Container>
        );
    }
    if (isError) {
        return (
            <Container className="py-5">
                <h1>Error...</h1>
            </Container>
        );
    }
    return (
        <Container className="py-5">
            <Button variant="primary">Primary</Button>
        </Container>
    );
};
export default Playground;
