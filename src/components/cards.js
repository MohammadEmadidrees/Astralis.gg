import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Card1 from "../../src/card1.jpg"
import Card2 from "../../src/card2.jpg"
import Card3 from "../../src/card3.jpg"
import '../../src/App.css';
import Aos from 'aos';
import "aos/dist/aos.css";
const Cards=() =>{
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    
  return (
    <><><div className="News" data-aos="fade-left">NEWS</div>
    
    <CardGroup className='cards' data-aos="fade-left">
          <Card className="Breake">
              <Card.Img variant="top" src={Card1} className="imgs"/>
              <Card.Body>
                  <Card.Title>The only overview you need</Card.Title>
                  <button className='btn'>Company</button>
              </Card.Body>
              <Card.Footer className='footer'>
                  <small className="text-muted">FEBRUARY 22, 2023</small>
              </Card.Footer>
          </Card>
          <Card className='Breake'>
              <Card.Img variant="top" src={Card2} className="imgs" />
              <Card.Body>
                  <Card.Title>Astralis Rainbow 6 ends</Card.Title>
                  <button className='btn'>Rainbow Six</button>
              </Card.Body>
              <Card.Footer className='footer'>
                  <small className="text-muted">FEBRUARY 22, 2023</small>
              </Card.Footer>
          </Card>
          <Card className='Breake'>
              <Card.Img variant="top" src={Card3} className="imgs" />
              <Card.Body>
                  <Card.Title>One Step Closer to Paris We Are</Card.Title>
                  <button className='btn'>Counter Strike</button>
              </Card.Body>
              <Card.Footer className='footer'>
                  <small className="text-muted">FEBRUARY 22, 2023</small>
              </Card.Footer>
          </Card>
      </CardGroup></>
      <div className="divv">
        <button className="morenews">MORE NEWS</button>
      </div>
      </>
  );
}

export default Cards;