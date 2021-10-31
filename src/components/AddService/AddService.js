import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
// import './AddService.css'

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
         axios.post('https://shocking-phantom-73762.herokuapp.com/service', data)
        .then(res =>{
            // console.log(res)
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
        
    }
    return (
        <div className="add-service mt-5 mb-5 ">
            <h3 className="text-primary">ADD YOUR SERVICE:</h3>
           <form className="md={2} sm={1}" onSubmit={handleSubmit(onSubmit)}>
             <input className="w-75" {...register("name", { required: true, maxLength: 20 })} placeholder="place name" required/>
             <textarea className="w-75" {...register("description")} placeholder="description" required />
             <input className="w-75" type="number" {...register("price")} placeholder="price" required/>
             <input className="w-75"{...register("img")} placeholder="image url" required/>
             <input className="w-75" type="submit" />
           </form>
        </div>
    );
};

export default AddService;