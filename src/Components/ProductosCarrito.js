import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import ProductoCarrito from '../Components/ProductoCarrito';
import DBCartContext from '../store/DBCartContext';
import DBProductosContext from '../store/DBProductosContext';

const ProductosCarrito = (props) => {

    const [productos, setProductos] = useState([]);
    const cartContext = useContext(DBCartContext).url;
    const productosContext = useContext(DBProductosContext).url;

    const [productosTienda, setProductosTienda] = useState([])

    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() => {
        axios.get(cartContext)
            .then((response) => {
                let arrayCarrito = [];
                for (let id in response.data) {
                    arrayCarrito.push({
                        id: id,
                        email: response.data[id].email,
                        comprados: response.data[id].comprados,
                    })
                }
                let copiaProductos = [...arrayCarrito];
                copiaProductos = copiaProductos.filter((elemento) => {
                    // Si se cumple condición lo deja en el array
                    return elemento.email === props.loginData.email;
                })

                setProductos(copiaProductos);
            }

            ).catch(
                (error) => {
                    alert('Se ha producido un error.');
                }
            )

    }, []);

    useEffect(() => {
        axios.get(productosContext)
            .then((response) => {
                let arrayCarrito2 = [];
                for (let id in response.data) {
                    arrayCarrito2.push({
                        id: id,
                        foto: response.data[id].src,
                        nombre: response.data[id].nombre,
                        precio: response.data[id].precio,
                    })
                    setProductosTienda(arrayCarrito2);
                }
            }

            ).catch(
                (error) => {
                }
            )
    }, []);

    let contenido = "";

    if (productos.length > 0) {
        if (productos[0].comprados) {
            let arrayComprados = [];
            for (let num in productos[0].comprados) {
                if (productos[0].comprados[num]) {
                    for (let y in productosTienda) {
                        if (productosTienda[y].id === productos[0].comprados[num].idProducto) {
                            arrayComprados.push({
                                productos: productos[0].comprados[num],
                                nombre: productosTienda[y].nombre,
                                precio: productosTienda[y].precio,
                                foto: productosTienda[y].foto

                            })

                        }
                    }
                }
                contenido = <div>{
                    arrayComprados.map((elemento) => {
                        return (<ProductoCarrito precioTotal={precioTotal} añadirCarrito={props.añadirCarrito} quitarCarrito={props.quitarCarrito} key={elemento.productos.idProducto} producto={elemento.productos} nombre={elemento.nombre} foto={elemento.foto} precio={elemento.precio} />)
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
