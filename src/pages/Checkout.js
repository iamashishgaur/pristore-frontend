import React, { useEffect, useState } from "react";
import { InformationContainer } from "../styles/informationstyle";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import watch from "../assets/images/p1.png";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import { createAnOrder } from "../features/user/userSlice";
import logo from "../assets/images/logo.png";
const shippingSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address Details are Required"),
  city: yup.string().required("City is Required"),
  state: yup.string().required("State is Required"),
  country: yup.string().required("Country is Required"),
  pincode: yup.number().required("Pincode is  Required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [cartProductState, setCartProductState] = useState([]);
  const cartState = useSelector((state) => state?.auth?.cartProducts);

  const [paymentInfo, setPaymentInfo] = useState({
    razorpayOrderId: "",
    razorpayPaymentId: "",
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      setTimeout(() => {
        paymentHandler();
      }, 300);
    },
  });
  // total Amount
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index]?.quantity * cartState[index]?.price);
      setTotalAmount(sum);
    }
  }, [cartState]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  useEffect(() => {
    let items = [];
    for (let i = 0; i < cartState?.length; i++) {
      items.push({
        product: cartState[i].productId._id,
        quantity: cartState[i].quantity,
        color: cartState[i].color._id,
        price: cartState[i].price,
        orderItems: cartProductState,
      });
    }
    setCartProductState(items);
  }, []);

  const paymentHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    // creating a new order
    const result = await axios.post(
      "http://localhost:3200/api/user/order/checkout",
      { amount: totalAmount + 50 },
      config
    );
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data.order;
    const options = {
      key: "rzp_test_j7QEcPBT2HIaqJ", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Pristore",
      logo: { logo },
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        const result = await axios.post(
          "http://localhost:3200/api/user/order/paymentVerification",
          data,
          config
        );
        setPaymentInfo({
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        });
        dispatch(
          createAnOrder({
            totalPrice: totalAmount,
            totalPriceAfterDiscount: totalAmount,
            orderItems: cartProductState,
            paymentInfo,
            shippingInfo,
          })
        );
      },
      prefill: {
        name: "Pristore",
        email: "pristore@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Pristore Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <>
      <InformationContainer>
        <div className="information-wrapper py-5 ">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-7">
                <div className="information-left-details">
                  <h3 className="website-name">Pristore</h3>
                  <nav
                    style={{ "--bs-breadcrumb-divider": ">" }}
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link className="text-dark" to="/cart">
                          Cart
                        </Link>
                      </li>
                      &nbsp;
                      <BsChevronDoubleRight />
                      &nbsp;
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Information
                      </li>
                      &nbsp;
                      <BsChevronDoubleRight />
                      &nbsp;
                      <li className="breadcrumb-item active">
                        <Link className="text-dark" to="/shipping">
                          Shipping
                        </Link>
                      </li>
                      &nbsp;
                      <BsChevronDoubleRight />
                      &nbsp;
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Payment
                      </li>
                    </ol>
                  </nav>
                  <h4 className="title mt-4 ">Contact Information</h4>
                  <p className="user-details mt-3">
                    Ashish Kumar (ashish@gmail.com)
                  </p>
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label title-color"
                      htmlFor="flexCheckDefault"
                    >
                      Send Email me new Offers
                    </label>
                  </div>
                  <h4 className="title my-3">Shipping address</h4>
                  <form
                    onSubmit={formik.handleSubmit}
                    action=""
                    className="d-flex gap-15 flex-wrap "
                  >
                    <div className=" w-100">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Select address and & (Create new address)
                      </label>
                      <select
                        name=""
                        id=""
                        className="form-control form-select"
                      >
                        <option defaultValue="" disabled>
                          Select & create new address
                        </option>
                      </select>
                    </div>
                    <div className=" w-100">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Country*
                      </label>
                      <select
                        type="text"
                        name="country"
                        className="form-control form-select"
                        value={formik.values.country}
                        onChange={formik.handleChange("country")}
                        onBlur={formik.handleBlur("country")}
                      >
                        <option defaultValue="">Select Country</option>
                        <option defaultValue="India">India</option>
                        <option defaultValue="USA">USA</option>
                      </select>
                      <div className="error ms-2">
                        {formik.touched.country && formik.errors.country}
                      </div>
                    </div>

                    <div className=" flex-grow-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        placeholder="Enter First Name"
                        value={formik.values.firstname}
                        onChange={formik.handleChange("firstname")}
                        onBlur={formik.handleBlur("firstname")}
                      />
                      <div className="error ms-2">
                        {formik.touched.firstname && formik.errors.firstname}
                      </div>
                    </div>
                    <div className=" flex-grow-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Last Name*
                      </label>
                      <input
                        type="name"
                        className="form-control"
                        name="lastname"
                        id="name"
                        placeholder="Enter Last Name"
                        value={formik.values.lastname}
                        onChange={formik.handleChange("lastname")}
                        onBlur={formik.handleBlur("lastname")}
                      />
                      <div className="error ms-2">
                        {formik.touched.lastname && formik.errors.lastname}
                      </div>
                    </div>

                    <div className=" w-100">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Address*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange("address")}
                        onBlur={formik.handleBlur("address")}
                      />
                      <div className="error ms-2">
                        {formik.touched.address && formik.errors.address}
                      </div>
                    </div>
                    <div className=" w-100">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Apartment, suite, etc (optional)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="other"
                        placeholder="Apartment, suite, etc (optional)"
                        value={formik.values.other}
                        onChange={formik.handleChange("other")}
                        onBlur={formik.handleBlur("other")}
                      />
                    </div>

                    <div className=" flex-grow-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        State*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        placeholder="Enter your state"
                        value={formik.values.state}
                        onChange={formik.handleChange("state")}
                        onBlur={formik.handleBlur("state")}
                      />
                      <div className="error ms-2">
                        {formik.touched.state && formik.errors.state}
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        City*
                      </label>
                      <select
                        name="city"
                        className="form-control form-select"
                        value={formik.values.city}
                        onChange={formik.handleChange("city")}
                        onBlur={formik.handleBlur("city")}
                      >
                        <option defaultValue="">Select city</option>
                        <option value="Prayagraj">Prayagraj</option>
                        <option value="Lucknow">Lucknow</option>
                      </select>
                      <div className="error ms-2">
                        {formik.touched.city && formik.errors.city}
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Zip Code*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="pincode"
                        placeholder="Enter Zip code"
                        value={formik.values.pincode}
                        onChange={formik.handleChange("pincode")}
                        onBlur={formik.handleBlur("pincode")}
                      />
                      <div className="error ms-2">
                        {formik.touched.pincode && formik.errors.pincode}
                      </div>
                    </div>

                    <div className="d-flex mt-4 w-100 justify-content-between align-items-center">
                      <div className="d-flex  gap-15">
                        <Link to="/cart" className="text-dark">
                          <BsChevronDoubleLeft className="mb-0" /> Back to Cart
                        </Link>
                      </div>
                      <div className="d-flex  gap-15">
                        <Link to="/product" className="button border-0 ">
                          Continue to Shopping <BsChevronDoubleRight />
                        </Link>
                      </div>
                      <div className="d-flex  gap-15">
                        <button type="submit" className="button border-0 ">
                          Place Order <BsChevronDoubleRight />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-5">
                <div className="product-information">
                  <div className="border-bottom d-flex flex-column ">
                    {cartState &&
                      cartState?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="cart-col-1 border-bottom justify-content-between d-flex align-items-center my-1"
                          >
                            <div className="image position-relative">
                              <span
                                style={{ top: -"14px", right: "1px" }}
                                className="badge bg-secondary rounded-circle p-2 position-absolute text-white "
                              >
                                {item?.quantity}
                              </span>
                              <img
                                src={watch}
                                alt="watch"
                                className="img-fluid"
                              />
                            </div>
                            <div className="w-75 d-flex gap-30 align-items-center justify-content-between">
                              <div className="">
                                <p className="mb-0">{item?.productId?.title}</p>

                                <div className="d-flex gap-10 ">
                                  <p className="mb-0 d-flex align-items-center">
                                    Size :
                                  </p>
                                  <div className="d-flex flex-wrap gap-15">
                                    <span className="badge size-box">S</span>
                                    <span className="badge size-box">M</span>
                                  </div>
                                </div>

                                <div className="d-flex gap-10 ">
                                  <p>Color :</p>
                                  <p className="d-flex flex-wrap gap-15">
                                    <ul className="colors ps-0">
                                      <li
                                        style={{
                                          backgroundColor: item?.color?.title,
                                        }}
                                      ></li>
                                    </ul>
                                  </p>
                                </div>
                              </div>
                              <div className="w-25 text-end">
                                <p className="product-data text-dark">
                                  ₹ {item?.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className=" py-2">
                    <div className=" d-flex justify-content-between align-items-center ">
                      <p className="product-heading">Subtotal :</p>
                      <p className="product-data">
                        ₹ {totalAmount ? totalAmount : "0.00"}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center ">
                      <p className="product-heading">Shipping Fee :</p>
                      <p className="product-data">₹ 50.00</p>
                    </div>
                  </div>
                  <div className="total-amount d-flex justify-content-between align-items-center   ">
                    <h3 className="product-heading">Total Amount :</h3>
                    <p className="product-data">
                      ₹ {totalAmount ? totalAmount + 50 : "0.00"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InformationContainer>
    </>
  );
};

export default Checkout;
