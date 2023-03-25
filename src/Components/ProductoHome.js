import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import img2 from "../images/barra2.png";

const ProductoHome = (props) => {

    return (
        <>
           
                <Row>
                <Col md={3} >
                    <Card style={{marginTop:"5px"}}>
                        <Card.Img variant="top" src={img2} className="img-fluid"/>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Pack Barras Tropical</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>
                                    300$
                            </Card.Text>
                            <Button variant="primary" style={{marginLeft:"45px"}}>Añadir al carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            
        </>
    )

}
export default ProductoHome;