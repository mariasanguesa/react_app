import Accordion from 'react-bootstrap/Accordion';
import ProductoPedido from './ProductoPedido';
import { useEffect, useState, useContext } from 'react';
import DBPedidoContext from '../store/DBPedidosContext';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import React from 'react';

const ProductosPedido = (props) => {

    const [productos, setProductos] = useState([]);
    const pedidoContext = useContext(DBPedidoContext).url;

    useEffect(() => {
        axios.get(pedidoContext)
            .then((response) => {
                let arrayPedidos = [];
                for (let id in response.data) {
                    arrayPedidos.push({
                        id: id,
                        direccion: response.data[id].direccion,
                        poblacion: response.data[id].poblacion,
                        apellidos: response.data[id].apellidos,
                        nombre: response.data[id].nombre,
                        email: response.data[id].email,
                        comprados: response.data[id].productos,
                    })
                }
                let copiaProductos = [...arrayPedidos];
                copiaProductos = copiaProductos.filter((elemento) => {
                    // Si se cumple condición lo deja en el array
                    return elemento.email === props.loginData.email;
                })
                setProductos(copiaProductos);
            })
    }, []);

    const eliminarHandler = (event) => {

        if (window.confirm('¿Estás seguro de querer eliminar el pedido?')) {
            axios.delete('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + event.target.id + '.json?auth=' + props.loginData.idToken)
                .then((response) => {

                })
                .catch((error) => {
                    alert('No se ha podido eliminar el producto de la base de datos.');
                })
            let copiaProductos2 = [...productos];
            copiaProductos2 = copiaProductos2.filter((elemento) => {
                // Si se cumple condición lo deja en el array
                return elemento.id !== event.target.id;
            })
            setProductos(copiaProductos2);
        }


    }

    let contenido = [];

    for (let x in productos) {
        if (productos[x]) {
            if (productos[x].comprados) {
                let arrayComprados = [];
                let productosPedido = [];
                let arrayFinal = [];
                for (let id in productos[x].comprados) {
                    for (let key in props.productosTienda) {
                        if (props.productosTienda[key].id === productos[x].comprados[id].idProducto) {
                            productosPedido.push({
                                id: productos[x].id + productos[x].comprados[id].idProducto,
                                idProducto: productos[x].comprados[id].idProducto,
                                numProducto: productos[x].comprados[id].numProducto,
                                nombre: props.productosTienda[key].nombre,
                                foto: props.productosTienda[key].foto,
                                precio: props.productosTienda[key].precio,
                            })

                        }
                    }
                }
                arrayComprados.push({
                    productos: productosPedido,
                })

                arrayFinal = [...arrayComprados[0].productos];


                contenido.push(<div><Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Número de pedido: {productos[x].id}</Accordion.Header>
                        <Accordion.Body>
                            {
                                arrayFinal.map((elemento) => {
                                    return (
                                        <ProductoPedido key={elemento.id} producto={elemento} />
                                    )
                                })
                            }
                            <div className='mt-3'>
                                <p>Direccion de envío: {productos[x].direccion}, {productos[x].poblacion}</p>
                                <p>Persona de contacto: {productos[x].nombre}, {productos[x].apellidos}</p>
                                <ProgressBar animated now={35} />
                                <p style={{ textAlign: "center" }}><i>El pedido está en camino</i></p>
                            </div>
                            <Button id={productos[x].id} size="sm" variant="dark" onClick={eliminarHandler} >Eliminar pedido</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                </div>)
            }
        }
    }
    return (
        <>
            {contenido}
        </>
    )
}

export default ProductosPedido;
