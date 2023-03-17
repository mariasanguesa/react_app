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
                        comprados: response.data[id].productos,
                    })
                }
                setProductos(arrayCarrito);
            }

            ).catch(
                (error) => {
                    alert('se ha producido un error');
                }
            )
    }, []);

    let contenido = "";

    if (productos.length > 0) {
        contenido = <div>
            {productos[0].comprados.map((elemento) => {
                console.log(elemento)
                return (
                    <ProductoCarrito key={elemento.idProducto} producto={elemento} />
                )
            })}

        </div>
    }

    return (
        <>
            {contenido}
        </>
    )
}

export default ProductosCarrito;
