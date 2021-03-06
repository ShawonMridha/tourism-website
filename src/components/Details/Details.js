import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

import './Details.css'

const Details = () => {
    const{user} = useAuth();
    const{id} = useParams();
    const[service, setService] = useState({})

    useEffect(()=>{
        fetch(`https://shocking-phantom-73762.herokuapp.com/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const place = data;
        place.neme = service;
        // console.log(place);
        fetch(`https://shocking-phantom-73762.herokuapp.com/tourist`,{
           method:'post',
           headers:{
             'content-type':'application/json'
           },
           body:JSON.stringify(data),
        })
        .then(res =>res.json())
        .then(result=>{
          // console.log(result);
          alert('Submited successfully');
          reset()
        })
    }
    
    return (
        <>
          <h3>{service.description}</h3>
          <h4>Pakage Tk: {service.pakage}</h4>
          <img className="w-25 mb-5" src={service.img} alt="" />
            <div className="add-service">
              <form className="md={2} sm={1}" onSubmit={handleSubmit(onSubmit)}>
              <input className="w-75"  {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} placeholder="name" required/>
              <input className="w-75" type="email" {...register("email")} defaultValue={user.email} placeholder="email" required />
              <input className="w-75" type="number" {...register("number")} placeholder="number" required />
              <textarea className="w-75" {...register("description")} placeholder="Address" required/>
              <input className="w-75" type="submit" />
            </form>
          </div>
        </>
    );
};

export default Details;