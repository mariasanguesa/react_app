import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import ProductoCarrito from '../Components/ProductoCarrito';
import DBCartContext from '../store/DBCartContext';

const ProductosCarrito = (props) => {

    const [productos, setProductos] = useState([])
    const cartContext = useContext(DBCartContext).url;

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
    });

    let contenido = "";

    if (productos.length > 0) {
        contenido = <div>
            {productos[0].comprados.map((elemento) => {
                return (
                    <ProductoCarrito añadirCarrito={props.añadirCarrito} key={elemento.idProducto} producto={elemento} />
                )
            })}

        </div>
    }else{
        contenido = "El carrito está vacío";
    }

    return (
        <>
            {contenido}
        </>
    )
}

export default ProductosCarrito;
