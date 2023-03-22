import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const TotalPedido = () => {
    return (
        <><div className="border-bottom">
            <Container>
                <Row>
                    <p>Total del pedido: 22€</p>
                </Row>
                <Row>
                    <p>Gastos de envío: 3€</p>
                </Row>
            </Container>
        </div>
            <div className="border-bottom">
                <p>Total a pagar: 25€</p>
            </div>
            <br></br></>


    )
}

export default TotalPedido;