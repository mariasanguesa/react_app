import { useEffect, useState } from 'react';
import axios from "axios";
import ProductoCarrito from '../Components/ProductoCarrito';

const ProductosCarrito = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        axios.get('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/carrito.json')
            .then((response) => {
                let arrayCarrito = [];
                for (let key in response.data) {
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
                        <ProductoCarrito key={Math.random().toString()} producto={elemento}/>
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
