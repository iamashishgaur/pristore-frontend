import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { styled } from "styled-components";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";
const ContactContainer = styled.div`
  background-color: var(--homeWrapper-color);
  .contact-inner-wrapper {
    padding: 30px 20px;
    border-radius: 15px;
    background-color: white;
    gap: 15px;
  }
  .contact-inner-wrapper > div {
    width: 48%;
  }
  .contact-title {
    font-size: 26px;
    font-weight: 500;
    line-height: 35px;
    text-align: left;
  }
  .contact-inner-wrapper ul {
    list-style: none;
  }
  .contact-inner-wrapper form .form-control {
    background-color: #f5f5f7;
    border-color: transparent;
    padding: 10px;
  }
  .contact-inner-wrapper address,
  .contact-inner-wrapper a,
  .contact-inner-wrapper p {
    color: #212529;
  }
`;
const contactSchema = yup.object({
  name: yup.string().required(" Name is Required"),

  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile No is Required"),
  comment: yup.string().required("Comment is Required"),
});
const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(createQuery(values));
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <ContactContainer>
        <div className="contact-wrapper py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482633.0405020231!2d72.55150845680824!3d19.082606792016964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692602010963!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  className="border-0 w-100"
                  allowFullScreen=""
                  loading="lazy"
                  title="map"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title mb-4">Contact </h3>
                    <form
                      action=""
                      className=" d-flex flex-column gap-15"
                      onSubmit={formik.handleSubmit}
                    >
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Enter Full Name"
                          value={formik.values.name}
                          onChange={formik.handleChange("name")}
                          onBlur={formik.handleBlur("name")}
                        />
                        <div className="error">
                          {formik.touched.name && formik.errors.name}
                        </div>
                      </div>
                      <div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange("email")}
                          onBlur={formik.handleBlur("email")}
                        />
                        <div className="error">
                          {formik.touched.email && formik.errors.email}
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile Number*"
                          name="mobile"
                          value={formik.values.mobile}
                          onChange={formik.handleChange("mobile")}
                          onBlur={formik.handleBlur("mobile")}
                        />
                        <div className="error">
                          {formik.touched.mobile && formik.errors.mobile}
                        </div>
                      </div>
                      <div>
                        <textarea
                          name="comment"
                          id=""
                          cols="30"
                          rows="4"
                          className="w-100 form-control"
                          placeholder="comments here..."
                          value={formik.values.comment}
                          onChange={formik.handleChange("comment")}
                          onBlur={formik.handleBlur("comment")}
                        />
                        <div className="error">
                          {formik.touched.comment && formik.errors.comment}
                        </div>
                      </div>
                      <div>
                        <button className="button border-0">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title mb-4">Get in touch with Us</h3>
                    <div>
                      <ul className="ps-0">
                        <li className="mb-3 d-flex gap-15 align-items-center ">
                          <AiOutlineHome className="fs-5" />
                          <address className="mb-0">
                            Hno. : 277 Near Vill chopal, sonopat , Narayna
                            Pincode: 212109
                          </address>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineMail className="fs-5" />
                          <a
                            href="mailto:pristore@gmail.com"
                            className=" d-block mb-2 "
                          >
                            pristore@gmail.com
                          </a>
                        </li>
                        <li className="mb-3 d-flex gap-15 text-dark align-items-center">
                          <BiPhoneCall className="fs-5" />
                          <a
                            href="tel:+91 7777777777"
                            className=" d-block mb-2 "
                          >
                            +91 7752982456
                          </a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BsInfoCircle className="fs-5" />
                          <div className="mb-0">Monday -Friday 10AM - 8PM</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContactContainer>
    </>
  );
};

export default Contact;
