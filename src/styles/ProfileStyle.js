import { styled } from "styled-components";

export const ProfileScreenContainer = styled.div`
  width: 100%;
  height: auto;
  background: var(--body);
  /* border: 2px solid red; */
`;
export const ProfileContainer = styled.div`
  background-color: var(--homeWrapper-color);
  width: 100%;
  height: auto;
  padding: 5px 20px;
  gap: 20px;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
`;
export const ProfileLeftSideBar = styled.div`
  border: 2px solid var(--border);
  width: 100%;
  border-radius: 10px;
  height: auto;
  background: white;
`;
export const ProfileTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--homewrapper-color);
  font-size: 16px;
  font-weight: 600;
`;
export const ProfileIMG = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid var(--border);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfileUserName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 10px;
`;

export const ProfileSideNavbar = styled.div``;
export const ProfilePlayGround = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  border: 1px solid var(--border);
`;

export const Navbarcontainer = styled.div`
  margin-top: 1.2rem;
  margin-left: 2rem;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
export const NavMenu = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  & > li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;

    & > a {
      font-size: 16px;
      text-decoration: none;
      color: gray;
    }
    & > svg {
      font-size: 1.5rem;
      color: #f181ce;
    }
  }
`;
export const Logoutcontainer = styled.div`
  margin-top: 3rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  & > span {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    & > svg {
      font-size: 1.5rem;
      color: #f181ce;
    }
    & > p {
      color: gray;
      margin-bottom: 0;
      font-size: 16px;
    }
  }
`;
export const Title = styled.div`
  margin-left: 275px;
  font-size: 14px;
  font-weight: 400;
`;
export const RegisterWrapper = styled.div`
  width: 400px;
  height: auto;
  border-radius: 10px;
`;
export const ProfileWrapper = styled.div`
  display: flex;
`;
