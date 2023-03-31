import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductoHome from "../Components/ProductoHome";
import { useState } from 'react';
import '../App.css';
import { Search } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';

const Tienda = (props) => {

    let contenido = "";

    const [busqueda, setBusqueda] = useState("");
    const [productosFiltrados, setProductosFiltrados] = useState([]);


    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        let arrayFiltrados = [];
        props.productosTienda.filter((elemento) => {
            if (elemento.nombre.toUpperCase().includes(terminoBusqueda.toUpperCase())
            ) {
                arrayFiltrados.push({
                    filtro: elemento
                })
            }
            setProductosFiltrados(arrayFiltrados);
        });
    }

    if (productosFiltrados.length > 1) {
        contenido = <Row>{
            productosFiltrados.map((elemento) => {
                return (
                    <ProductoHome loginData={props.loginData} productos={props.productos} key={elemento.filtro.nombre} nombre={elemento.filtro.nombre} foto={elemento.filtro.foto} precio={elemento.filtro.precio} producto={elemento.filtro.id} añadirCarrito={props.añadirCarrito} />
                )
            })
        }
        </Row>

    } else {
        if (busqueda) {
            contenido = <div className="text-center align-items-center justify-content-center mt-5 mb-5">¡Lo sentimos! No hay coincidencias con tu búsqueda.</div>;
        } else {
            contenido = <Row>{
                props.productosTienda.map((elemento) => {
                    return (
                        <ProductoHome loginData={props.loginData} productos={props.productos} key={elemento.nombre} nombre={elemento.nombre} foto={elemento.foto} precio={elemento.precio} producto={elemento.id} añadirCarrito={props.añadirCarrito} />
                    )
                })
            }
            </Row>
        }

    }



    return (
        <>
            <p style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center", marginTop: "15px" }}>LOS PRODUCTOS</p>

            <div className="App">
                <Container className="text-center align-items-center justify-content-center mt-4 mb-4">
                    <Row className="justify-content-md-center">
                        <Col md="auto" lg="5">
                            <input
                                className="form-control inputBuscar"
                                value={busqueda}
                                placeholder="Búsqueda por nombre de producto"
                                onChange={handleChange}
                            />
                        </Col>
                        <Col xs lg="1">
                            <Search />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    {contenido}
                </Row>
            </Container>
        </>

    )

}


export default Tienda;