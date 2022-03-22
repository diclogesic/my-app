import Button from '@mui/material/Button';
import './Card.css'
export default function Card({price, talle, title}) {
    console.log("Precio: ", price)
    console.log("Talle: " , talle)
    console.log("Titulo: " , title)
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>precio: $ {price}</p>
            <p>talle: {talle}</p>
            <Button variant="outlined">comprar</Button>
        </div>
    )
}