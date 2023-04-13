import React from "react";
import "../Search Hotel/SearchHotel.css";
import { BiWallet } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Form from "react-bootstrap/Form";
import Footer from "../../Component/Footer/Footer";

const SearchHotel = () => {
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
          <h1>Book the best hotels at low prices!</h1>
        </div>
        <div className="form_search_hotel_section">
          <div className="form_search_hotel">
            <h3 className="flight_title_hotel">Hotel Destination</h3>
            <Form.Label className="label_field_hotel_search">
              Destination
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Destination</option>
              <option value="1">Jakarta</option>
              <option value="2">Bali</option>
              <option value="3">Makassar</option>
            </Form.Select>

            <Form.Label className="label_field_hotel_search">Date</Form.Label>
            <Form.Control type="date" />

            <Form.Label className="label_field_hotel_search">Amount</Form.Label>
            <Form.Control type="number" />

            <button className="button_search_hotel">SEARCH</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchHotel;
