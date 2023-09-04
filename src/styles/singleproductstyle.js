import { styled } from "styled-components";

export const SingleProductContainer = styled.div`
  background-color: var(--homeWrapper-color) !important;
  .description-card {
    border-radius: 10px;
  }

  .main-product-image {
    padding: 20px;
    background-color: white;
    border-radius: 10px;
  }
  .main-product-image .js-image-zoom__zoomed-image {
    left: 50px !important;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    z-index: 1000;
  }
  .main-product-image img {
    width: 100% !important;
    object-fit: cover;
  }

  .main-product-image > div {
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  .other-product-image {
    background-color: white;
    padding: 20px;
  }
  .other-product-image > div {
    border: 1px solid rgba(0, 0, 0, 0.25);
    padding: 10px;
    width: 48%;
  }
  .main-product-details {
    padding: 20px;
    border-radius: 10px;
    background-color: white;
  }
  .main-product-details h5.product-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-price);
  }
  .main-product-details p.price {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-price);
  }
  .main-product-details a.review-btn,
  .t-review {
    font-size: 12px;
    color: var(--text-price);
  }
  .main-product-details a {
    font-size: 14px;
    color: #777777;
    gap: 10px;
  }
  .main-product-details .size-box {
    border: 1px solid var(--text-price);
    background-color: white;
    color: var(--text-price);
    cursor: pointer;
    padding: 7px 10px;
  }
  .border-bottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
  /* .main-product-details .stars {
    z-index: 999;
  } */

  .product-heading {
    font-size: 14px;
    color: var(--text-price);
    margin-bottom: 0;
    font-weight: 600;
  }
  .product-data {
    font-size: 13px;
    color: var(--text-price);
    margin-bottom: 0;
  }
  .description-wrapper h4,
  .review-wrapper h3 {
    font-size: 26px;
    color: var(--text-price);
    margin-bottom: 10px;
  }
  .description-wrapper p {
    font-size: 14px;
    color: var(--text-price);
  }
  .review-inner-wrapper {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  }
  .review-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
  }
  .review-head h4 {
    font-size: 18px;
    color: var(--text-price);
  }
  .review-head p {
    font-size: 14px;
    color: var(--text-price);
  }
  .review-form {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .review:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .review-form h4 {
    font-size: 14px;
    color: var(--text-price);
  }
  .reviews .review {
    font-size: 14px;
    color: var(--text-price);
  }
`;
export const QTYSelection = styled.div`
  width: 70px;
  height: 35px;
  box-shadow: 0px 0px 0px 2px var(--border);
  border-radius: 6px;
  margin-top: 7px;
  & > select {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 6px;

    outline: none;
    &:focus,
    &:active {
      box-shadow: 0px 0px 0px 1px var(--button);
    }
  }
`;
