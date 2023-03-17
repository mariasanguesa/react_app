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
                for (let key in response.data) {
                    console.log(key)
                    arrayCarrito.push({
                        id:key,
                        email: response.data[key].email,
                        comprados: response.data[key].productos,
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
                return(
                    <>
                        <ProductoCarrito key={productos.id} producto={elemento}/>
                    </>
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
