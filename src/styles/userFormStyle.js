import styled from "styled-components";
export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid red;
  height: calc(100vh - 60px);
`;
export const RegisterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: calc(100vh - 60px);
  padding: 0 8rem;
`;
export const Errormsg = styled.div`
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;
export const PasswordErrorMessage = styled.div`
  width: 250px;
  height: 105px;
  border-radius: 7px;
  margin-left: 50px;
  position: absolute;
  left: 292px;
  top: 0px;
  font-size: 13px;
  opacity: 0.9;
  padding: 5px;
  background: #99fd99;

  &::before {
    content: "";
    position: absolute;
    top: 41px;
    left: -25px;
    width: 20px;
    height: 20px;
    background-color: #99fd99;
    transform: rotate(45deg);
  }
`;
export const RegisterWrapper = styled.div`
  width: 400px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #5f6368;
  font-family: "Poppins", sans-serif;
`;
export const TitleLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > img {
    width: 30px;
    height: 30px;
  }
  & > a {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--button);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
  height: auto;
  padding: 0 19px;
  margin-top: 1.5rem;
  border-radius: 1.5rem;

  @media (max-width: 768px) {
    width: 303px;
    padding: 10px 20px;
  }
`;

export const NotAccount = styled.div`
  margin-top: 8px;
  text-align: center;
  font-size: 13px;
  & > a {
    &:hover {
      color: var(--button);
    }
  }
`;
export const LockIcon = styled.span`
  right: 15px;
  top: 42px;
  color: #777;
  padding: 2px;
  cursor: pointer;
  position: absolute;

  & > svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: var(--buttonhover);
    border-radius: 2px;
  }
`;
// user style

// export const LoginContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   border: 2px solid red;
//   height: calc(100vh - 60px);
// `;
// export const RegisterContainer = styled.div`
//   width: 100%;
//   border: 2px solid red;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
//   height: calc(100vh - 60px);
//   padding: 0 5rem;
// `;
// export const RegisterWrapper = styled.div`
//   width: 100%;
//   height: 500px;
//   border-radius: 10px;
//   border: 2px solid gray;
//   display: flex;
//   justify-content: space-between;
// `;
// export const RegisterLeft = styled.div`
//   border: 2px solid gray;
// `;
// export const ImageBox = styled.div`
//   border: 2px solid gray;
// `;
// export const RegisterRight = styled.div`
//   border: 2px solid gray;
//   padding: 10px;
// `;
// export const ForgetPassContainer = styled.div`
//   width: 100%;
//   height: calc(100vh - 60px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// export const InputWrapper = styled.div`
//   gap: 7px;
//   width: 100%;
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   & > label {
//     color: #5f6368;
//   }
//   & > svg {
//     position: absolute;
//     top: 34.8%;
//     right: 13%;
//     // display:none;
//   }
// `;

// export const LoginWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `;
// export const HeaderTitle = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   flex-direction: column;
//   align-items: center;
// `;
// export const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: #5f6368;
//   font-family: "Poppins", sans-serif;
// `;
// export const InputText = styled.input`
//   padding: 12px 12px;
//   flex: 1;
//   border-radius: 8px;
//   font-size: 0.8rem;
//   outline: none;
//   border: none;
//   box-shadow: 0px 0px 0px 2px #ddd;
//   &:focus {
//     box-shadow: 0px 0px 0px 2px #e85fab;
//   }
// `;

// export const InputBoxwrapper = styled.div`
//   gap: 25px;
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   & > label {
//     color: #5f6368;
//   }
//   & > svg {
//     position: absolute;
//     top: 60%;
//     right: 5%;
//   }
// `;
// export const Button = styled.button`
//   color: #fff;
//   border: none;
//   outline: none;
//   margin: 2px 8px;
//   padding: 14px 10px;
//   border: 1px solid red;
//   font-size: 1rem;
//   cursor: pointer;
//   border-radius: 4px;
//   width: 40%;
//   margin: 0rem auto;
//   background: #4331ed;
//   &:hover {
//     background: #2d1bdb;
//     box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 10%),
//       0px 1px 4px -1px rgb(0 0 0 / 10%), 0px 1px 7px 1px rgb(0 0 0 / 10%);
//   }
// `;
// export const FormWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 26px;
//   width: 320px;
//   align-items: center;
//   height: auto;
//   margin-top: 2rem;
//   padding: 20px;
//   border-radius: 1rem;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   @media (max-width: 768px) {
//     width: 303px;
//     padding: 10px 20px;
//   }
// `;
// export const HeaderText = styled.div`
//   font-size: 2rem;
//   color: #5f6368;
//   margin-top: 1.5rem;
//   & > span {
//     color: var(--button);
//   }
// `;

// export const Rememberfield = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 12px;
// `;

// export const Loginothers = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 1rem;
//   justify-content: center;
//   gap: 30px;
//   & > svg {
//     font-size: 2rem;
//     cursor: pointer;
//   }
// `;
// export const PasswordErrorMessage = styled.div`
//   width: 250px;
//   height: 105px;
//   border-radius: 7px;
//   margin-left: 50px;
//   position: absolute;
//   left: 292px;
//   top: 0px;
//   font-size: 13px;
//   opacity: 0.9;
//   padding: 5px;
//   background: #99fd99;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 41px;
//     left: -25px;
//     width: 20px;
//     height: 20px;
//     background-color: #99fd99;
//     transform: rotate(45deg);
//   }
// `;
// export const LoginText = styled.div`
//   font-size: 0.8rem;
//   letter-spacing: 2px;
// `;
// export const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 350px;
//   height: auto;
//   padding: 0 19px;
//   margin-top: 1.5rem;
//   border-radius: 1.5rem;

//   @media (max-width: 768px) {
//     width: 303px;
//     padding: 10px 20px;
//   }
// `;
// export const TitleLogo = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   & > img {
//     width: 30px;
//     height: 30px;
//   }
//   & > a {
//     font-size: 1.1rem;
//     font-weight: 500;
//     color: var(--button);
//   }
// `;
// export const Errormsg = styled.div`
//   font-size: 14px;
//   color: red;
//   margin-top: 5px;
// `;
