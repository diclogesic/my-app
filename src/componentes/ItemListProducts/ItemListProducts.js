 import Card from '../Card/Card'
 const ItemListProducts=() => {
     let dataProduct = {
        title: 'remera',
        talle: 'XL',
        price: 1500,
        stock: 5,
     }
    return(
        
        <div className="container-cards">
            <h2> OFERTAS </h2>
             <Card data={dataProduct} />
             {/*<Card title='pantalon' talle='42' price={400} />
             <Card title='remera 2' talle='S' price={250} />
             <Card title='musculosa' talle='M' price={300} />*/}
        </div>
        
    )
}

export default ItemListProducts;