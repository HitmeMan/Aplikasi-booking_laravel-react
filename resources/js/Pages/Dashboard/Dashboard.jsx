import React from "react";
import "../Dashboard/Dashboard.css";
import Card from "react-bootstrap/Card";
import Service1 from "../../Assets/Service_1.jpg";
import Service2 from "../../Assets/Service_2.jpg";
import { BiWallet } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Airplane from "../../Assets/Airplane.jpg";
import Hotel from "../../Assets/Hotel.jpg";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="navbarSection">
        <nav className="nav_dahboard">
          <button className="button_logout btn btn-danger">Logout</button>
          <ul>
            <li>
              <BiWallet className="icon_navbar_login" />
            </li>
            <li>
              <SlBasket className="icon_navbar_login" />
            </li>
            <li>
              <CgProfile className="icon_navbar_login" />
            </li>
          </ul>
        </nav>
        <div className="title_landing_page">
          <h1>Manage Your Booking Effectively</h1>
        </div>

        <div className="section_2">
          <div className="card_dashboard">
            <Card
              style={{
                width: "360px",
                borderRadius: "20px",
                marginRight: "40px",
                marginTop: "80px",
              }}
            >
              <Card.Title
                className="mt-3 mb-3"
                style={{
                  fontWeight: "600",
                  color: "#1B68DA",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Flight
              </Card.Title>
              <Card.Img className="card_image ms-3" src={Airplane} />
              <Card.Body>
                <Card.Text
                  className="text-center"
                  style={{
                    fontSize: "15px",
                    fontWeight: "300",
                    color: "#1B68DA",
                  }}
                >
                  Determine your dream destination at an affordable price in
                  here!
                </Card.Text>
                <Link
                  to="/search/flight"
                  className="btn btn-primary mt-2 d-flex justify-content-center"
                >
                  Check here
                </Link>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "360px",
                borderRadius: "20px",
                marginTop: "80px",
              }}
            >
              <Card.Title
                className="mt-3 mb-3"
                style={{
                  fontWeight: "600",
                  color: "#1B68DA",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Hotel
              </Card.Title>
              <Card.Img className="card_image ms-3" src={Hotel} />
              <Card.Body>
                <Card.Text
                  className="text-center"
                  style={{
                    fontSize: "15px",
                    fontWeight: "300",
                    color: "#1B68DA",
                  }}
                >
                  Find a resting place with affordable prices and satisfying
                  facilities!
                </Card.Text>
                <Link
                  to="/search/hotel"
                  className="btn btn-primary mt-2 d-flex justify-content-center"
                >
                  Check here
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className="service_1_pict mt-5">
            <img src={Service1} alt="img" />
            <div>
              <h3>Many of the Best Flight Options.</h3>
              <br />
              <p>
                There are many choices of airlines with the most complete routes
                to various regions. There are also many price options available.
                You can search for airline tickets to various routes to go on
                vacation with satisfying service.
              </p>
            </div>
          </div>

          <div className="service_2_pict">
            <div className="service_1_text">
              <h3>Many of the Best Hotel Options.</h3>
              <br />
              <p>
                There are many choices of hotel with the most complete
                facilities in various regions. There are also many price options
                available. You can search for the best hotel rooms on various
                routes to go on vacation with satisfying service.
              </p>
            </div>
            <img src={Service2} alt="img" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
