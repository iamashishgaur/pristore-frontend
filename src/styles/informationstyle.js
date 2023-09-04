import { styled } from "styled-components";

export const InformationContainer = styled.div`
  background-color: var(--homeWrapper-color);
  .information-left-details .breadcrumb {
    display: flex;
    align-items: center;
  }
  .information-left-details,
  .product-information {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
  /* .information-left-details .active {
    color: blue;
  } */
  .cart-col-1 p {
    font-size: 13px;
    line-height: 20px;
    color: #777777;
  }
  .product-information .image {
    width: 20% !important;
  }
  .information-left-details h4 {
    font-weight: 400;
  }
  .information-left-details p {
    color: #777777;
  }
  .information-left-details .title-color {
    color: #777777;
  }
`;
