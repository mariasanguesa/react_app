import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Image, Row} from "react-bootstrap";
import img from "../images/slide1.png";
import img2 from "../images/slide2.png";
import img3 from "../images/slide3.png";

const Home = (props) => {
    return (
      <Container>
        <Row>
        <Carousel fade style={{maxHeight:"370px"}}>
        <Carousel.Item>
        <div className="d-flex justify-content-sm-between">
          <div className="p-2"><Image src={img} style={{marginLeft:"250px"}}/> </div>
          <div className="p-2" style={{marginRight:"100px", color:"#24be5a"}}><h3 style={{marginTop:"80px"}}>Pide 2 cajas y</h3>
                   <h1 style={{fontWeight:"bold"}}>AHORRA UN 20%</h1>
                   <Button href="/tienda" variant="dark" style={{marginTop:"20px"}}>Comprar Ahora</Button></div>
        </div>
          
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex justify-content-sm-between">
          <div className="p-2"><Image  className="img-fluid" src={img2} style={{marginLeft:"250px"}}/></div>
          <div className="p-2" style={{marginRight:"150px", color:"#dfdf04"}}><h3 style={{marginTop:"80px"}}>Prueba el</h3>
                   <h1 style={{fontWeight:"bold"}}>NUEVO SABOR</h1>
                   <Button href="/tienda" variant="dark" style={{marginTop:"20px"}}>Comprar Ahora</Button></div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex justify-content-sm-between" style={{maxHeight:"360px"}}>
          <div className="p-2"><Image src={img3} style={{marginLeft:"250px"}}/></div>
          <div className="p-2" style={{marginRight:"230px", color:"#d30079"}}><h3 style={{marginTop:"80px"}}>COME BIEN</h3>
                   <h1 style={{fontWeight:"bold"}}>VIVE BIEN</h1>
                   <Button href="/tienda" variant="dark" style={{marginTop:"20px"}}>Comprar Ahora</Button></div>
        </div>
        </Carousel.Item>
      </Carousel>
        </Row>
      </Container>


    );
}

export default Home;