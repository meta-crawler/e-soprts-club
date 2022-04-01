import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="text-white" style={{ backgroundColor: '#242F3D', marginTop: "100px" }}>
            <div class="text-white">

                <Container
                    class="text-center text-lg-start text-white text-decoration-none text-start"

                 

                >

                    <section
                        class="d-flex justify-content-between p-4 text-white"
                       


                    >

                        <div class="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>

                    </section>
                    <section class="">
                        <div class="mx-3 text-center text-md-start mt-5">

                            <div class="row mt-3 text-white">

                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">   ABOUT
                                    </h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}

                                    />
                                    <p>
                                        Bicycle rights heirloom poutine twee distillery kale chips. Thundercats pok pok seitan waistcoat whatever yr. Squid cornhole iPhone umami thundercats, shabby chic pinterest crucifix kogi irony. Chambray lyft flannel pok pok.
                                    </p>
                                </div>

                                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 text-white">

                                    <h6 class="text-uppercase fw-bold">                                CONTACT INFO
                                    </h6>


                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}

                                    />
                                    <p>
                                        <li style={{ fontSize: "16px" }} class="text-white text-decoration-none text-start">Call-center: 1 (323) 938-5798
                                        </li>
                                    </p>
                                    <p>
                                        <li style={{ fontSize: "16px" }} class="text-white text-decoration-none text-start">Sales: 1 (888) 637-7262
                                        </li>
                                    </p>
                                    <p>
                                        <li style={{ fontSize: "16px" }} class="text-white text-decoration-none text-start">Email: info@styleixthemes.com
                                        </li>
                                    </p>

                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">
                                        QUICK LINKS

                                    </h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px',  height: '2px' }}

                                    />
                                    <p>
                                        <li style={{ fontSize: "16px" }} class="text-white text-decoration-none text-start">
                                            About Club

                                        </li>
                                    </p>
                                    <p>
                                        <li style={{ fontSize: "16px" }} class="text-white text-decoration-none text-start"> Arena
                                        </li>
                                    </p>
                                    <p>
                                        <li style={{ fontSize: "16px" }} class="text-white text-decoration-none text-start">
                                            Our history

                                        </li>
                                    </p>
                                    <p>
                                        <li style={{ fontSize: "16px" }} class="text-white text-decoration-none text-start">
                                            Shortcodes

                                        </li>
                                    </p>
                                </div>



                                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">

                                    <h6 class="text-uppercase fw-bold">Information</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px',  height: '2px' }}

                                    />
                                    <p>  FAQ
                                    </p>
                                    <p>  News
                                    </p>
                                    <p> Price table
                                    </p>
                                    <p> Shop
                                    </p>
                                    <p>  Trophy room

                                    </p>
                                </div>

                            </div>

                        </div>
                    </section>

                    <div
                        class="text-center p-3"
                        style={{ backgroundColor: (0, 0, 0, 0.2) }}

                    >
                       Copyright (c) 2020 Splash.



                    </div>

                </Container>

            </div>
        </div>

    );
};

export default Footer;