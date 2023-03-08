import Carrito from "./Pages/Carrito";
import Home from "./Pages/Home";
import { Route, Routes } from 'react-router-dom';
import ErrorPage from "./Pages/ErrorPage";
import Header from "./UI/Header";
import Tienda from "./Pages/Tienda";
import Acerca from "./Pages/Acerca";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
        <Route path="/tienda" element={<Tienda />}></Route>
        <Route path="/acerca" element={<Acerca />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
