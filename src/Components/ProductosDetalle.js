import ProductoDetalle from '../Components/ProductoDetalle';

const ProductosDetalle= (props) => {

    let contenido = "";

    let arrayComprados = [];

    if (props.productos.length > 0) {
        if (props.productos[0].comprados) {
            for (let num in props.productos[0].comprados) {
                if (props.productos[0].comprados[num]) {
                    for (let y in props.productosTienda) {
                        if (props.productosTienda[y].id === props.productos[0].comprados[num].idProducto) {
                            arrayComprados.push({
                                productos: props.productos[0].comprados[num],
                                nombre: props.productosTienda[y].nombre,
                                precio: props.productosTienda[y].precio,
                                foto: props.productosTienda[y].foto

                            })
                        }
                    }
                }
                contenido = <div>{
                    arrayComprados.map((elemento) => {
                        return (<ProductoDetalle añadirCarrito={props.añadirCarrito} quitarCarrito={props.quitarCarrito} key={elemento.productos.idProducto} producto={elemento.productos} nombre={elemento.nombre} foto={elemento.foto} precio={elemento.precio} />)
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

export default ProductosDetalle;
