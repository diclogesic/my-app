import ItemListProducts from "../componentes/ItemListProducts/ItemListProducts"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"



const HomePage = () => {
    return(
        <ItemListContainer className='container-general'>
            <ItemListProducts />
        </ItemListContainer>
    )
}

export default HomePage