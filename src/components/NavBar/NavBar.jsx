import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda One Piece Oficial</h3>
            <div>
                <button>Personajes</button>
                <button>Tienda</button>
                <button>Nakamas</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar;