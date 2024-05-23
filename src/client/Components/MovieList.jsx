import Movie from "./Movie";

function MovieList({Movies}) {

    return (
        <div className="row">
            {Movies.map((movie) => {return <Movie key={movie.id} ID={movie.id} Src={movie.affiche} Title={movie.titre} />})}
        </div>
    )
}

export default MovieList;