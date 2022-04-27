import React, { useState } from 'react';
import {
    faComment,
    faShareNodes,
    faTag,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Button, Container, Form, Row, Spinner } from "react-bootstrap";
  import useAuth from "../../Hook/UseAuth";
  import Navigation from "../Shared/Navigation/Navigation";
import { useForm } from 'react-hook-form';

const ContestsRegister = () => {
    const { isLoading} = useAuth()
    const {reset} = useForm()

    const formDataAll = { eventName: '', contextDate: '', category: '', ContextCategory: '',city: "", address: "", eventDes: "", ClubName: "", email: "", number: "", status: "pending"};
    const [formData, setFormData] = useState(formDataAll);

    const onBlurHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newFormData = { ...formData };
        newFormData[name] = value;
        setFormData(newFormData);
      };
      const onSubmitHandler = data => {
        data.preventDefault();
    
        
    
        const newDispalyReviwe = {
          ...formData
        }
    // https://blooming-thicket-66783.herokuapp.com/contextRegister
        fetch('', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newDispalyReviwe)
        })
          .then(res => res.json())
          .then(data => console.log(data));
  
        
  
  
          if(newDispalyReviwe){
            alert("Thank You, Your Register was Completed")
          }
          reset()
    
      }
  


    return (
        <div style={{zIndex: "24"}}>
        <Navigation />
        
        <div className="booking-container container">
          <div className="ticket-booking-container">
            <div className="text-center">
              <h1 className="text-uppercase">
                Register Your <span className="text-warning">Context now!</span>
              </h1>
              <p>
                Feel the thrill of seeing a global sporting event in one of the
                world's most incredible cities. Headlining the calendar is the
                Dubai World Cup.
              </p>
              <h3>Time</h3>
            </div>
  
            {!isLoading && 
            <form onSubmit={onSubmitHandler} className="mt-4" >
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Event Name</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="text"
                  placeholder="Type your name"
                  name="eventName"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Context Date</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="date"
                  placeholder="Type your date"
                  name="contextDate"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Category</Form.Label>
                <Form.Select onChange={onBlurHandler}   name="category" required>
                  <option>Select-category</option>
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Context-Category</Form.Label>
                <Form.Select onChange={onBlurHandler} name="ContextCategory" required>
                  <option>Select Age</option>
                  <option>Football</option>
                  <option>Cricket</option>
                  <option>Base-Ball</option>
                  <option>Basket-Ball</option>
                  <option>Table Tennis</option>
                  <option>Hockey Puck</option>
                  <option>Volley Ball</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">City</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="text"
                  placeholder="Type your City"
                  name="city"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Address</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  as="textarea"
                  rows={3}
                  placeholder="Type your address"
                  name="address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label style={{ textAlign: "end" }} className="mb-0">
                  Event Descriptions
                </Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  as="textarea"
                  rows={3}
                  placeholder="Type event descriptions"
                  name="eventDes"
                  required
                />
              </Form.Group>
              {/* <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Club Name</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="text"
                  placeholder="Type your club name"
                  name="ClubName"
                  required
                />
              </Form.Group> */}
              <Form.Group className="mb-3 input-box">
                <Form.Label style={{ textAlign: "end" }} className="mb-0">
                  Contact E-mail
                </Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="email"
                  placeholder="Type your email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label style={{ textAlign: "end" }} className="mb-0">
                  Contact Number
                </Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="number"
                  placeholder="Type your number"
                  name="number"
                  required
                />
              </Form.Group>
  
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0"></Form.Label>
                <Button className="fw-bold w-100" style={{ background: "#e40046" }} type="submit">
                  SUBMIT
                </Button>
              </Form.Group>
            </form> }
  
  
            {isLoading &&   <Spinner animation="border" variant="secondary" />}
          </div>
        </div>
        <div className="next-match-container">
          <Container className="p-5">
            <Row>
              <div className="col-md-2 text-center">
                <p>Next Match</p>
                <h1
                  style={{ fontSize: "5rem" }}
                  className="text-warning fw-bold my-0"
                >
                  25
                </h1>
                <p>May 2022 </p>
              </div>
              <div className="col-md-8 next-match-info-sec">
                <h4 className="text-uppercase">
                  Western Sydney wanderers vs urawa red diamonds
                </h4>
                <p>
                  In efficitur nisi et condimentum mattis. Duis et aliquet purus,
                  quis congue elit. Cras volutpat dapibus molestie. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas. Donec posuere mollis augue, a accumsan libero
                  egestas sit amet.Vestibulum posuere erat tortor, porta tempus
                  leo condimentum sed.
                </p>
              </div>
              <div className="col-md-2 social-box">
                <p>
                  <FontAwesomeIcon icon={faComment} /> Comments
                </p>
                <p>
                  <FontAwesomeIcon icon={faTag} /> Tags
                </p>
                <p>
                  <FontAwesomeIcon icon={faShareNodes} /> Shares
                </p>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default ContestsRegister;