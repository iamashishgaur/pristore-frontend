import { styled } from "styled-components";

export const CartContainer = styled.div`
  background-color: var(--homeWrapper-color);
  .cart-item-wrapper {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  }
  .cart-item-wrapper .cart-header {
    border-bottom: 1px solid #eaeaea;
  }
  .cart-item-wrapper h4 {
    font-size: 13px;
    color: var(--color-777777);
  }

  .cart-item-wrapper .size-box {
    border: 1px solid var(--text-price);
    background-color: white;
    color: var(--text-price);
    cursor: pointer;
    padding: 7px 10px;
  }

  .cart-col-1 {
    width: 50%;
  }
  .cart-col-1 p {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.2px;
    color: #514c4c;
    line-height: 18px;
  }
  .cart-col-2 {
    width: 10%;
  }
  .cart-col-3 {
    width: 15%;
    text-align: center;
    justify-content: center;
  }
  .cart-col-4 {
    width: 10%;
    text-align: center;
  }
  .cart-col-5 {
    width: 10%;
    text-align: center;
    justify-content: center;
  }
  .cart-item-wrapper .border-bottom {
    border-bottom: 1px solid var(--text-price);
  }
  .cart-item-wrapper .svg {
    cursor: pointer;
    font-size: 25px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    transition: 0.3s;
    background-color: var(--homeWrapper-color);
    padding: 10px;
    color: var(--text-price);
  }
  .cart-item-wrapper .svg:hover {
    background-color: red;
    color: white;
    transition: 0.3s;
  }

  .cart-item-wrapper .svg:hover {
    &:nth-child(2) {
      background-color: green;
      color: white;
    }
  }
  /* cart summary css start*/
  .summary-wrapper {
    background-color: white;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .product-heading {
    font-size: 17px;
    color: #777777;
    margin-bottom: 0;
    font-weight: 500;
  }
  .product-data {
    font-size: 14px;
    color: var(--text-price);
    margin-bottom: 0;
  }
  .bg {
    width: auto;
    border-radius: 10px;
    background-color: var(--homeWrapper-color);
    padding: 10px;
    color: var(--text-price);
  }
`;

// item container css

export const CortItemContainer = styled.div``;
