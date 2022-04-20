import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
         const [products, setProducts] = useState([]);

         useEffect(()=>{
                  fetch('https://enigmatic-garden-34025.herokuapp.com/other')
                  .then(res => res.json())
                  .then(data => setProducts(data))
         },[])
         return (
                  <div id='shop'>
                  <div className="container my-5">
                  <h2 className="team-heading">Our Products</h2>
                  <div className="row">
                  {
                           products.slice(0, 6).map(product=> <Product
                                    key={product.key}
                                    product={product}
                                     ></Product>)
                  }
                  </div>
                  </div>
                  </div>
         );
};

export default Products;