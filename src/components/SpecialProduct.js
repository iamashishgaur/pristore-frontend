import React from "react";
import { styled } from "styled-components";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProductContainer = styled.div`
  .special-product-card {
    padding: 20px 10px;
    border-radius: 10px;
    background: white;
  }
  .special-product-card .special-product-content .badge {
    background-color: red !important;
  }
`;

const SpecialProduct = (props) => {
  const { title, brand, price, totalrating, quantity, sold, id } = props;
  return (
    <>
      <SpecialProductContainer className="col-6">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img
                width={250}
                src="images/p2.png"
                className="img-fluid"
                alt="Realme"
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{brand}</h5>
              <h6 className="product-title">{title}</h6>
              <ReactStars
                count={5}
                size={24}
                value={totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">${price}</span> &nbsp;
                <strike>$500.00</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 </b>days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>
                </div>
              </div>
              <div className="product-count my-3">
                <p>Products : {quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: quantity / quantity + sold * 100 + "%" }}
                    aria-valuenow={quantity / quantity + sold * 100}
                    aria-valuemin={quantity}
                    aria-valuemax={sold + quantity}
                  ></div>
                </div>
              </div>
              <Link to={`/product/` + id} className="button">
                View
              </Link>
            </div>
          </div>
        </div>
      </SpecialProductContainer>
    </>
  );
};

export default SpecialProduct;
