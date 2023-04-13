import React from "react";
import "../Footer/Footer.css";
import wonderfulIcon from "../../Assets/Wonderful_Indonesia_Icon.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { GiRotaryPhone } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-fixed">
        <div className="row">
          <div className="col-6 col-sm-3 footer-left">
            <div style={{ display: "flex" }}>
              <FaWhatsapp
                className="icon"
                style={{
                  color: "#FFFF",
                  marginRight: "30px",
                }}
              />
              <p style={{ color: "#FFFF" }}>
                <span className="footer_desc_socmed">WhatsApp</span>
                <br />
                <span className="footer_desc_content">0812-3456-7890</span>
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <SiMinutemailer
                className="icon"
                style={{
                  color: "#ffff",
                  marginRight: "30px",
                }}
              />
              <p style={{ color: "#fff" }}>
                <span className="footer_desc_socmed">E-mail</span>
                <br />
                <span className="footer_desc_content">booking@tiket.com</span>
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <GiRotaryPhone
                className="icon"
                style={{
                  color: "#fff",
                  marginRight: "30px",
                }}
              />
              <p style={{ color: "#fff" }}>
                <span className="footer_desc_socmed">Call Center</span>
                <br />
                <span className="footer_desc_content">0541-1122-341</span>
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <p className="footer_content">Follow Us</p>
            <a href="https://r.search.yahoo.com/_ylt=AwrOurUiuxZktiYi4KNXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMyNTQzNFNDXzEEc2VjA3Ny/RV=2/RE=1679240098/RO=10/RU=https%3a%2f%2fwww.instagram.com%2f/RK=2/RS=wJhcwzwJeKk31C.yc0VI3UNFadI-">
              <FaInstagram className="icon-follow-us" />
            </a>
            <a href="https://r.search.yahoo.com/_ylt=Awr9.hAyuxZksz8iZntXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMyNTQzNFNDXzEEc2VjA3Ny/RV=2/RE=1679240114/RO=10/RU=https%3a%2f%2fwww.facebook.com%2f/RK=2/RS=8oxPsy1Lquk6t3Fl_TU8FjwC3uw-">
              <FaFacebookF className="icon-follow-us" />
            </a>
            <a href="https://r.search.yahoo.com/_ylt=Awr99BBCuxZkFvoh3OlXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMyNTQzNFNDXzEEc2VjA3Ny/RV=2/RE=1679240131/RO=10/RU=https%3a%2f%2ftwitter.com%2f/RK=2/RS=6LxdcAyTft7DA0itxEmjz9Hc_h8-">
              <FaTwitter className="icon-follow-us" />
            </a>
          </div>

          <div className="col-6 col-sm-2" style={{ lineHeight: "32px" }}>
            <p className="footer_content">Product</p>
            <span style={{ color: "#fff", fontWeight: "300", fontSize: "13px" }}>Flight Ticket</span>
            <br />
            <span style={{ color: "#fff", fontWeight: "300", fontSize: "13px" }}>Hotel Rooms</span>
          </div>

          <div className="col-6 col-sm-4">
            <p className="footer_content">Partner</p>
            <div style={{ display: "flex" }}>
              <img className="partner_icon" src={wonderfulIcon} alt="logo" />
              <span
                style={{
                  color: "#fff",
                  fontWeight: "300",
                  fontSize: "13px",
                  textAlign: "justify",
                  paddingLeft: "20px",
                  paddingRight: "20px"
                }}
              >
                Official Partner of the Ministry of Tourism, Republic of
                Indonesia.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
