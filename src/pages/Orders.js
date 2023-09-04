import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";
import ProfileLayout from "../components/ProfileLayout";
const OrdersContainer = styled.div`
  background-color: var(--homeWrapper-color);
`;

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getorderedProduct?.orders
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <>
      <Meta title={"My Orders  | Pristore"} />
      <BreadCrumb title="My Orders" />
      <ProfileLayout>
        <OrdersContainer>
          <div className="main-cart-wrapper py-3">
            <div className="container-xxl wrapper">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-3">
                      <h5>Orders Id</h5>
                    </div>
                    <div className="col-3">
                      <h5>Total Amount</h5>
                    </div>
                    <div className="col-3">
                      <h5>Total Amount After Discount</h5>
                    </div>
                    <div className="col-3">
                      <h5>Status</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  {orderState &&
                    orderState?.map((item, index) => {
                      return (
                        <div key={index} className="row my-3">
                          <div className="col-3">
                            <p>{item?._id}</p>
                          </div>
                          <div className="col-3">
                            <p>{item?.totalPrice}</p>
                          </div>
                          <div className="col-3">
                            <p>{item?.totalPriceAfterDiscount}</p>
                          </div>
                          <div className="col-3">
                            <p>{item?.orderStatus}</p>
                          </div>
                          <div className="col-12">
                            <div className="row bg-secondary p-3">
                              <div className="col-3">
                                <h6>Product Name </h6>
                              </div>
                              <div className="col-3">
                                <h6>Quantity</h6>
                              </div>
                              <div className="col-3">
                                <h6>Price</h6>
                              </div>
                              <div className="col-3">
                                <h6>Color</h6>
                              </div>
                              {item?.orderItems?.map((i, index) => {
                                return (
                                  <div key={index} className="col-12">
                                    <div className="row bg-secondary p-3">
                                      <div className="col-3">
                                        <p>{i?.product?.title}asds</p>
                                      </div>
                                      <div className="col-3">
                                        <p>{i?.product?.quantity}</p>
                                      </div>
                                      <div className="col-3">
                                        <p>Price</p>
                                      </div>
                                      <div className="col-3">
                                        <p>Color</p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </OrdersContainer>
      </ProfileLayout>
    </>
  );
};

export default Orders;
