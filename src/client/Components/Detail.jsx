import { useParams } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData";


function Detail () {
    const params = useParams();
    const [ film ] = useFetchData(`/product/${params.id}`);
    

    return(
        (film === undefined)? null : <div className = 'd-flex py-5 justify-content-center align-items-center' style = {{flexDirection: 'column'}}>
            <img alt="poster" src= {film.affiche} />
            <h4>{film.titre}</h4>
            <p>{film.annee_sortie}</p>
            <p>{film.note_imdb}</p>
        </div>
    )
}

export default Detail;