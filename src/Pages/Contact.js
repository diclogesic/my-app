
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"

const ContactPage = () => {
    return(
        <ItemListContainer className='container-general'>
            <h1>PAGINA DE CONTACTO</h1>
                <form>
                    <input type="text" placeholder="nombre"/>
                    <input type="text" placeholder="apellido" />
                    <input type="text" placeholder="mail" />
                    <button>enviar</button>
                </form>
        </ItemListContainer>
    )
}

export default ContactPage