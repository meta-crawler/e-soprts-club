import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hook/UseAuth';
import './Review.css';


const Review = () => {
         const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

         const {user} = useAuth();

         const onSubmit = data => {
                  fetch('https://enigmatic-garden-34025.herokuapp.com/reviews',{
                           method:"POST",
                           headers:{'content-Type' : 'application/json'},
                           body: JSON.stringify(data)
                  })
                  .then(res => res.json())
                  .then(result => console.log(result))


                  reset();
         };

         console.log(watch("example")); 
         return (
                  <div className="d-flex justify-content-center">
                        <div className="w-75">
                  <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
                           <h3 className="mt-2 text-white">Add Review</h3>
                  <input defaultValue={user.displayName} {...register("name")} />
                  <input defaultValue={user.email} {...register("email")} />
                  <input placeholder="Leave Stars (1 - 5)" {...register("rating", { required: true })} />
                  <input placeholder="Discription" {...register("discription", { required: true })} />
                  {errors.exampleRequired && <span>This field is required</span>}
                  
                  <input className="fw-bolder fs-5" type="submit" />
                  </form>
                  </div>    
                  </div>
         );
};

export default Review;