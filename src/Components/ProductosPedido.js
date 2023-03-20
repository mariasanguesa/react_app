import Accordion from 'react-bootstrap/Accordion';
import ProductoPedido from './ProductoPedido';

const ProductosPedido = (props) => {

    let contenido = "";

    contenido = <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Pedido número 1</Accordion.Header>
            <Accordion.Body>
                <ProductoPedido/>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Pedido número 2</Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>;

    return (
        <>
            {contenido}
        </>
    )
}

export default ProductosPedido;
