import React from "react";
import "../Flight Schedule/FlightSchedule.css";
import { BiWallet } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Footer from "../../Component/Footer/Footer";

const FlightSchedule = () => {
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
        <div className="title_flight_schedule">
          <h1>Monday, 12 March 2023</h1>
          <span>Jakarta - Makassar</span>
        </div>

        <div className="flight_schedule_table">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col" className="label_flight_schedule">
                  Airline
                </th>
                <th scope="col" className="label_flight_schedule">Flight Time</th>
                <th scope="col" className="label_flight_schedule">Flight Duration</th>
                <th scope="col" className="label_flight_schedule">Price</th>
                <th scope="col" className="label_flight_schedule">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Lion Air</th>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <button>Detail</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Super Air Jet</th>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <button>Detail</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Garuda Indonesia</th>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <button>Detail</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Citilink</th>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <button>Detail</button>
                </td>
              </tr>
              <tr>
                <th scope="row">Batik Air</th>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <button>Detail</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightSchedule;
