import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Added = (props) => {
    const{img, name, description}=props.newAdd;
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
             </Card.Body>
             </Card>
      
        </Col>
        </div>
    );
};

export default Added;