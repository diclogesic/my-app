import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar() {

    return(
        <header className={"main-header"}>
          <div className={"container-logo"}>
          <img
           src="https://images-na.ssl-images-amazon.com/images/I/51VQaHLbouL.jpg"
            className="img-header"
            />
           </div>
            <ul className={"navbar"}>
            <li><Button>home</Button></li>
            <li><Button>productos</Button></li>
            <li><Button>nosotros</Button></li>
            <li><Button>contacto</Button></li>
             </ul>
             <CartWidget />
       </header>
    )
}

export default NavBar