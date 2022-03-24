import React,{useState} from 'react'
const ItemCount = ({stock}) => {
    const [count, setCount]  = useState(1)
    
    const onAdd = () => {
        if(count < stock ){
            setCount(count + 1)
        }
    }

    return(

        <div>
            <button onClick={onAdd}>+</button>
            <p> {count}</p>
            <p>stock disponible : 5</p>
            <button>-</button>

        </div>

    )
}



export default ItemCount