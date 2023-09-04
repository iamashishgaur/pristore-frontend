import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { CartContainer } from "../styles/cartstyle";
import watch from "../assets/images/p1.png";
import { RiDeleteBin6Line } from "react-icons/ri";

import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { QTYSelection } from "../styles/singleproductstyle";
import { Link } from "react-router-dom";
import {
  getUserCart,
  deleteProductCart,
  updateProductCart,
} from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [productUpdateDetails, setProductUpdateDetails] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    if (productUpdateDetails !== null) {
      dispatch(
        updateProductCart({
          cartItemId: productUpdateDetails?.cartItemId,
          quantity: productUpdateDetails?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 200);
    }
  }, [productUpdateDetails]);

  const deleteAProduct = (id) => {
    dispatch(deleteProductCart(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index]?.quantity * userCartState[index]?.price);
      setTotalAmount(sum);
    }
  }, [userCartState]);

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <CartContainer>
        <div className="main-cart-wrapper py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-8">
                <h3 id="summary-title">Cart Items</h3>
                <div className="cart-item-wrapper border-bottom d-flex flex-column">
                  <div className=" d-flex justify-content-between align-items-center">
                    <h4 className="cart-col-1">Product</h4>
                    <h4 className="cart-col-2">Price</h4>
                    <h4 className="cart-col-3">QTY</h4>
                    <h4 className="cart-col-4">Total</h4>
                    <h4 className="cart-col-5">Action</h4>
                  </div>
                  {userCartState &&
                    userCartState?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="border-bottom d-flex mt-2 py-2 mb-2 gap-15 justify-content-between align-items-center"
                        >
                          <h4 className="cart-col-1 gap-15 d-flex align-items-center">
                            <div className="w-25">
                              <img
                                src={watch}
                                alt="watch"
                                className="img-fluid"
                              />
                            </div>
                            <div className="w-75">
                              <p>{item?.productId?.title}</p>
                              <div className="d-flex gap-10  my-3">
                                <p>Color :</p>
                                <div className="d-flex flex-wrap gap-15">
                                  <ul className="colors ps-0">
                                    <li
                                      style={{
                                        backgroundColor: item?.color?.title,
                                      }}
                                    ></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </h4>
                          <h4 className="cart-col-2 bg">
                            <p className="product-data">₹{item?.price}.00</p>
                          </h4>
                          <h4 className="cart-col-3 d-flex align-items-center gap-15">
                            <QTYSelection>
                              <select
                                as="select"
                                value={
                                  productUpdateDetails?.quantity
                                    ? productUpdateDetails?.quantity
                                    : item?.quantity
                                }
                                onChange={(e) => {
                                  setProductUpdateDetails({
                                    cartItemId: item?._id,
                                    quantity: e.target.value,
                                  });
                                }}
                              >
                                {[...Array(item?.quantity).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </select>
                            </QTYSelection>
                          </h4>
                          <h4 className="cart-col-4 bg">
                            <p className="product-data">
                              ₹{item?.price * item?.quantity}.00
                            </p>
                          </h4>
                          <h4 className="cart-col-5 d-flex gap-30 ">
                            <RiDeleteBin6Line
                              onClick={() => {
                                deleteAProduct(item?._id);
                              }}
                              className="svg fs-5"
                            />
                          </h4>
                        </div>
                      );
                    })}

                  <div className="d-flex  gap-15">
                    <Link to="/product">
                      <button
                        type="submit"
                        className="button border-0  mt-3 text-lg"
                      >
                        <BsChevronDoubleLeft /> Continue To Shopping
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h3 id="summary-title">Summary</h3>
                <div className="summary-wrapper">
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <h3 className="product-heading">
                      Price (
                      {userCartState?.reduce(
                        (acc, item) => acc + item?.quantity,
                        0
                      )}
                      &nbsp;items) :
                    </h3>
                    <p className="product-data">
                      ₹
                      {userCartState &&
                        userCartState
                          ?.reduce(
                            (acc, item) => acc + item?.quantity * item?.price,
                            0
                          )
                          .toFixed(2)}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <h3 className="product-heading">Discount :</h3>
                    <p className="product-data">
                      ₹
                      {userCartState &&
                        userCartState
                          ?.reduce(
                            (acc, item) => acc + item?.qty * item?.price,
                            0
                          )
                          .toFixed(2)}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <h3 className="product-heading">Delivery Charges :</h3>
                    <p className="product-data">₹ 50.00</p>
                  </div>

                  <div className="total-amount mt-4 d-flex justify-content-between align-items-center my-2">
                    <h3 className="product-heading">Total Amount :</h3>
                    <p className="product-data">
                      ₹ {totalAmount ? totalAmount + 50 : "0.00"}
                    </p>
                  </div>
                  <p className="product-data">include all taxces</p>
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <Link to="/checkout">
                      <button
                        type="submit"
                        className="button border-0 w-100 mt-3 text-lg"
                      >
                        Proceed to Checkout <BsChevronDoubleRight />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CartContainer>
    </>
  );
};

export default Cart;
