import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { Bag, CheckCircle} from 'react-bootstrap-icons';
import '../App.css';
import { useState, useEffect } from 'react';

const ProductoHome = (props) => {

    const [buttonTextState, setButtonTextState] = useState(true);
    const [buttonText, setButtonText] = useState(<><Bag style={{ marginBottom: "5px", marginRight: "2px" }}/> Añadir al carrito</>); 
    
    // Cada vez que buttonText cambie de valor se ejecutará la función useEffect
    useEffect(() => {
        // Para volver al estado inicial
            setTimeout(() => {
                setButtonText(<><Bag style={{ marginBottom: "5px", marginRight: "2px" }}/> Añadir al carrito</>);
                setButtonTextState(true);
            }, [2800])
    }, [buttonText])

    const añadirHandler = () => {

        setButtonTextState(false);
        setButtonText(<><CheckCircle style={{ marginBottom: "5px", marginRight: "2px" }}/> Producto añadido</>);

        if (props.loginData.email) {
            let copiaProductos = props.productos;
            copiaProductos = copiaProductos.filter((elemento) => {
                // Si se cumple condición lo deja en el array
                return elemento.email === props.loginData.email;
            })
            
            if (copiaProductos[0].comprados) {
                let arrayComprados = [];
                Object.values(copiaProductos[0].comprados).map((elemento) => {
                    return (arrayComprados.push(elemento.idProducto))
                })

                if (arrayComprados.includes(props.producto)) {
                    for (let i in copiaProductos[0].comprados) {
                        if (copiaProductos[0].comprados[i].idProducto === props.producto) {
                            props.añadirCarrito(props.producto, copiaProductos[0].comprados[i].numProducto, "add");
                        }
                    }
                } else {
                    props.añadirCarrito(props.producto, -1, "add");
                }

            } else {
                props.añadirCarrito(props.producto, 0, "add");
            }
        } else {
            alert('Hace falta hacer login para poder añadir productos al carrito.');
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
                            {props.precio + ' €'}
                        </Card.Text>
                        <div className="text-center align-items-center justify-content-center" >
                            <Button id="button-añadirCarrito" variant={`${buttonTextState ? 'dark':'outline-success'}`} onClick={añadirHandler}> {buttonText} </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )

}
export default ProductoHome;