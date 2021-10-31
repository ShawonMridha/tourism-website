import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Show from '../Show/Show';

const Data = () => {
    const[cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('https://shocking-phantom-73762.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div>
            <Container>
                <h3 className="demo mt-5 text-primary">SERVICE ITEMS:</h3>
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