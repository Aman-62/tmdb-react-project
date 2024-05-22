import { Button, Card, Col, Pagination, Row } from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import { useEffect, useState, useRef } from "react";
import { useIntersection } from "@mantine/hooks";

const Movies = () => {
    const [searchedResult, setSearchedResult] = useState([]);
    const {query, isLoading, error, data, goToNextPage, goToPrevPage, page} = useGlobalContext()
    const noImgPreview = './No_picture_available.png';
    const tmdbBaseImgUrl = 'https://image.tmdb.org/t/p/w342';

    const loadingArray = [1,2];
    
    useEffect(()=>{
        if(data?.results.length > 0){
            setSearchedResult([...searchedResult, ...data.results]);
        }
    },[data])

    // if(isLoading) {
    //     return (
    //         <section>
    //             <Row xs={2} md={4} xl={5} className="g-4">
    //                 {loadingArray.map((el) => (
    //                     <Col key={el}>
    //                         <Card className="border-0">
    //                             <Card.Img variant="top" className="rounded-4" 
    //                             src={noImgPreview} />

    //                             <Card.Body className="py-1 px-1">
    //                                 <Placeholder as={Card.Text} animation="glow" className="mb-0">
    //                                     <Placeholder xs={8} />
    //                                 </Placeholder>
    //                                 <Placeholder as={Card.Text} animation="glow">
    //                                     <Placeholder xs={4} />
    //                                 </Placeholder>
    //                             </Card.Body>
    //                         </Card>
    //                     </Col>
    //                     )
    //                 )}
    //             </Row>
    //         </section>
    //     )
    // }
    // if(error.show) {
    //     return <h1>{error.message}</h1>
    // }

    const lastMovieRef = useRef(null);

    const {ref, entry} = useIntersection({
        root: lastMovieRef.current,
        threshold: 1
    })

    useEffect(()=>{
        if(entry?.isIntersecting) goToNextPage();
    }, [entry])

    return (
        <section>
            <h1 className="py-4">{query ? `Showing result for: ${query}` : "Please Search  for a Movie"}</h1>

            <Row xs={2} md={4} xl={5} className="g-4 py-5">
                {data && searchedResult.map(({id, poster_path, title, release_date}, index) => {
                if (index === searchedResult.length - 1) 
                    return (
                    <Col key={id} ref={ref}>
                        <Card className="border-0">
                            <Card.Img variant="top" className="rounded-4" 
                            src={poster_path ? tmdbBaseImgUrl+poster_path : noImgPreview} />

                            <Card.Body className="py-1 px-1">
                                <Link to={`/movies/${id}`}>
                                    <Card.Text className="movie-card-title mb-0">{title}</Card.Text>
                                </Link>
                                <Card.Text>{release_date}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
                return (
                    <Col key={id}>
                        <Card className="border-0">
                            <Card.Img variant="top" className="rounded-4" 
                            src={poster_path ? tmdbBaseImgUrl+poster_path : noImgPreview} />

                            <Card.Body className="py-1 px-1">
                                <Link to={`/movies/${id}`}>
                                    <Card.Text className="movie-card-title mb-0">{title}</Card.Text>
                                </Link>
                                <Card.Text>{release_date}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
                })}

                {isLoading && 
                    loadingArray.map((el) => (
                        <Col key={el}>
                            <Card className="border-0">
                                <Card.Img variant="top" className="rounded-4" 
                                src={noImgPreview} />

                                <Card.Body className="py-1 px-1">
                                    <Placeholder as={Card.Text} animation="glow" className="mb-0">
                                        <Placeholder xs={8} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={4} />
                                    </Placeholder>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    )}

            </Row>

            {/* <div className="pb-5">
                {!isLoading && data.total_pages > page && <Button size="lg" onClick={goToNextPage} >Load More</Button>}
            </div> */}

            {/* <div className="my-4">
                <Pagination className="justify-content-center"> 
                    <Pagination.First />
                    <Pagination.Prev onClick={goToPrevPage} />
                    <Pagination.Item active>{data.page}</Pagination.Item>
                    <Pagination.Next onClick={goToNextPage} />
                    <Pagination.Last />
                </Pagination>
            </div> */}
        </section>
    );
};
export default Movies;
