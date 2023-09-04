import React from "react";
import {
  Logoutcontainer,
  NavMenu,
  Navbarcontainer,
  ProfileContainer,
  ProfileLeftSideBar,
  ProfilePlayGround,
  ProfileScreenContainer,
  ProfileSideNavbar,
  ProfileTitle,
  ProfileUserName,
} from "../styles/ProfileStyle";
import { AiOutlineLogout } from "react-icons/ai";
import { Sidenavbardata } from "./sidenavbar";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileLayout = ({ children }) => {
  const authState = useSelector((state) => state.auth);

  const logoutHandle = () => {
    localStorage.clear();
    window.location.reload();
    toast.success("Logout Successfully");
  };
  return (
    <>
      <ProfileScreenContainer>
        <ProfileContainer>
          <ProfileLeftSideBar>
            <ProfileTitle>
              <ProfileUserName>
                <h4>Welcome</h4>
                <h5 className="mb-0">
                  {authState?.user.firstname + " " + authState?.user.lastname}
                </h5>
              </ProfileUserName>
            </ProfileTitle>
            <ProfileSideNavbar>
              <Navbarcontainer>
                {Sidenavbardata.map((item, index) => {
                  return (
                    <NavMenu>
                      <li key={index}>
                        {item.icon}
                        <Link to={item.path}>{item.navname}</Link>
                      </li>
                    </NavMenu>
                  );
                })}
              </Navbarcontainer>
              <Logoutcontainer>
                <span onClick={logoutHandle}>
                  <AiOutlineLogout /> <p>Logout</p>
                </span>
              </Logoutcontainer>
            </ProfileSideNavbar>
          </ProfileLeftSideBar>
          <ProfilePlayGround>{children}</ProfilePlayGround>
        </ProfileContainer>
      </ProfileScreenContainer>
    </>
  );
};

export default ProfileLayout;
