import React from "react";
import "../Search Flight/SearchFlight.css";
import { BiWallet } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Form from "react-bootstrap/Form";
import Footer from "../../Component/Footer/Footer";

const SearchFlight = () => {
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
          <h1>Find the best flights here!</h1>
        </div>

        <div className="form_search_flight_section">
          <div className="form_search_flight">
            <h3 className="flight_title_form">Flight Schedule</h3>
            <Form.Label className="label_field_flight_search">From</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Departing from</option>
              <option value="1">Jakarta</option>
              <option value="2">Bali</option>
              <option value="3">Makassar</option>
            </Form.Select>

            <Form.Label className="label_field_flight_search">To</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Arrive in</option>
              <option value="1">Jakarta</option>
              <option value="2">Bali</option>
              <option value="3">Makassar</option>
            </Form.Select>

            <Form.Label className="label_field_flight_search">Date</Form.Label>
            <Form.Control type="date" />

            <Form.Label className="label_field_flight_search">
              Amount
            </Form.Label>
            <Form.Control type="number" />

            <button className="button_search_flight">SEARCH</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchFlight;
