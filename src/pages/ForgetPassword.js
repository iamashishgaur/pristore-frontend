import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { ForgetPasswordContainer } from "../styles/Loginstyle";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { forgotPasswordToken } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
const emailSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
const ForgetPassword = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      alert("hello");
      dispatch(forgotPasswordToken(values));
    },
  });
  const hanforget = () => {
    dispatch(forgotPasswordToken());
  };
  return (
    <>
      <Meta title={"Forget Password"} />
      <BreadCrumb title="Forget Password" />
      <ForgetPasswordContainer>
        <div className="login-wrapper  py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <div className="auth-card">
                  <h3 className="text-center">Reset Your Password</h3>
                  <p className="text-center mt-2 mb-3">
                    We will Send email to reset your password
                  </p>
                  <form action="" onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                      />
                      <div className="error text-center">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center gap-15">
                      <button
                        onClick={hanforget}
                        type="submit"
                        className="button border-0 w-50 mt-3 text-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <Link
                    className="mt-2"
                    to="/login"
                    style={{
                      fontSize: "13px",
                      color: "blue",
                    }}
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ForgetPasswordContainer>
    </>
  );
};

export default ForgetPassword;
