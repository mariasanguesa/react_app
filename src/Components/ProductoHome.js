import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

const ProductoHome = (props) => {

    const añadirHandler = () => {
        props.añadirCarrito(props.producto, 1, "new");
    }

    return (
        <>
                <Col md={4} >
                    <Card style={{marginTop:"5px", marginBottom:"5px"}}>
                        <Card.Img variant="top" src={props.foto} className="img-fluid"/>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center", fontWeight:"bold"}}>{props.nombre}</Card.Title>
                            <Card.Text style={{textAlign:"center", fontWeight:"500"}}>
                            {props.precio + '$'}
                            </Card.Text>
                            <Button variant="dark" style={{marginLeft:"85px"}} onClick={añadirHandler}>Añadir al carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
        </>
    )

}
export default ProductoHome;