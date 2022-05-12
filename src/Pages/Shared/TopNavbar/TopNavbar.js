import { faRegistered, faTicket, faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
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
            <div className="div">
            <FontAwesomeIcon  style={{ color: "#e40046", fontSize: "20px", marginRight: "10px", marginTop: "10px" }} icon={faPhone} />+8801648308424
            <FontAwesomeIcon style={{ color: "#e40046", fontSize: "20px",  marginLeft: "20px", marginRight: "10px", marginTop: "10px" }} icon={faMailBulk} /> dev.abdurrahman01@gmail.com

            </div>
          </div>
          <div className="col-md-6 text-end">
          <Link to="/dashboard2/contest/start">
              <span className="top-right-part bg-warning">
                <FontAwesomeIcon icon={faTicket} /> PLAY CONTEST 
              </span>
            </Link>

        <Link to="/dashboard2/contest/result">
              <span className="top-right-part bg-success">
                <FontAwesomeIcon icon={faTicket} /> CONTEST RESULT 
              </span>
            </Link>

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
