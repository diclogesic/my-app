 import { useState,useEffect } from 'react'
import Card from '../Card/Card'
 const ItemListProducts=() => {

    const mockProducts = [
     {
        id: 1,
        title: 'remera',
        talle: 'XL',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/162/180/products/item13501foto897081-4eb8e2d710d8676b6516419075818617-1024-1024.jpg',
        price: 1500,
        stock: 5,
     },
     {
        id: 2,
        title: 'campera',
        talle: 'XL',
        image: 'https://www.cristobalcolon.com/fullaccess/item12883foto85633th.jpg',
        price: 2500,
        stock: 3,
     },
     {
        id: 3,
        title: 'camisa',
        talle: 'L',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/162/180/products/item17726foto812771-6bdba954b17b71d79216316447525301-1024-1024.jpg',
        price: 4500,
        stock: 2,
     },
    
    ]
    const [products, setProducts] = useState ([])

    const itemProducts = () => {
       return new Promise((resolve, reject) => {
            return resolve(mockProducts)
        })
    }

    useEffect(() => {
        itemProducts().then((data) => {
            setProducts(data)
        })
    }, [])


   


    return(
        
        <div className="container-cards">
            <h2> OFERTAS </h2>
             {products.map( (product) => {
                 const  { id } = product
                 return(
                     <Card data={product} key={id}/>
                 )
             })}
             {/*<Card  />*/}
             {/*<Card title='pantalon' talle='42' price={400} />
             <Card title='remera 2' talle='S' price={250} />
             <Card title='musculosa' talle='M' price={300} />*/}
        </div>
        
    )
}

export default ItemListProducts;