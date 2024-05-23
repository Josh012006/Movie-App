import { useNavigate } from "react-router-dom";


function Movie({ID, Src, Title}) {
    const navigate = useNavigate();

    return(
        <div id = {ID} className="bg-black rounded-1 col-12 col-lg-4" onClick={() => {navigate(`/detail/${ID}`)}}  style={{justifyItems: 'center', alignItems:'center', cursor: 'pointer', border: '2px solid gray'}}>
            <div style = {{width: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop: '20px', marginBottom: '20px'}}>
                <img alt="poster" src={Src} />
                <h5 style={{textAlign: 'center', marginTop: '8px'}}>{Title}</h5>
            </div>
        </div>
    )
}

export default Movie;