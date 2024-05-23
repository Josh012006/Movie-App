import { useState } from "react";


function Filter({SetUsedMovies}) {
    const [input, setInput] = useState("");
    const handleClick = () => {
        input && SetUsedMovies(mov => mov.filter(j => j.titre.toLowerCase().includes(input.toLowerCase())));
    }

    return (
        <div className="row px-lg-5 px-2"  style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('https://th.bing.com/th/id/R.108663809e6a19c2f83f34b351f7453e?rik=oAvujAMg6OKVug&pid=ImgRaw&r=0')`, backgroundRepeat:'no-repeat', minHeight: '570px', backgroundSize:'cover', justifyItems: 'center', alignItems: 'center'}}>
            <input placeholder="Entrez le nom du film..." type="text" value = {input} onChange={(e) => {setInput(e.target.value)}} className="col-9" style={{height: '40px', borderTopLeftRadius: '7px', borderBottomLeftRadius: '7px'}} />
            <button className="btn btn-dark col-3" style={{height: '40px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}} onClick={handleClick}>Rechercher</button>
        </div>
    )
}

// SetUsedMovies(mov => mov.filter(j => j.titre.includes(input)))

export default Filter;