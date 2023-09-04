import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Profilelogin from "./Profilelogin";
import compare from ".././assets/images/compare.svg";
import wishlist from ".././assets/images/wishlist.svg";
import cart from ".././assets/images/cart.svg";
import user from ".././assets/images/user.svg";
import {
  HeaderContainer,
  HeaderMain,
  HeaderNavbar,
} from "../styles/hedaerstyle";
import { getAProduct } from "../features/products/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [paginate, setPaginate] = useState(true);
  const [productOpt, setProductOpt] = useState([]);
  const [total, setTotal] = useState(null);
  const authState = useSelector((state) => state.auth);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const productState = useSelector((state) => state.product.product);
  const navigate = useNavigate();
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index]?.quantity) * Number(cartState[index]?.price);
      setTotal(sum);
    }
  }, [cartState]);

  useEffect(() => {
    let data = [];
    for (let i = 0; i < productState?.length; i++) {
      const element = productState[i];
      data.push({ id: i, prod: element?.id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);
  return (
    <>
      <HeaderContainer>
        <HeaderMain>
          <header className=" py-2">
            <div className="container-xxl wrapper">
              <div className="row align-items-center">
                <div className="col-2">
                  <h2>
                    <Link className="text-white" to="/">
                      Pristore
                    </Link>
                  </h2>
                </div>
                <div className="col-5">
                  <div className="input-group ">
                    <Typeahead
                      id="pagination-example"
                      onPaginate={() => console.log("Results paginated")}
                      options={productOpt}
                      paginate={paginate}
                      minLength={2}
                      labelKey={"name"}
                      placeholder="Search for Product here..."
                      onChange={(selected) => {
                        navigate(`/product/${selected[0]?.prod}`);
                        dispatch(getAProduct(selected[0]?.prod));
                      }}
                    />
                    <span className="input-group-text" id="basic-addon2">
                      <BsSearch className="fs-6" />
                    </span>
                  </div>
                </div>
                <div className="col-5">
                  <div className="header-upper-links d-flex align-items-center justify-content-between">
                    <div>
                      <Link
                        to="/compare-product"
                        className="d-flex  align-items-center gap-10 text-white"
                      >
                        <img src={compare} alt="Compare" />
                        <p className="mb-0">
                          Compare <br />
                          Products
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/wishlist"
                        className="d-flex align-items-center gap-10 text-white"
                      >
                        <img src={wishlist} alt="Wishlist" />
                        <p className="mb-0">
                          Favourite <br />
                          Wishlist
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/cart"
                        className="d-flex align-items-center gap-10 text-white"
                      >
                        <img src={cart} alt="Cart" />
                        <div className="d-flex flex-column gap-10">
                          <span className="badge bg-white text-dark">
                            {cartState?.length ? cartState?.length : 0}
                          </span>
                          <p className="mb-0">$ {total ? total : 0}</p>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={authState?.user === null ? "/login" : ""}
                        className="d-flex align-items-center gap-10 text-white"
                      >
                        <img src={user} alt="User" />
                        {authState?.user === null ? (
                          <p className="mb-0">
                            Log in <br /> My Account
                          </p>
                        ) : (
                          <Profilelogin authState={authState} />
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </HeaderMain>
        <HeaderNavbar className="py-2">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-30">
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src="/images/menu.svg" alt="menu" />
                        <span className="me-5 d-inline-block">
                          Shop Categories
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu "
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link className="dropdown-item text-white" to="/">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" to="/">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" to="/">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-30">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/product">Our Store</NavLink>
                      <NavLink to="/about">About Us</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderNavbar>
      </HeaderContainer>
    </>
  );
};

export default Header;
