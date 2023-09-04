import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { WishListContainer } from "../styles/wishliststyle";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";
const WishList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 1000);
  };
  return (
    <>
      <Meta title={"WishList"} />
      <BreadCrumb title="WishList" />
      <WishListContainer>
        <div className="wishlist-wrapper py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              {wishlistState && wishlistState?.length === 0 && (
                <div className="text-center fs-5">No Data</div>
              )}
              {wishlistState &&
                wishlistState?.map((item, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <div className="wishlist-card position-relative">
                        <img
                          onClick={() => {
                            removeFromWishlist(item?._id);
                          }}
                          src="images/cross.svg"
                          className="position-absolute cross img-fluid"
                          alt="cross"
                        />
                        <div className="wishlist-card-image">
                          <img
                            src="images/watch.jpg"
                            className="img-fluid w-100 "
                            alt="Watch"
                          />
                        </div>
                        <div className="product-details px-3 py-3">
                          <h5 className="title">{item?.title}</h5>
                          <h6 className="price">${item?.price}</h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </WishListContainer>
    </>
  );
};

export default WishList;
