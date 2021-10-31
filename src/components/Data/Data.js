import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Show from '../Show/Show';

const Data = () => {
    const[cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div>
            <Container>
                <h3 className="demo">SERVICE DEMO ITEM:</h3>
            <Row xs={1} md={3} className="g-4">
              {
              cards.map(card=> <Show key={card._id} cards={card}></Show>)
              }
           </Row>
            </Container>
        </div>
    );
};

export default Data;