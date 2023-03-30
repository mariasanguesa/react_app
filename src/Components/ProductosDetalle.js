import ProductoDetalle from '../Components/ProductoDetalle';
import React from 'react';

const ProductosDetalle = (props) => {

    let contenido = "";

    let arrayComprados = [];

    if (props.productos.length > 0) {
        for (let id in props.productos) {
            if (props.productos[id].email === props.loginData.email) {
                if (props.productos[id].comprados) {
                    for (let num in props.productos[id].comprados) {
                        if (props.productos[id].comprados[num]) {
                            for (let y in props.productosTienda) {
                                if (props.productosTienda[y].id === props.productos[id].comprados[num].idProducto) {
                                    arrayComprados.push({
                                        productos: props.productos[id].comprados[num],
                                        nombre: props.productosTienda[y].nombre,
                                        precio: props.productosTienda[y].precio,
                                        foto: props.productosTienda[y].foto

                                    })
                                }
                            }
                        }
                        contenido = <div>{
                            arrayComprados.map((elemento) => {
                                return (<ProductoDetalle key={elemento.productos.idProducto} producto={elemento.productos} nombre={elemento.nombre} foto={elemento.foto} precio={elemento.precio} />)
                            })
                        }</div>
                    }

                }
                else {
                    contenido = "El carrito está vacío";
                }
            }
        }
    }


    return (
        <>
            {contenido}
        </>
    )
}

export default ProductosDetalle;
