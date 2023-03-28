import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

const ProductoHome = (props) => {

    const añadirHandler = () => {

        let copiaProductos = props.productos;
        copiaProductos = copiaProductos.filter((elemento) => {
            // Si se cumple condición lo deja en el array
            return elemento.email === props.loginData.email;
        })

        if (copiaProductos[0].comprados) {
            let arrayComprados = [];
            Object.values(copiaProductos[0].comprados).map((elemento) => {
                arrayComprados.push(elemento.idProducto);
            })
            
            if(arrayComprados.includes(props.producto)){
                for (let i in copiaProductos[0].comprados) {
                    if (copiaProductos[0].comprados[i].idProducto === props.producto) {
                        props.añadirCarrito(props.producto, copiaProductos[0].comprados[i].numProducto, "add");
                    }
                }
            }else{
                props.añadirCarrito(props.producto,-1, "add");

            }  
            
        } else {

            props.añadirCarrito(props.producto, 0, "add");
        }


    }

    return (
        <>
            <Col md={4} >
                <Card style={{ marginTop: "5px", marginBottom: "5px" }}>
                    <Card.Img variant="top" src={props.foto} className="img-fluid" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>{props.nombre}</Card.Title>
                        <Card.Text style={{ textAlign: "center", fontWeight: "500" }}>
                            {props.precio + '$'}
                        </Card.Text>
                        <Button variant="dark" style={{ marginLeft: "85px" }} onClick={añadirHandler}>Añadir al carrito</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )

}
export default ProductoHome;