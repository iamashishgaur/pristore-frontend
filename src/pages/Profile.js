import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { ProfileTitle, ProfileWrapper, Title } from "../styles/ProfileStyle";
import ProfileLayout from "../components/ProfileLayout";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { updateUser } from "../features/user/userSlice";

const profileSchema = yup.object({
  firstname: yup.string().required("first name is Required"),
  lastname: yup.string().required("last name is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile No is Required"),
});
const Profile = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state?.auth?.user);
  const [isInputDisabled, setInputDisabled] = useState(true);
  const [edit, setEdit] = useState(true);
  const [isnotsave, setIsNotSave] = useState(false);
  const nav = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userState?.firstname,
      lastname: userState?.lastname,
      mobile: userState?.mobile,
      email: userState?.email,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateUser(values));
      setIsNotSave(false);
    },
  });

  const handleEditClick = () => {
    setInputDisabled(false);
    setIsNotSave(false);
  };

  const handleUpdateClick = () => {
    // Update profile information logic here
    setInputDisabled(true);
    setIsNotSave(true);
  };

  return (
    <>
      <Meta title={"Profile | Pristore"} />
      <BreadCrumb title={"Profile"} />
      <ProfileLayout>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <ProfileWrapper>
                <ProfileTitle>Profile Information</ProfileTitle>
                <Title>
                  {isInputDisabled ? (
                    <Link onClick={handleEditClick}>Edit</Link>
                  ) : (
                    <Link onClick={handleUpdateClick}>Save</Link>
                  )}
                </Title>
              </ProfileWrapper>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="formWrapper mt-4"
              >
                <div className="mb-2 flex-grow-1">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-50"
                    name="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                    disabled={isInputDisabled}
                  />
                  <div className="error">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                </div>
                <div className="mb-2 flex-grow-1">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Last Name
                  </label>
                  <input
                    type="name"
                    className="form-control w-50"
                    name="lastname"
                    id="name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                    disabled={isInputDisabled}
                  />
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control w-50"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    disabled={isInputDisabled}
                  />{" "}
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div className="mb-2 w-100">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control w-50"
                    id="number"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    disabled={isInputDisabled}
                  />{" "}
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>
                <button
                  type="submit"
                  className="button border-0 mt-3 cursor-pointer"
                  disabled={!isnotsave}
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default Profile;
