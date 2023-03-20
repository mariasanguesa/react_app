import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductosPedido from "../Components/ProductosPedido";

const MisPedidos= (props) => {

 
    let contenido = <></>;

    if (props.loginData.idToken)  {
        contenido = <Container className="gap-3">
            <Row className="justify-content-md-center  mx-auto" >
                <Col md={7}>
                    <div className="border-bottom">
                        <p>Mis pedidos realizados</p>
                    </div>
                    <div >
                        <ProductosPedido loginData={props.loginData} quitarPedido={props.quitarPedido}/>
                    </div>
                </Col>
            </Row>
        </Container>;

    }
    else {
        contenido = "Para ver tus pedidos hace falta hacer login";
    }

    return (
        <>
            <br></br>
            <br></br>
            <br></br>

           {contenido}

        </>
    )
}

export default MisPedidos;