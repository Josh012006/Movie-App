import Filter from "./Filter";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import useFetchData from '../Hooks/useFetchData';



function Home () {
    const [usedMovies, setUsedMovies] = useState([]);
    const values = useFetchData('/allProducts');
    useEffect(() => {
        setUsedMovies(values);
    }, [values]);

    return(
        <div className="container-fluid">
            <Filter SetUsedMovies = {setUsedMovies} />
            <MovieList Movies={usedMovies} />
        </div>
    )
}

export default Home;