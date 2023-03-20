import Accordion from 'react-bootstrap/Accordion';
import ProductoPedido from './ProductoPedido';

const ProductosPedido = (props) => {

    let contenido = "";

    contenido = <Accordion>
        <ProductoPedido/>
    </Accordion>;

    return (
        <>
            {contenido}
        </>
    )
}

export default ProductosPedido;
