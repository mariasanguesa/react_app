import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react';

const TotalPedido = (props) => {

    let contenido = "";

    if (props.productos.length > 0) {
        for (let id in props.productos) {
            if (props.productos[id].email === props.loginData.email) {
                if (props.productos[id].comprados) {
                    let suma = Number(0);
                    for (let num in props.productos[id].comprados) {
                        if (props.productos[id].comprados[num]) {
                            for (let y in props.productosTienda) {
                                if (props.productosTienda[y].id === props.productos[id].comprados[num].idProducto) {
                                    let precioProducto = Number(props.productos[id].comprados[num].numProducto) * Number(props.productosTienda[y].precio)
                                    suma = Number(suma.toFixed(2)) + Number(precioProducto.toFixed(2));
                                }
                            }
                        }
                    }
                    let gastosEnvio = Number(0);
                    if (suma < 30) {
                        gastosEnvio = Number(3);
                    }

                    let totalPagar = suma + gastosEnvio;

                    contenido = <><div className="border-bottom">
                        <Container>
                            <Row>
                                <p>Total del pedido:  {Number(suma.toFixed(2))}€</p>
                            </Row>
                            <Row>
                                <p>Gastos de envío: {Number(gastosEnvio.toFixed(2))}€</p>
                            </Row>
                        </Container>
                    </div>
                        <div className="border-bottom">
                            <p>Total a pagar: {Number(totalPagar.toFixed(2))}€</p>
                        </div>
                        <br></br>
                    </>

                }else {
                    contenido = <><div className="border-bottom">
                        <Container>
                            <Row>
                                <p>Total del pedido: 0€</p>
                            </Row>
                            <Row>
                                <p>Gastos de envío: 0€</p>
                            </Row>
                        </Container>
                    </div>
                        <div className="border-bottom">
                            <p>Total a pagar: 0€</p>
                        </div>
                        <br></br>
                    </>
            }
        }
        
    }
}
return (
    <>
        {contenido}
    </>


)
}

export default TotalPedido;