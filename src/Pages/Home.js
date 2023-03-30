import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Image} from "react-bootstrap";
import img from "../images/slide1.png";
import img2 from "../images/slide2.png";
import img3 from "../images/slide3.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = (props) => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <Container>
            <Row style={{marginTop:"10px"}}>
              <Col>
                <Image src={img} style={{marginLeft:"200px"}}/> 
              </Col>
              <Col style={{backgroundColor:"#e5cae1", marginLeft:"40px", maxWidth:"362px", height:"353px", justifyContent:"left"}}>
                   <h3 style={{marginTop:"80px"}}>Pide 2 cajas y</h3>
                   <h1 style={{fontWeight:"bold"}}>AHORRA UN 20%</h1>
                   <Button variant="outline-dark" style={{marginTop:"20px"}}>Comprar Ahora</Button>
              </Col>
            </Row>
          </Container> 
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row style={{marginTop:"10px"}}>
            <Col style={{backgroundColor:"#fac6f3", marginLeft:"40px", maxWidth:"362px", height:"353px", justifyContent:"left"}}>
                   <h3 style={{marginTop:"80px"}}>Prueba el</h3>
                   <h1 style={{fontWeight:"bold"}}>NUEVO SABOR</h1>
                   <Button variant="outline-dark" style={{marginTop:"20px"}}>Comprar Ahora</Button>
              </Col>
              <Col>
                <Image src={img2} style={{marginLeft:"200px"}}/> 
              </Col>
            </Row>
          </Container> 
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row style={{marginTop:"10px"}}>
              <Col style={{backgroundColor:"#92f3b4", marginLeft:"80px" , justifyContent:"right"}}>
                
                <h1 style={{fontWeight:"bold",marginTop:"80px"}}>COME BIEN</h1>
                   <h1 style={{fontWeight:"bold"}}>VIVE BIEN</h1>
                   <Button variant="outline-dark" style={{marginTop:"20px"}}>Añadir al carrito</Button>
                
              </Col>
              <Col>
                <Image src={img3} style={{marginLeft:"200px"}}/> 
              </Col>
            </Row>
          </Container> 
        </Carousel.Item>
      </Carousel>
    );
}

export default Home;