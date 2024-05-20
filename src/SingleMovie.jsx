import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
    const {id} = useParams();
    const {isLoading, error, data} = useFetch(false, id, 0);

    if(isLoading) {
        return <h1>Loading...</h1>
    }
    if(error.show) {
        return <h1>Error...</h1>
    }

    const {title, tagline, overview, poster_path, backdrop_path, genres, release_date, runtime, status, popularity} = data

    return <main>
        <Container>
            <h1 className="display-1">{title} <span className="fs-5">{runtime}m</span></h1>
            <h3 className="lead mb-4">{tagline}</h3>
            <p>{overview}</p>
        </Container>
    </main>;
};
export default SingleMovie;
