import { styled } from "styled-components";

export const HeaderContainer = styled.div``;
export const HeaderMain = styled.div`
  background-color: var(--header-background);
  .input-group-text {
    background-color: var(--search-bar-background);
    color: white;
    cursor: pointer;
  }
  .header-upper-links a img {
    width: 25px;
    height: 25px;
  }
  .header-upper-links p {
    font-size: 12px;
  }
`;
export const HeaderNavbar = styled.div`
  background-color: var(--navbar-background);
  .menu-links a {
    color: white;
    font-size: 14px;
    line-height: 10px;
    font-weight: 400;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }
  .dropdown button {
    color: white;
    font-size: 14px;
    line-height: 10px;
    font-weight: 400;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }
  .dropdown button:focus {
    box-shadow: none;
  }
  .dropdown-menu {
    background-color: var(--navbar-background);
    width: 100%;
    transform: translate3d(0px, 57px, 0px) !important;
    margin-top: -8px !important;
    border-radius: 0 !important;
  }
  .dropdown-item {
    padding: 12px;
    margin-bottom: 3px;
    border-bottom: 1px solid var(--header-background);
  }
  .dropdown-item:hover {
    background-color: transparent;
    color: var(--search-bar-background);
  }
`;
