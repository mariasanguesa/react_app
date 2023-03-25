import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import img from "../images/barra1.png";
import img2 from "../images/barra2.png";
import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import DBProductosContext from '../store/DBProductosContext';
import ProductoHome from "../Components/ProductoHome";


const Home = (props) => {

    const [listado, setListado] = useState([])
    const productContext = useContext(DBProductosContext).url;

    useEffect(() => {
        axios.get(productContext)
            .then((response) => {
                let arrayProductos = [];
                for (let key in response.data) {
                    console.log(key)
                    arrayProductos.push({
                        id:key,
                        nombre: response.data[key].nombre,
                        precio: response.data[key].precio,
                        src: response.data[key].src,
                    })
                }
                setListado(arrayProductos)
                console.log(arrayProductos);
            }

            ).catch(
                (error) => {
                    alert('se ha producido un error');
                }
            )
    }, []);
    let contenido = "";

    if (listado.length > 0) {
        console.log(listado);
        contenido = <div>
            {listado.map((elemento) => {
                console.log(elemento.nombre);
                return(
                    <>
                        <ProductoHome key={elemento.nombre} listado={elemento}/>
                    </>
                )
                
            })}
             </div>
    }

 
}

export default Home;