import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    // const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://enigmatic-garden-34025.herokuapp.com/other",data)
    .then(res => {
      if (res.data.insertedId) {
          alert('added successfully');
          reset();
      }
    })
  }
    return (
        <div>
        <div>
          <h1 className="mt-5 text-center text-danger">Please Add Product</h1>
          <div className=" w-25 m-auto mt-5">
            <div className=" ">
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name")}
                    placeholder="Name"
                    className="p-2 m-2 w-100 input-field"
                  />
  
                  <input
                    {...register("description")}
                    placeholder="Description"
                    className="p-2 m-2 w-100 input-field"
                  />
  
                  <input
                    {...register("image", { required: true })}
                    placeholder="Image Link"
                    className="p-2 m-2 w-100 input-field"
                  />
  
                  <input
                    {...register("price", { required: true })}
                    placeholder="Price"
                    type="number"
                    className="p-2 m-2 w-100 input-field"
                  />
  
                  <input
                    {...register("category", { required: true })}
                    placeholder="category"
                    className="p-2 m-2 w-100 input-field"
                  />
                  <input
                    {...register("tags", { required: true })}
                    placeholder="tags"
                    className="p-2 m-2 w-100 input-field"
                  />
                  
  
                 
                  <br />
  
                  {errors.exampleRequired && <span>This field is required</span>}
  
                  <input
                    type="submit"
                    value="Add"
                    className="button button-contactForm boxed-btn w-50"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;