import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import { HomePopularWrapper } from "../styles/homestyle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-medium-image-zoom/dist/styles.css";
import ReactImageZoom from "react-image-zoom";
import Colors from "../components/Colors";

import { BiGitCompare } from "react-icons/bi";
import {
  addRating,
  getAProduct,
  getAllProducts,
} from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";
import {
  QTYSelection,
  SingleProductContainer,
} from "../styles/singleproductstyle";

const SingleProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState(null);
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alredeyAdded, setAlredeyAdded] = useState(false);
  const [popularProduct, setPopularProduct] = useState([]);
  const getProductId = location.pathname.split("/")[2];
  const productState = useSelector((state) => state?.product?.singleproduct);
  const productsState = useSelector((state) => state?.product?.product);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const [orderedProduct, setOrderedProduct] = useState(true);
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlredeyAdded(true);
      }
    }
  }, []);

  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add Star");
      return false;
    } else if (comment === null) {
      toast.error("Please Write Review About the Product");
      return false;
    } else {
      dispatch(
        addRating({ star: star, comment: comment, prodId: getProductId })
      );
    }
  };

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please Choose Color");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const props = {
    // width: 400,
    // height: 400,
    zoomWidth: 600,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  useEffect(() => {
    let data = [];
    for (let i = 0; i < productsState?.length; i++) {
      const element = productsState[i];
      if (element.tags === "popular") {
        data.push(element);
      }
      setPopularProduct(data);
    }
  }, [productState]);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={productState?.title} />
      <SingleProductContainer>
        <div className="main-product-wrapper py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-6">
                <div className="main-product-image">
                  <div>
                    <ReactImageZoom {...props} />
                  </div>
                  <div className="other-product-image d-flex flex-wrap gap-15">
                    {productState?.images.map((item, index) => {
                      return (
                        <div key={index}>
                          <img
                            src={
                              item?.url
                                ? item?.url
                                : "https://images.pexels.com/photos/9898190/pexels-photo-9898190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            }
                            alt={item?.title}
                            className="img-fluid"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="main-product-details">
                  <div className="border-bottom">
                    <h5 className="product-title mb-3">
                      {productState?.title}
                    </h5>
                  </div>
                  <div className="border-bottom py-3">
                    <p className="price">${productState?.price}</p>

                    <div className="">
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={productState?.totalrating}
                          edit={false}
                          activeColor="#ffd700"
                          classNames="stars"
                        />
                        <p className="mb-0 t-review">( 2 Reviews)</p>
                      </div>
                    </div>
                    <a href="#review" className="text-dark   review-btn">
                      Write a Review
                    </a>
                  </div>
                  <div className=" py-2 ">
                    <div className="d-flex gap-10 align-items-center my-3">
                      <h3 className="product-heading">Type:</h3>
                      <p className="product-data">{productState?.type}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-3">
                      <h3 className="product-heading">Brand:</h3>
                      <p className="product-data">{productState?.brand}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-3">
                      <h3 className="product-heading">Category:</h3>
                      <p className="product-data">{productState?.category}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-3">
                      <h3 className="product-heading">Tags:</h3>
                      <p className="product-data">{productState?.tags}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-3">
                      <h3 className="product-heading">Availablity:</h3>
                      <p className="product-data">In Stock</p>
                    </div>
                    <div className="d-flex gap-10 flex-column my-3">
                      <h3 className="product-heading">Size:</h3>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="badge size-box">S</span>
                        <span className="badge size-box">M</span>
                        <span className="badge size-box">L</span>
                        <span className="badge size-box">XL</span>
                        <span className="badge size-box">XXL</span>
                      </div>
                    </div>
                    {alredeyAdded === false && (
                      <>
                        <div className="d-flex gap-10 flex-column my-2">
                          <h3 className="product-heading">Color:</h3>
                          <Colors
                            setColor={setColor}
                            colorData={productState?.color}
                          />
                        </div>
                      </>
                    )}
                    <div className="d-flex gap-15 my-2">
                      {alredeyAdded === false && (
                        <>
                          <h3 className="product-heading d-flex align-items-center">
                            Quantity:
                          </h3>

                          <QTYSelection>
                            <select
                              as="select"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            >
                              {[...Array(productState?.quantity).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </QTYSelection>
                        </>
                      )}

                      <div className="d-flex gap-30 ms-5 align-items-center ">
                        <button
                          onClick={() => {
                            uploadCart(
                              alredeyAdded
                                ? navigate("/cart")
                                : productState?._id
                            );
                          }}
                          type="submit"
                          className="button border-0 "
                        >
                          {alredeyAdded ? "Go To Cart" : "Add to Cart"}
                        </button>
                        <button type="submit" className="button border-0 ">
                          Buy it Now
                        </button>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15 mt-3">
                      <div>
                        <Link to="/compare-product">
                          <BiGitCompare className=" fs-5 me-2" />
                          Add To Compare
                        </Link>
                      </div>
                      <div>
                        <Link to="/wishlist">
                          <AiOutlineHeart className=" fs-5 me-2" />
                          Add To Wishlist
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex gap-10 flex-column my-3">
                      <h3 className="product-heading">Shipping & Returns :</h3>
                      <p className="product-data">
                        Free Shipping and returns available on all orders!{" "}
                        <br />
                        we ship all domestic orders within{" "}
                        <b>5-10 business days!</b>
                      </p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-3">
                      <h3 className="product-heading">Product Links :</h3>
                      <Link
                        onClick={() => copyToClipboard(window.location.href)}
                      >
                        Copy Product Links
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <h4>Description</h4>
                <div className="description-card bg-white p-3">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: productState?.description,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-wrapper py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <h3 id="review">Reviews</h3>
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-center">
                    <div className="mb-2">
                      <h4>Customer Review</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 Reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <Link
                          className="text-dark text-decoration-underline"
                          to=""
                        >
                          Write a Review
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>

                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                        onChange={(e) => {
                          setStar(e);
                        }}
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="w-100 form-control"
                        placeholder="Comments*"
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        onClick={addRatingToProduct}
                        className="button border-0 mt-3"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                  <div className="reviews mt-4">
                    {productState &&
                      productState?.ratings?.map((item, index) => {
                        return (
                          <div key={index} className="review">
                            <div className="d-flex gap-10 align-items-center">
                              <h6 className="mb-0">Ashish Kumar</h6>
                              <ReactStars
                                count={5}
                                size={24}
                                value={item?.star}
                                edit={false}
                                activeColor="#ffd700"
                              />
                            </div>
                            <p className="mt-2">{item?.comment}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomePopularWrapper className="py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
            </div>
            <div className="row">
              <ProductCard data={popularProduct} />
            </div>
          </div>
        </HomePopularWrapper>
      </SingleProductContainer>
    </>
  );
};

export default SingleProduct;
