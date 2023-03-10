import Carrito from "./Pages/Carrito";
import Home from "./Pages/Home";
import { Route, Routes } from 'react-router-dom';
import ErrorPage from "./Pages/ErrorPage";
import Header from "./UI/Header";
import Tienda from "./Pages/Tienda";
import Login from "./Pages/Login";
import DBImageContext from './store/DBImageContext'
import {useState} from 'react';

function App() {

  const [url, setUrl] = useState('https://react-app-1c2eb-default-rtdb.europe-west1.firebasedatabase.app/imagenes.json');

  return (
    <div>
      <DBImageContext.Provider value={{  url:url }}></DBImageContext.Provider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
        <Route path="/tienda" element={<Tienda />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
