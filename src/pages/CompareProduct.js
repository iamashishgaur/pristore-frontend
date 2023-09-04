import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { CompareProductContainer } from "../styles/CompareProductstyle";
import Colors from "../components/Colors";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Product"} />
      <BreadCrumb title="Compare Product" />
      <CompareProductContainer>
        <div className="compare-product py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <img
                    src="images/cross.svg"
                    className="   position-absolute cross"
                    alt="cross"
                  />
                  <div className="product-card-image">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid "
                      alt="Watch"
                    />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                      Kids headephones bulk 10 pack multi colored for students
                    </h5>
                    <h6 className="price">$100.00</h6>
                    <div>
                      <div className="product-details">
                        <h6>Brand:</h6>
                        <p>Apple</p>
                      </div>
                      <div className="product-details">
                        <h6>Type:</h6>
                        <p>Watch</p>
                      </div>
                      <div className="product-details">
                        <h6>Availablity:</h6>
                        <p>In stock</p>
                      </div>
                      <div className="product-details">
                        <h6>Color:</h6>
                        <Colors />
                      </div>
                      <div className="product-details">
                        <h6>Size:</h6>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <img
                    src="images/cross.svg"
                    className="   position-absolute cross"
                    alt="cross"
                  />
                  <div className="product-card-image">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid "
                      alt="Watch"
                    />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                      Kids headephones bulk 10 pack multi colored for students
                    </h5>
                    <h6 className="price">$100.00</h6>
                    <div>
                      <div className="product-details">
                        <h6>Brand:</h6>
                        <p>Apple</p>
                      </div>
                      <div className="product-details">
                        <h6>Type:</h6>
                        <p>Watch</p>
                      </div>
                      <div className="product-details">
                        <h6>Availablity:</h6>
                        <p>In stock</p>
                      </div>
                      <div className="product-details">
                        <h6>Color:</h6>
                        <Colors />
                      </div>
                      <div className="product-details">
                        <h6>Size:</h6>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <img
                    src="images/cross.svg"
                    className="   position-absolute cross"
                    alt="cross"
                  />
                  <div className="product-card-image">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid "
                      alt="Watch"
                    />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                      Kids headephones bulk 10 pack multi colored for students
                    </h5>
                    <h6 className="price">$100.00</h6>
                    <div>
                      <div className="product-details">
                        <h6>Brand:</h6>
                        <p>Apple</p>
                      </div>
                      <div className="product-details">
                        <h6>Type:</h6>
                        <p>Watch</p>
                      </div>
                      <div className="product-details">
                        <h6>Availablity:</h6>
                        <p>In stock</p>
                      </div>
                      <div className="product-details">
                        <h6>Color:</h6>
                        <Colors />
                      </div>
                      <div className="product-details">
                        <h6>Size:</h6>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="compare-product-card position-relative">
                  <img
                    src="images/cross.svg"
                    className="   position-absolute cross"
                    alt="cross"
                  />
                  <div className="product-card-image">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid "
                      alt="Watch"
                    />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                      Kids headephones bulk 10 pack multi colored for students
                    </h5>
                    <h6 className="price">$100.00</h6>
                    <div>
                      <div className="product-details">
                        <h6>Brand:</h6>
                        <p>Apple</p>
                      </div>
                      <div className="product-details">
                        <h6>Type:</h6>
                        <p>Watch</p>
                      </div>
                      <div className="product-details">
                        <h6>Availablity:</h6>
                        <p>In stock</p>
                      </div>
                      <div className="product-details">
                        <h6>Color:</h6>
                        <Colors />
                      </div>
                      <div className="product-details">
                        <h6>Size:</h6>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CompareProductContainer>
    </>
  );
};

export default CompareProduct;
