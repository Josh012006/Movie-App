import { NavLink } from "react-router-dom";


function Header () {
    const commonStyle = {
        color:'white', 
        textDecoration: 'none', 
        fontSize: '18px'
    }
    return(
        <header className="bg-dark container-fluid" style = {{minHeight: '80px'}}>
            <div className="row d-flex align-items-center py-2">
                <h1 className="col-5 justify-content-center d-flex align-items-center">Movie App</h1>
                <nav className="col-7 d-flex align-items-center justify-content-around">
                    <NavLink to="/" style={commonStyle}>Accueil</NavLink>
                    <NavLink to="/apropos" style={commonStyle}>A propos</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;