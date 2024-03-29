import Carrito from "./Pages/Carrito";
import Home from "./Pages/Home";
import { Route, Routes } from 'react-router-dom';
import ErrorPage from "./Pages/ErrorPage";
import Header from "./UI/Header";
import Tienda from "./Pages/Tienda";
import Login from "./Pages/Login";
import DBImageContext from './store/DBImageContext';
import DBCartContext from './store/DBCartContext';
import { useState, useEffect } from 'react';
import AutContext from './store/AutContext'
import axios from "axios";
import MisPedidos from "./Pages/MisPedidos";
import ConfirmacionPedido from "./Pages/ConfirmacionPedido";
import DetallesPedido from "./Pages/DetallesPedido";
import Agradecimiento from "./Pages/Agradecimiento";
import DBProductosContext from './store/DBProductosContext';
import React from 'react';
import Registro from "./Pages/Registro";

function App() {


  const [urlImage, setUrlImage] = useState('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/imagenes.json');
  const [urlCart, setUrlCart] = useState('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/carrito.json');
  const [urlAut, setAut] = useState('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz2len4LT2BmdNFZEQqzUF1j3hB-xtUsw');
  const [urlProductos, setUrlProductos] = useState('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/productos.json');

  const [login, setLogin] = useState(false);
  // Para el token
  const [loginData, setLoginData] = useState({});

  const [productos, setProductos] = useState([]);
  const [productosTienda, setProductosTienda] = useState([]);

  const actualizarLogin = (login, loginData) => {
    setLogin(login);
    setLoginData(loginData);
    localStorage.setItem('login', login);
    localStorage.setItem('loginData', loginData.idToken);
    localStorage.setItem('loginEmail', loginData.email);
  }

  // Función para obtener el estado del array que almancena los productos de cada carrito.
  const establecerProductos = () => {
    axios.get(urlCart)
      .then((response) => {
        let arrayCarrito = [];
        for (let id in response.data) {
          arrayCarrito.push({
            id: id,
            email: response.data[id].email,
            comprados: response.data[id].comprados,
          })
        }
        setProductos(arrayCarrito);
      }
      ).catch(
        (error) => {
          alert('Se ha producido un error.');
        }
      )
  }

  useEffect(() => {

    if (localStorage.getItem('login') === 'true') {
      setLogin(true);
      setLoginData({ idToken: localStorage.getItem('loginData'), email: localStorage.getItem('loginEmail') });
    }
  }, []);

  useEffect(() => {
    axios.get(urlProductos)
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

  useEffect(() => {
    establecerProductos();
  }, []);


  const añadirCarrito = (idProducto, numProducto, operation) => {
    // Hay comprados en el carrito pero no del producto que se acaba de pinchar (-1)
    // No hay comprados en el carrito (0)
    if (loginData.idToken) {
      if (numProducto === -1 || numProducto === 0) {
        let carritoNuevo = {
          idProducto: idProducto,
          numProducto: 1,
        }
        for (let id in productos) {
          let idem = id;
          if (productos[id].email === loginData.email) {
            if (productos[id].id) {
              idem = productos[id].id;
            } else {
              idem = id;
            }
            axios.post('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/carrito/' + idem + '/comprados/.json?auth=' + loginData.idToken, carritoNuevo)
              .then((response) => {
                establecerProductos();
              }).catch((event) => {
                alert('No se ha podido añadir el producto.');
              })


          }
        }
      }

      for (let id in productos) {
        let idem = id;
        if (productos[id].email === loginData.email) {
          if (productos[id].comprados) {
            for (let key in productos[id].comprados) {
              if (productos[id].comprados[key]) {
                if (productos[id].comprados[key].idProducto === idProducto) {
                  let newNumProducto = 0;
                  if (operation === "add") {
                    newNumProducto = Number(numProducto) + Number(1);
                  } else if (operation === "sub") {
                    newNumProducto = Number(numProducto) - Number(1);
                  }
                  if (productos[id].id) {
                    idem = productos[id].id;
                  } else {
                    idem = id;
                  }
                  axios.put('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/carrito/' + idem + '/comprados/' + key + '/numProducto.json?auth=' + loginData.idToken, newNumProducto)
                    .then((response) => {
                      establecerProductos();
                    })
                    .catch((error) => {
                      alert('No se ha podido actualizar el producto base de datos');
                    })
                }
              }
            }
          }
        }
      }

    }
    else {
      alert('Debes iniciar sesión para añadir productos al carrito.');
    }
  }

  // Funcion para eliminar productos del carrito
  const quitarCarrito = (idProducto) => {
    for (let id in productos) {
      let idem = id;
      if (productos[id].email === loginData.email) {
        for (let key in productos[id].comprados) {
          if (productos[id].comprados[key]) {
            if (productos[id].comprados[key].idProducto === idProducto) {
              if (productos[id].id) {
                idem = productos[id].id;
              } else {
                idem = id;
              }
              axios.delete('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/carrito/' + idem + '/comprados/' + key + '.json?auth=' + loginData.idToken)
                .then((response) => {
                  establecerProductos();
                })
                .catch((error) => {
                  alert('No se ha podido actualizar el producto');
                })
            }
          }
        }
      }
    }
  }

  return (
    <div>
      <AutContext.Provider value={{ login: login, url: urlAut }}>
        <DBImageContext.Provider value={{ url: urlImage }}></DBImageContext.Provider>
        <DBCartContext.Provider value={{ url: urlCart }}></DBCartContext.Provider>
        <DBProductosContext.Provider value={{ url: urlProductos }}></DBProductosContext.Provider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/carrito" element={<Carrito productos={productos} productosTienda={productosTienda} loginData={loginData} añadirCarrito={añadirCarrito} quitarCarrito={quitarCarrito} />}></Route>
          <Route path="/detallesPedido" element={<DetallesPedido productos={productos} productosTienda={productosTienda} loginData={loginData} />}></Route>
          <Route path="/confirmacionPedido" element={<ConfirmacionPedido loginData={loginData} productos={productos} establecerProductos={establecerProductos} />}></Route>
          <Route path="/tienda" element={<Tienda loginData={loginData} productos={productos} productosTienda={productosTienda} añadirCarrito={añadirCarrito} />}></Route>
          <Route path="/login" element={<Login actualizarLogin={actualizarLogin} loginData={loginData} />}></Route>
          <Route path="login/misPedidos/:id" element={<MisPedidos loginData={loginData} productosTienda={productosTienda} />}></Route>
          <Route path="/agradecimiento" element={<Agradecimiento loginData={loginData} />}></Route>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/registro" element={<Registro actualizarLogin={actualizarLogin} loginData={loginData} productos={productos} />}></Route>
        </Routes>
      </AutContext.Provider>
    </div>
  );
}

export default App;
