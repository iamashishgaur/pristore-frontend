import { styled } from "styled-components";
export const CompareProductContainer = styled.div`
  background-color: var(--homeWrapper-color);
  .compare-product-card {
    padding: 20px 15px 0px;
    background-color: white;
    border-radius: 10px;
  }
  .compare-product-card .cross {
    top: 15px;
    right: 15px;
    width: 20px;
    cursor: pointer;
  }
  .compare-product-details h5.title {
    font-size: 15px;
    line-height: 22px;
    font-weight: 500;
    color: var(--text-price);
  }
  .compare-product-details h6.price {
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
    color: var(--text-price);
  }
  .compare-product-card .product-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
