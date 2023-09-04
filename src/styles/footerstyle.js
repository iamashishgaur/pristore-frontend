import { styled } from "styled-components";

export const FooterContainer = styled.div`
  background: var(--footer-color);

  footer:not(:first-child) {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .input-group-text {
    background-color: var(--background-color);
    padding: 8px 17px;
    color: white;
    cursor: pointer;
    /* border: none; */
    outline: none;
  }
`;
