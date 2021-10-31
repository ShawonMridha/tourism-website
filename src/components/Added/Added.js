import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Added = (props) => {
    const{img, name, description, price}=props.newAdd;
    return (
        <div>
            <Col>
               <Card className="size">
               <Card.Img className="card" variant="top" src={img} />
               <Card.Body>
              <Card.Title>Place: {name}</Card.Title>
               <Card.Text>
              {description}
              </Card.Text>
              <h3>Tour Pakage: {price}</h3>
             </Card.Body>
             </Card>
      
        </Col>
        </div>
    );
};

export default Added;