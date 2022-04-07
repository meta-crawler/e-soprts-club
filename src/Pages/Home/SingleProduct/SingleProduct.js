/* eslint-disable eqeqeq */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './SingleProduct.css'
// import { Spinner } from 'react-bootstrap';

const SingleProduct = () => {

  let { id } = useParams();

  const [products, setProducts] = useState([]);
  const [singleProducts, setSingleProducts] = useState({});
  /* const [quantity, setQuantity] = useState(1); */

  useEffect(() => {
    fetch('https://enigmatic-garden-34025.herokuapp.com/other',)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  useEffect(() => {
    const foundProducts = products.find(product => (product.id == id))
    setSingleProducts(foundProducts)
  }, [products, id])

  // Function is called everytime increment button is clicked
 /*  const handleClick1 = () => {
    // Counter state is incremented
    setQuantity(quantity + 1)
  } */

  // Function is called everytime decrement button is clicked
  /* const handleClick2 = () => {
    // Counter state is decremented
    if (quantity <= 1) {
      setQuantity(1)
    }
    else {
      setQuantity(quantity - 1)
    }
  } */

  return (
    <div className="container mt-5">
      <div className="my-auto">
      <div class="card mb-3"  >
  <div class="row g-0">
    <div class="col-md-6 pe-2 d-flex justify-content-center align-items-center">
      <img src={singleProducts?.img} class="w-100 h-75" alt="..." />
    </div>
    <div class="col-md-6 ps-3">
      <div class="card-body">
        <h5 class="product-titel text-dark">{singleProducts?.name}</h5>
        <p class="product-price text-dark text-center">{singleProducts?.price}</p>
        <p class="card-text product-dis1">{singleProducts?.description1}</p>
      </div>
      <div>
                <div className="quantity">
                  <form>
                  <div className="d-flex">
                    <input className="cart-style" size="1" min="1" value="1"/>
                    <button className="cart-btn">Cart</button>
                  </div>
                  </form>
                </div>
              </div>
              <div>
                <p className="text-dark"><span className="text-mute">Category:</span> Sports</p>
                <p className="text-dark"><span className="text-mute">Tags:</span> Cloux, Equipment, Gamer, Headphone</p>
              </div>
    </div>
  </div>
        <div>
          <div>
<button className="des-btn">DESCRIPTION</button> <button className="des-btn2">REVIEWS(0)</button>
          </div>
          <div>
          <h2 className="product-titel text-dark">DESCRIPTION</h2>
          <p className="text-dark product-dis2">Purus non enim praesent elementum facilisis. Neque vitae tempus quam pellentesque. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Rhoncus dolor purus non enim praesent elementum facilisis leo. Quisque non tellus orci ac auctor augue mauris. <span className="fw-bold">Lobortis mattis aliquam faucibus purus. Cras pulvinar mattis nunc sed blandit libero volutpat. Amet porttitor eget dolor morbi non arcu risus.</span> Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Molestie at elementum eu facilisis sed. In aliquam sem fringilla ut morbi  morbi non arcu risus. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Ultricies lacus sed turpis tincidunt id. <br /> <br /> Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Non pulvinar neque laoreet suspendisse. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis malesuada. <span className="dis-style"> Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis lorem.Lorem ipsum dolor sit amet, consectet adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque. Neque aliquam vestibulum morbi blandit cursus.</span> Enim nulla aliquet porttitor lacus. Purus non enim praesent elementum facilisis. <br /> <br />
          <ul className="text-muted">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Faucibus turpis in eu mi bibendum neque.</li>
            <li>Neque aliquam vestibulum morbi blandit cursus.</li>
            <li>Enim nulla aliquet porttitor lacus.</li>
          </ul>
           Neque vitae tempus quam pellentesque. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Rhoncus dolor purus non enim praesent elementum facilisis leo. Quisque non tellus orci ac auctor augue mauris. Lobortis mattis aliquam faucibus purus. <span className="fw-bold"> Cras pulvinar mattis nunc sed blandit libero volutpat. Amet porttitor eget dolor morbi non arcu risus. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Molestie at elementum eu facilisis sed. In aliquam sem fringilla ut morbi.</span> Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis lorem.</p>
          </div>
        </div>
</div>
        </div>
        </div>

  );
};

export default SingleProduct;