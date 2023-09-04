import { styled } from "styled-components";

export const WishListContainer = styled.div`
  background-color: var(--homeWrapper-color);
  .wishlist-card .cross {
    top: 15px;
    right: 15px;
    width: 20px;
    cursor: pointer;
  }
  .wishlist-card .product-details h5.title {
    font-size: 15px;
    line-height: 22px;
    font-weight: 500;
    color: var(--text-price);
  }
  .wishlist-card .product-details h6.price {
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
    color: var(--text-price);
  }
`;
