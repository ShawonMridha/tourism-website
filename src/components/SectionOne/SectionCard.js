import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SectionCard.css'

const SectionCard = (props) => {
    const{img, name}=props.client;
    return (
        <div className="mt-5">
            <Col >
               <Card className="client-size">
               <Card.Img className="card " variant="top" src={img}   />
               <Card.Body>
              <Card.Title>Client Name: {name}</Card.Title>
               <Card.Text>
              </Card.Text>
             </Card.Body>
             </Card>
      
    </Col>
        </div>
    );
};

export default SectionCard;