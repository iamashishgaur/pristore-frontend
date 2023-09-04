import React from "react";
import { styled } from "styled-components";
import ReactStars from "react-rating-stars-component";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import wish from ".././assets/images/wish.svg";
import view from ".././assets/images/view.svg";
import prodcompare from ".././assets/images/prodcompare.svg";
import addcart from ".././assets/images/add-cart.svg";
import cloth from ".././assets/images/product-9-2.jpg";

const ProductCardContainer = styled.div`
  .product-card {
    padding: 15px;
    border-radius: 10px;
    background: white;
    overflow: hidden;
    width: 100%;
  }
  .product-card .product-image {
    height: 270px;
  }
  .product-card .product-image img {
    object-fit: contain;
  }
  .product-card .product-image > img:last-child {
    display: none;
  }
  .product-card:hover .product-image > img:nth-child(1) {
    display: none;
  }
  .product-card:hover .product-image > img:last-child {
    display: block;
  }
  .product-card .wishlist-icon {
    top: 2%;
    right: 15px;
  }
  .product-card:hover .action-bar {
    right: 15px;
  }
  .product-card .product-details .brand {
    color: var(--product-category);
    font-size: 13px;
  }
  .product-card .product-details .product-title {
    font-size: 15px;
    color: var(--text-title);
  }
  .product-card .product-details .price {
    font-size: 16px;
    color: var(--text-price);
  }
  .product-card .action-bar {
    top: 10%;
    right: -23px;
    transition: 0.3s;
  }
  .description {
    color: var(--header-background);
    font-size: 13px;
    margin-right: 20px;
  }
`;

const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <>
      {data &&
        data?.map((item, index) => {
          return (
            <ProductCardContainer
              key={index}
              className={`${
                location.pathname === "/product" ? `gr-${grid}` : "col-3"
              }`}
            >
              <Link
                to={`/product/` + item?._id}
                className="product-card position-relative"
              >
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent"
                    onClick={(e) => {
                      addToWish(item?._id);
                    }}
                  >
                    <img src={wish} alt="wish" />
                  </button>
                </div>
                <div className="product-image">
                  <img src={cloth} className="img-fluid" alt="product" />
                  <img src={cloth} className="img-fluid" alt="product" />
                </div>
                <div className="product-details">
                  <h6 className="brand">{item?.brand}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={item?.totalrating.toString()}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                  <p className="price">₹{item?.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <Link>
                      <img src={prodcompare} alt="compare" />
                    </Link>
                    <Link to={`/product/` + item?._id}>
                      <img src={view} alt="view" />
                    </Link>
                    <Link>
                      <img src={addcart} alt="addcart" />
                    </Link>
                  </div>
                </div>
              </Link>
            </ProductCardContainer>
          );
        })}
    </>
  );
};

export default ProductCard;
