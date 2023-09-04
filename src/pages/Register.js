import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { RegisterContainer } from "../styles/Loginstyle";
import { NotAccount } from "../styles/userFormStyle";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
const signUpSchema = yup.object({
  firstname: yup.string().required("first name is Required"),
  lastname: yup.string().required("last name is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile No is Required"),
  password: yup.string().required("Password is Required"),
});
const Register = () => {
  const nav = useNavigate();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  // useEffect(() => {
  //   if (authState.createdUser !== null && authState.isError === false) {
  //     navigate("/login");
  //   }
  // }, [authState]);
  return (
    <>
      <Meta title={"Register"} />
      <BreadCrumb title="Register" />
      <RegisterContainer>
        <div className="login-wrapper py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <div className="auth-card">
                  <h3 className="text-center mb-3">Create Account</h3>
                  <form
                    action=""
                    className="d-flex gap-15 flex-wrap justify-content-between"
                    onSubmit={formik.handleSubmit}
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
                        className="form-control"
                        name="firstname"
                        placeholder="Enter First Name"
                        value={formik.values.firstname}
                        onChange={formik.handleChange("firstname")}
                        onBlur={formik.handleBlur("firstname")}
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
                        className="form-control"
                        name="lastname"
                        id="name"
                        placeholder="Enter Last Name"
                        value={formik.values.lastname}
                        onChange={formik.handleChange("lastname")}
                        onBlur={formik.handleBlur("lastname")}
                      />
                      <div className="error">
                        {formik.touched.lastname && formik.errors.lastname}
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
                        className="form-control"
                        id="number"
                        placeholder="Enter Mobil Number"
                        value={formik.values.mobile}
                        onChange={formik.handleChange("mobile")}
                        onBlur={formik.handleBlur("firstname")}
                      />
                      <div className="error">
                        {formik.touched.mobile && formik.errors.mobile}
                      </div>
                    </div>

                    <div className="mb-2 w-100">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                      />
                      <div className="error">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>
                    <div className="mb-2 w-100">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="password"
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                      />
                      <div className="error">
                        {" "}
                        {formik.touched.password && formik.errors.password}
                      </div>
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                      <button
                        type="submit"
                        className="button border-0 w-50 mt-2  d-flex justify-content-center text-lg"
                      >
                        Register
                      </button>
                    </div>
                    <div>
                      <NotAccount>
                        <span className="text-center">Already an account </span>
                        <Link to="/login">Login</Link>
                      </NotAccount>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register;
