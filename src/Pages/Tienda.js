import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductoHome from "../Components/ProductoHome";


const Tienda = (props) => {
    let contenido = "";

    if (Object.keys(props.productosTienda).length > 1) {
        for (let i = 0; i < Object.keys(props.productosTienda).length; i++) {
            contenido = <Row>{
                Object.values(props.productosTienda).map((elemento) => {
                    return (
                        <ProductoHome key={elemento.nombre} nombre={elemento.nombre} foto={elemento.foto} precio={elemento.precio} producto={elemento.id} añadirCarrito={props.añadirCarrito} />
                    )
                })
            }</Row>
        }

    };



    return (
        <>
            <p style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center", marginTop: "10px" }}>LOS PRODUCTOS</p>
            <Container>
                <Row>
                    {contenido}
                </Row>
            </Container>

        </>
    )
}

export default Tienda;