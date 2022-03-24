import Button from '@mui/material/Button';
import React,{useState, useEffect} from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'
export default function Card({data}) {
    const {title, price, talle, stock} = data
    const [ count, setCount ] = useState(1)

    console.log("estado contador: ", count)

    const addStock = () => {
        setCount(count + 1)
    }

    const removeStock = () => {
        setCount(count - 1)
    }

    useEffect( () => {
        console.log("log desde useEffect");
    })
    {console.log("ciclo de montaje")}
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>precio: $ {price}</p>
            <p>talle: {talle}</p>
            <ItemCount stock={stock} />
            
            
        </div>
    )
}