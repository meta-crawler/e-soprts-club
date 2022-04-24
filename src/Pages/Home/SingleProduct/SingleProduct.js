/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './SingleProduct.css';
// import { Spinner } from 'react-bootstrap';



const SingleProduct = () => {

  let { id } = useParams();

  const [products, setProducts] = useState([]);
  const [singleProducts, setSingleProducts] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    fetch('/featuredProducts.json',)
      .then(res => res.json())
      .then(data => setFeaturedProducts(data))
  }, [])
  useEffect(() => {
    fetch('https://enigmatic-garden-34025.herokuapp.com/other',)
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])
  useEffect(() => {
    const foundProducts = products.find(product => (product.id == id))
    setSingleProducts(foundProducts)
  }, [products, id])

  const onSubmit = (data) => {
    data.status= "Pending";
    fetch('https://enigmatic-garden-34025.herokuapp.com/orders', {
      method: "POST",
      headers: { "content-type": "application/json"},
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) =>{
          alert("Ordered Successfully!");
    });
    console.log(data);
};

  return (
    <div className="container mt-5">
      <Link style={{ textDecoration: 'none', background: "#e40046", color: "#FFF", padding: "5px", position: "absolute", top: "0px", left: "115px", borderRadius: "5px", marginTop: '20px' }} to='/'>Home </Link>
      <div className="my-auto">
        <div style={{ marginTop: "100px" }} class="card mb-3"  >
          <div class="row g-0  single-product-style">
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
                      <input className="cart-style" size="1" min="1" value="1" />
                      <button type="button" class="cart-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Shop
                      </button>
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content modal-style">
                            <div class="modal-header-style">
                              <h5 class="modal-titel1 mb-3">Buy This Product</h5>
                            </div>
                            <div class="modal-body">
                              <div className="text-center text-white">
                                <img className="w-25 rounded-circle" src={singleProducts?.img} alt="" />
                                <h3 className="modal-pd-name m">{singleProducts?.name}</h3>
                                <h5 className="modal-pd-name">{singleProducts?.price}</h5>
                                <h6 className="modal-pd-name">Category: {singleProducts?.category}</h6>
                                <h6 className="modal-pd-name">Tags: {singleProducts?.tags}</h6>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="modal-btn" data-bs-dismiss="modal">Close</button>
                              <button type="button" 
                              onClick={onSubmit}
                              class="modal-btn">Buy Now</button>
                            </div>
                          </div>
                        </div>
                      </div>
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
      <div>
      <h2 className="product-titel text-dark text-center my-4">Featured Products</h2>
      <div className="row">
                  {
                  featuredProducts.map(featuredProduct=> <div className=" mt-4 mb-3 col-md-3 col-12" key={featuredProduct.id}>
                  <div className="card h-100 card-style">
                    <div className="d-flex justify-content-center align-items-center"> 
                      <img className="w-100" src={featuredProduct?.img} alt="..."/>
                      </div>
                     <div className="text-center my-2">
                       <h3 className="pd-titel mb-3">{featuredProduct?.name}</h3>
                       <h5 className="fw-bold text-white mb-2">Price: {featuredProduct?.price}</h5>
                     </div>
                   </div>
                  </div>)
                  }
                  </div>
      </div>
        </div>
      </div>
    </div>

  );
};

export default SingleProduct;