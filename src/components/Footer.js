import React from "react";
import { FooterContainer } from "../styles/footerstyle";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import newsletter from ".././assets/images/newsletter.png";
const Footer = () => {
  return (
    <FooterContainer>
      <footer className="py-4 px-6">
        <div className="container-xxl wrapper">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center ">
                <img src={newsletter} alt="NewsLatter" />
                <h3 className="mb-0 text-white">Sign Up For NewsLetter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email address"
                  aria-label="Your Email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl wrapper">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-4 text-white">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno. : 277 Near Vill chopal,
                  <br />
                  sonopat , Narayna <br />
                  Pincode: 212109
                </address>
                <a
                  href="tel:+91 7777777777"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +91 7752982456
                </a>
                <a
                  href="mailto:pristore@gmail.com"
                  className=" d-block mb-2 text-white"
                >
                  pristore@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <Link className="text-white" to="">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsYoutube className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-condition" className="text-white py-2 mb-1">
                  Term & Condition
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4 text-white">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()} Powered by Pristore
              </p>
            </div>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
