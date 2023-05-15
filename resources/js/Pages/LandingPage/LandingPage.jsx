import { React } from "react";
import "../LandingPage/LandingPage.css";
import Service1 from "/public/build/assets/Service_1.jpg";
import Service2 from "/public/build/assets/Service_2.jpg";
import { TbHandClick } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";
import Footer from "/resources/js/Components/Footer";
import { Link } from "@inertiajs/react";

const LandingPage = () => {
  return (
    <>
      <div className="navbarSection">
        <nav>
          <ul>
            <li>
              <a href="#aboutUs">About Us</a>
            </li>
            <li>
              <Link href={route('login')}>Login</Link>
            </li>
            <li className="register_btn btn btn-primary">
              <Link href={route('register')}>Register</Link>
            </li>
          </ul>
        </nav>
        <div className="title_landing_page">
          <h1>Manage Your Booking Effectively</h1>
        </div>

        <div className="section_2">
          <div className="about_us" id="aboutUs">
            <h1>About Us</h1>
            <p className="about_us_text">
              A booking system platform for managing aspects of booking airline
              tickets and lodging. We provide access to find travel needs that
              are ready to help you plan a fun vacation!
            </p>
          </div>

          <div className="service_1_pict">
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
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
