import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <div className="pt-5 pb-3 text-white primary-bg" id="contact">
      <div className="container">
        <div className="row pb-5 pt-3">
          <div className="col-12 col-md-3 col-lg-3">
            <img
              src="./actuality logo.png"
              alt="Logo"
              className="d-inline-block align-top logo-footer w-100"
            />
          </div>

          <div className="col-12 col-md-3 col-lg-3">
            <h5 className="fw-bold mb-3 text-white fs-5">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-1">
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-1">
                <a href="/services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-3">
            <h5 className="fw-bold mb-3 text-white fs-5">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-1">
                <a href="/" className="text-white text-decoration-none">
                  <p className="font-16 mb-1 d-flex align-items-center">
                    <img
                      src="./icons/phone-call.png"
                      alt="Phone"
                      className="me-2 footer-icon"
                    />{" "}
                    +91 9876543210
                  </p>
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="text-white text-decoration-none">
                  <p className="font-16 d-flex align-items-center">
                    <img
                      src="./icons/mail.png"
                      alt="mail"
                      className="me-2 footer-icon"
                    />{" "}
                    9oGdG@example.com
                  </p>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-3">
            <h5 className="fw-bold mb-3 text-white fs-5">Follow Us</h5>
            <ul className="list-unstyled d-flex align-items-center">
              <li className="mb-1">
                <a href="/" className="text-white text-decoration-none">
                  <p className="font-16 d-flex align-items-center">
                    <img
                      src="./icons/facebook.png"
                      alt="facebook"
                      className="me-2 footer-social-icon"
                    />
                  </p>
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="text-white text-decoration-none">
                  <p className="font-16 d-flex align-items-center">
                    <img
                      src="./icons/instagram.png"
                      alt="instagram"
                      className="me-2 footer-social-icon"
                    />
                  </p>
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="text-white text-decoration-none">
                  <p className="font-16 d-flex align-items-center">
                    <img
                      src="./icons/twitter.png"
                      alt="twitter"
                      className="me-2 footer-social-icon"
                    />
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-1 text-center">
        <p className="text-white mb-0 font-14 fw-light">
          &copy; 2023 Actuality. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
