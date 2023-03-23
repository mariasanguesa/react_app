import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ProductosCarrito from "../Components/ProductosCarrito";
import { Link } from 'react-router-dom';
import TotalPedido from "../Components/TotalPedido";

import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import DBCartContext from '../store/DBCartContext';
import DBProductosContext from '../store/DBProductosContext';

const Carrito = (props) => {

    const [productos, setProductos] = useState([]);
    const cartContext = useContext(DBCartContext).url;
    const productosContext = useContext(DBProductosContext).url;

    const [productosTienda, setProductosTienda] = useState([])

    useEffect(() => {
        axios.get(cartContext)
            .then((response) => {
                let arrayCarrito = [];
                for (let id in response.data) {
                    arrayCarrito.push({
                        id: id,
                        email: response.data[id].email,
                        comprados: response.data[id].comprados,
                    })
                }
                let copiaProductos = [...arrayCarrito];
                copiaProductos = copiaProductos.filter((elemento) => {
                    // Si se cumple condición lo deja en el array
                    return elemento.email === props.loginData.email;
                })

                setProductos(copiaProductos);
            }

            ).catch(
                (error) => {
                    alert('Se ha producido un error.');
                }
            )
    });
    useEffect(() => {
        axios.get(productosContext)
            .then((response) => {
                let arrayCarrito2 = [];
                for (let id in response.data) {
                    arrayCarrito2.push({
                        id: id,
                        foto: response.data[id].src,
                        nombre: response.data[id].nombre,
                        precio: response.data[id].precio,
                    })
                    setProductosTienda(arrayCarrito2);
                }
            }

            ).catch(
                (error) => {
                }
            )
    }, []);

    let contenido = <></>;

    if (props.loginData.idToken) {
        contenido = <Container className="gap-3">
            <Row className="justify-content-md-center  mx-auto" >
                <Col md={7}>
                    <div className="border-bottom">
                        <p><b>Mi carrito</b></p>
                    </div>
                    <div >
                        <ProductosCarrito productos={productos} productosTienda={productosTienda} añadirCarrito={props.añadirCarrito} quitarCarrito={props.quitarCarrito} />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="border-bottom">
                        <p ><b>Resumen del pedido</b></p>
                    </div>
                    <TotalPedido productos={productos} productosTienda={productosTienda} />

                    <div className="text-center align-items-center justify-content-center">
                        <Button variant="outline-dark" as={Link} to="/detallesPedido">Realizar pedido</Button>
                    </div>
                </Col>
            </Row>
        </Container>;

    }
    else {
        contenido = "Para acceder al carrito hace falta hacer login";
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

export default Carrito;