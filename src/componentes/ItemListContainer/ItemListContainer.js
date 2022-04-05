import { useState,useEffect } from 'react'
import Card from '../Card/Card'
 const ItemListContainer=() => {

    const mockProduct = [
     
     {
        id: 3,
        title: 'gorra',
        talle: 'L',
        image: 'https://brotemedia.sfo3.cdn.digitaloceanspaces.com/cncstore/uploads/2022/01/item19857foto89987th.jpg',
        price: 4500,
        stock: 2,
     },
    
    ]
    const [container, setContainer] = useState ([])

    const itemContainer = () => {
       return new Promise((resolve, reject) => {
            return resolve(mockProduct)
        })
    }

    useEffect(() => {
        itemContainer().then((data) => {
            setContainer(data)
        })
    }, [])


   


    return(
        
        <div className="container-cards">
            <h3></h3>
             {container.map( (container) => {
                 const  { id } = container
                 return(
                     <Card data={container} key={id}/>
                 )
             })}
             {/*<Card  />*/}
             {/*<Card title='pantalon' talle='42' price={400} />
             <Card title='remera 2' talle='S' price={250} />
             <Card title='musculosa' talle='M' price={300} />*/}
        </div>
        
    )
}

export default ItemListContainer