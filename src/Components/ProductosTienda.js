import React from "react";
import ProductoHome from "../Components/ProductoHome";


const ProductosTienda = (props) => {

    let contenido = <></>;


    let arrayProductos = [];

    if (props.productosTienda.length > 0) {
            for (let producto in props.productosTienda) {
                            arrayProductos.push({
                                id: producto,
                                nombre: props.productosTienda[producto].nombre,
                                precio: props.productosTienda[producto].precio,
                                foto: props.productosTienda[producto].foto

                            })
                        }
    
                contenido = <div>{
                    arrayProductos.map((elemento) => {
                        return (<ProductoHome  key={elemento.id}  nombre={elemento.nombre} foto={elemento.foto} precio={elemento.precio} />)
                    })
                }</div>
            }

        }


export default ProductosTienda;