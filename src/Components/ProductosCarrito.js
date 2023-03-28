import ProductoCarrito from '../Components/ProductoCarrito';
import { useEffect, useState } from 'react';

const ProductosCarrito = (props) => {

    const [productos, setProductos] = useState([]);

    let contenido = "";

    let arrayComprados = [];

    if (props.productos.length > 0) {

        let copiaProductos = props.productos;
        copiaProductos = copiaProductos.filter((elemento) => {
            // Si se cumple condición lo deja en el array
            return elemento.email === props.loginData.email;
        })

        if (copiaProductos[0].comprados) {
            for (let num in copiaProductos[0].comprados) {
                if (copiaProductos[0].comprados[num]) {
                    for (let y in props.productosTienda) {
                        if (props.productosTienda[y].id === copiaProductos[0].comprados[num].idProducto) {
                            arrayComprados.push({
                                productos: copiaProductos[0].comprados[num],
                                nombre: props.productosTienda[y].nombre,
                                precio: props.productosTienda[y].precio,
                                foto: props.productosTienda[y].foto

                            })
                        }
                    }
                }
                contenido = <div>{
                    arrayComprados.map((elemento) => {
                        return (<ProductoCarrito añadirCarrito={props.añadirCarrito} quitarCarrito={props.quitarCarrito} key={elemento.productos.idProducto} producto={elemento.productos} nombre={elemento.nombre} foto={elemento.foto} precio={elemento.precio} />)
                    })
                }</div>
            }

        }
        else {
            contenido = "El carrito está vacío";
        }
    }


    return (
        <>
            {contenido}
        </>
    )
}

export default ProductosCarrito;
