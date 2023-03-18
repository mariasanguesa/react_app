import Carrito from "./Pages/Carrito";
import Home from "./Pages/Home";
import { Route, Routes } from 'react-router-dom';
import ErrorPage from "./Pages/ErrorPage";
import Header from "./UI/Header";
import Tienda from "./Pages/Tienda";
import Login from "./Pages/Login";
import DBImageContext from './store/DBImageContext';
import DBCartContext from './store/DBCartContext';
import {useState, useEffect} from 'react';
import AutContext from './store/AutContext'

function App() {


  const [urlImage, setUrlImage] = useState('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/imagenes.json');
  const [urlCart, setUrlCart] = useState('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/carrito.json');

  const [login, setLogin] = useState(false);
  // Para el token
  const [loginData, setLoginData] = useState({});

  const actualizarLogin = (login, loginData) => {
    setLogin(login);
    setLoginData(loginData);
    localStorage.setItem('login', login);
    localStorage.setItem('loginData', loginData.idToken);
    localStorage.setItem('loginEmail',loginData.email);
  }

  useEffect(() => {
    if (localStorage.getItem('login') === 'true') {
      setLogin(true);
      setLoginData({idToken:localStorage.getItem('loginData'),email:localStorage.getItem('loginEmail')});
    }
  }, []);
  

  return (
    <div>
      <AutContext.Provider value={{ login: login}}>
      <DBImageContext.Provider value={{  url:urlImage }}></DBImageContext.Provider>
      <DBCartContext.Provider value={{  url:urlCart }}></DBCartContext.Provider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carrito" element={<Carrito loginData={loginData}/>}></Route>
        <Route path="/tienda" element={<Tienda />}></Route>
        <Route path="/login" element={<Login actualizarLogin={actualizarLogin}/>}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </AutContext.Provider>
    </div>
  );
}

export default App;
