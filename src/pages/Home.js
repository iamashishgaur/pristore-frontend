import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { services } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import SpecialProduct from "../components/SpecialProduct";
import moment from "moment";
import ReactStars from "react-rating-stars-component";
import {
  HomeCategoryWrapper,
  HomeBannerWrapper,
  HomeServiceWrapper,
  HomeCompanyNameMarquee,
  HomeFeaturedWrapper,
  HomeSpecialWrapper,
  HomePopularWrapper,
  HomeFamousWrapper,
} from "../styles/homestyle";
import {
  addToWishlist,
  getAllProducts,
} from "../features/products/productSlice";
import { styled } from "styled-components";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productState = useSelector((state) => state.product.product);
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  const getallProducts = () => {
    dispatch(getAllProducts());
  };
  useEffect(() => {
    getallProducts();
  }, []);

  return (
    <>
      <HomeBannerWrapper className="py-3">
        <div className="container-xxl wrapper">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From ₹999.00 or ₹41.62/mo</p>
                  <Link to="/product" className="button mt-4">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Laptop</h5>
                    <p>From ₹ 25000.00</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Smart Watch</h5>
                    <p>
                      From ₹ 3590.00 <br />
                      or ₹ 41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From ₹ 34499.00</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Headphone</h5>
                    <p>From ₹ 1999.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeBannerWrapper>
      <HomeServiceWrapper className="py-3">
        <div className="container-xxl wrapper px-5">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {services?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex align-items-center gap-15"
                    >
                      <img src={item.images} alt="services  " />
                      <div className="align-items-center">
                        <h6 className="fs-0">{item.tagline}</h6>
                        <p className="mb-0">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </HomeServiceWrapper>
      <HomeCategoryWrapper className="py-3">
        <div className="container-xxl wrapper">
          <div className="row">
            <div className="col-12">
              <div className="category d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>100 Items</p>
                  </div>
                  <img
                    className="img-fluid"
                    width={110}
                    src="images/game.png"
                    alt="Music & Gaming"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>20 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Smart Tv" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>HeadPhone</h6>
                    <p>15 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="HeadPhone" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Home & Furniture</h6>
                    <p>20 Items</p>
                  </div>
                  <img
                    className="img-fluid"
                    width={110}
                    src="images/home.webp"
                    alt="Home & Furniture"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Fashion</h6>
                    <p>70 Items</p>
                  </div>
                  <img
                    className="img-fluid"
                    width={110}
                    src="images/fashion.webp"
                    alt="Fashion"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Electronics</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    className="img-fluid"
                    width={110}
                    src="images/Electronics.webp"
                    alt="Electronics"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Speaker</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    className="img-fluid"
                    width={110}
                    src="images/speaker.jpg"
                    alt="speaker"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeCategoryWrapper>
      <HomeFeaturedWrapper className="py-3">
        <div className="container-xxl wrapper">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading py-2">Featured Collection</h3>
            </div>
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "featured") {
                  return (
                    <ProductCardContainer key={index} className="col-3">
                      <Link
                        to={"/product/" + item?._id}
                        className="product-card position-relative"
                      >
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={(e) => {
                              addToWish(item?._id);
                            }}
                          >
                            <img src="images/wish.svg" alt="wish" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src="images/showcase-img-5.jpg"
                            className="img-fluid"
                            alt="product"
                          />
                          <img
                            src="images/showcase-img-6.jpg"
                            className="img-fluid"
                            alt="product"
                          />
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

                          <p className="price">₹{item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                              <img src="images/prodcompare.svg" alt="compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img
                                onClick={(e) =>
                                  navigate("/product/" + item?._id)
                                }
                                src="images/view.svg"
                                alt="view"
                              />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img src="images/add-cart.svg" alt="addcart" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </ProductCardContainer>
                  );
                }
              })}
          </div>
        </div>
      </HomeFeaturedWrapper>
      {/* <HomeFamousWrapper className="py-3">
        <div className="container-xxl wrapper">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-01.webp" className="img-fluid" alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="brand">Big Screen</h5>
                  <h6 className="product-title">Smart Watch Series 7</h6>
                  <p className="price">From ₹ 399 or ₹ 16.62/mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-01.webp" className="img-fluid" alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="brand">Studio Display</h5>
                  <h6 className="product-title">600 nits of brightness.</h6>
                  <p className="price">27-inch 5K Retina Display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-01.webp" className="img-fluid" alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="brand">Smart Phone</h5>
                  <h6 className="product-title">Smartphone 13 Pro.</h6>
                  <p className="price">From ₹ 399 or ₹ 16.62/mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-01.webp" className="img-fluid" alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="brand">Home Speakers</h5>
                  <h6 className="product-title">Room-filling sound</h6>
                  <p className="price">
                    From ₹ 699 or ₹ 116.62/mo. for 12 mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeFamousWrapper> */}
      <HomeSpecialWrapper className="py-3">
        <div className="container-xxl wrapper">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading py-2"> Special Products </h3>
            </div>
            <div className="row">
              {productState &&
                productState?.map((item, index) => {
                  if (item.tags === "special") {
                    return (
                      <SpecialProduct
                        key={index}
                        id={item?._id}
                        title={item?.title}
                        brand={item?.brand}
                        price={item?.price}
                        totalrating={item?.totalrating.toString()}
                        sold={item?.sold}
                        quantity={item?.quantity}
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </HomeSpecialWrapper>
      <HomePopularWrapper className="py-3">
        <div className="container-xxl wrapper">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading py-2">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "popular") {
                  return (
                    <ProductCardContainer key={index} className="col-3">
                      <Link
                        to={"/product/" + item?._id}
                        className="product-card position-relative"
                      >
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={(e) => {
                              addToWish(item?._id);
                            }}
                          >
                            <img src="images/wish.svg" alt="wish" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src="images/iphone14-1.jpg"
                            className="img-fluid"
                            alt="product"
                          />
                          <img
                            src="images/iphone14-2.jpg"
                            className="img-fluid"
                            alt="product"
                          />
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

                          <p className="price">₹{item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                              <img src="images/prodcompare.svg" alt="compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img
                                onClick={(e) =>
                                  navigate("/product/" + item?._id)
                                }
                                src="images/view.svg"
                                alt="view"
                              />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img src="images/add-cart.svg" alt="addcart" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </ProductCardContainer>
                  );
                }
              })}
          </div>
        </div>
      </HomePopularWrapper>
      <HomeCompanyNameMarquee className="py-3">
        <div className="container-xxl wrapper">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white cart-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </HomeCompanyNameMarquee>
    </>
  );
};

export default Home;
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
