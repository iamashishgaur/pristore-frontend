import { styled } from "styled-components";

export const OurStoreContainer = styled.div`
  background-color: var(--homeWrapper-color);
  .filter-card {
    background-color: white;
    border-radius: 10px;
    padding: 15px 15px 25px;
  }
  .filter-card .filter-title {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: var(--text-price);
    margin-bottom: 20px;
  }
  .filter-card ul,
  .filter-card .form-check-label {
    list-style: none;
    font-size: 13px;
    line-height: 30px;
    color: var(--text-price);
    cursor: pointer;
  }
  .filter-card .form-check-input:focus {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.25);
  }
  .filter-card .form-check-input:checked {
    background-color: var(--check-box-color);
    border-color: rgba(0, 0, 0, 0.25);
  }
  .filter-card .subtitle {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-price);
    margin-bottom: 15px;
    margin-top: 20px;
  }

  .random-product h5 {
    font-size: 14px;
    margin-bottom: 8px;
  }
  .random-product:first-child {
    border-bottom: 1px solid #ededed;
  }
  .filter-sort-grid {
    padding: 10px;
    background-color: white;
    border-radius: 10px;
  }
  .grid img {
    width: 30px;
    height: 30px;
    background-color: #f2f2f2;
    border-radius: 3px;
    padding: 8px;
    cursor: pointer;
  }
`;
