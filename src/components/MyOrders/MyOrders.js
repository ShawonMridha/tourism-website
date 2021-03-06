import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import OrderShow from '../OrderShow/OrderShow';

const MyOrders = () => {
    const{user}=useAuth();
    const[order, setOrder] = useState([])
    useEffect(()=>{
        fetch('https://shocking-phantom-73762.herokuapp.com/tourist')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    console.log(order)
    const single = order.filter(getItem=>getItem.email===user.email);
    const handleDelete = id =>{
        const url = `https://shocking-phantom-73762.herokuapp.com/tourist/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                window.confirm('you want to delete???')
            const remaining = order.filter(service =>service._id !==id);
            setOrder(remaining);
            }
            
        })
    }
    return (
        
        <div>
            <Container>
            <Row xs={1} md={3} className="g-4">
              {
              single.map(card=> <OrderShow key={card._id} cards={card}
                handleDelete={handleDelete}
              >

              </OrderShow>)
              }
           </Row>
            </Container>
        </div>
    );
};

export default MyOrders;


// order.map(mamulibepar=> <div key={mamulibepar._id}>
                    
//     <Row md={3}>
//        <Col>
//        <img src={mamulibepar.neme.img} alt="" />
//        </Col>
//     </Row>


// </div>)