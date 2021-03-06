import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionCard from './SectionCard';


const SectionOne = () => {
    const[client, setClient] = useState([]);
    useEffect(()=>{
        fetch('https://shocking-phantom-73762.herokuapp.com/client')
        .then(res=>res.json())
        .then(data=>setClient(data))
    },[])
    return (
        <div>
            <Container>
                <h3 className="text-danger mt-5">Clients:</h3>
            <Row xs={1} md={3} className="g-4">
              {
              client.map(clients=> <SectionCard key={clients._id} client={clients}></SectionCard>)
              }
           </Row>
            </Container>
          
        </div>
    );
};

export default SectionOne;