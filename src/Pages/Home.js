import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Image, Row} from "react-bootstrap";
import img from "../images/slide1.png";
import img2 from "../images/slide2.png";
import img3 from "../images/slide3.png";

const Home = () => {
    return (
      <Container className="container-md">
        <Row>
        <Carousel style={{maxHeight:"440px"}} interval={2000}>
        <Carousel.Item>
        <div className="d-flex justify-content-md-between">
          <div className="p-2"><Image src={img} width="450px"/></div>
          <div className="p-2" style={{marginRight:"20%",color:"#24be5a"}}><h3 style={{marginTop:"12%"}}>Pide 2 cajas y</h3>
                   <h1 style={{fontWeight:"bold"}}>AHORRA UN 20%</h1>
                   <Button href="/tienda" variant="dark" style={{marginTop:"5%"}}>Comprar Ahora</Button></div>
        </div>
          
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex justify-content-md-between">
          <div className="p-2"><Image src={img2}  width="450px"/></div>
          <div className="p-2" style={{marginRight:"25%",color:"#dfdf04"}}><h3 style={{marginTop:"12%"}}>Prueba el</h3>
                   <h1 style={{fontWeight:"bold"}}>NUEVO SABOR</h1>
                   <Button href="/tienda" variant="dark" style={{marginTop:"5%"}}>Comprar Ahora</Button></div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex justify-content-md-between" style={{maxHeight:"435px"}}>
          <div className="p-2"><Image src={img3}  width="450px"/></div>
          <div className="p-2" style={{marginRight:"33%", color:"#d30079"}}><h3 style={{marginTop:"17%"}}>¡COME BIEN!</h3>
                   <h1 style={{fontWeight:"bold"}}>¡VIVE BIEN!</h1>
                   <Button href="/tienda" variant="dark" style={{marginTop:"8%"}}>Comprar Ahora</Button></div>
        </div>
        </Carousel.Item>
      </Carousel>
        </Row>
      </Container>


    );
}

export default Home;