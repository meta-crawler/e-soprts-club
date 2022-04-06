import { faRegistered, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./topNavbar.css";
const TopNavbar = () => {
  return (
    <div style={{ backgroundColor: "#212529" }}>
      <Container>
        <Row className="top-navbar">
          <div className="col-md-6">
            <span className="me-2">Phone: +8801648308424</span>
            <span>Email: dev.abdurrahman01@gmail.com</span>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/booking">
              <span className="top-right-part bg-warning">
                <FontAwesomeIcon icon={faTicket} /> TICKET BOOKING
              </span>
            </Link>
            <Link to="/event-register">
              <span className="top-right-part bg-success ">
                <FontAwesomeIcon icon={faRegistered} /> EVENT REGISTER
              </span>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default TopNavbar;
