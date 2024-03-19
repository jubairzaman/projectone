import React from 'react'
import NavBar from '../Nav/NavBar'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div>
        <NavBar></NavBar>

        <Container className='margin'>
      <Row >
        <Col >
        <Row className=''>

          <h1 className='poppins-extrabold'>YOUR FEET </h1>
          <h1 className='poppins-extrabold'>DESERVE</h1>
          <h1 className='poppins-extrabold'>THE BEST</h1>

        </Row>
        <Row className=''>

          <h6 className='mr-5 mt-5 poppins-extrabold1 '>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h6>
        </Row>

        <Row className='mt-5 me-5'>

          <Col><Button variant="danger">SHOP NOW</Button></Col>
          <Col><Button variant="light">CATEGORY</Button></Col>
          <Col></Col>
        </Row>

        <Row className='mt-5'>

          <p>Also Avilable On </p>

          <div className='mt-2 display-flex'>
          <img className='iconeImage me-3' src='./images/icon2.png'></img>
          <img className='iconeImage' src='./images/icon1.png'></img>

          </div>

          
        </Row>

     
        
        </Col>
        <Col> 
          <img className='img' src='./images/img1.png'></img>
        </Col>
      </Row>
      
    </Container>
        
      
    </div>
  )
}

export default Home
