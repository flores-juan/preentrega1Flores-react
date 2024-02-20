import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="row">
            <h3>Tienda One Piece Oficial</h3>
            <div className="btn-group ">
                <button className="btn btn-outline-primary">Personajes</button>
                <button className="btn btn-outline-primary">Tienda</button>
                <button className="btn btn-outline-primary">Nakamas</button>
            </div>
        
            <CartWidget />
        </nav>
    )
}
export default NavBar;