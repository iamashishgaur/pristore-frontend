import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { LoginContainer } from "../styles/Loginstyle";
import { NotAccount } from "../styles/userFormStyle";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  useEffect(() => {
    if (authState.user !== null && authState.isError === false) {
      navigate("/");
    }
  }, [authState]);
  return (
    <>
      <Meta title={"Login || Pristore"} />

      <LoginContainer>
        <div className="login-wrapper  py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <div className="auth-card">
                  <h3 className="text-center">Login</h3>
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
                      <div className="error">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                      />
                      <div className="error">
                        {formik.touched.password && formik.errors.password}
                      </div>
                    </div>
                    <div>
                      <Link
                        to="/forget-password"
                        style={{
                          fontSize: "13px",
                          color: "blue",
                        }}
                      >
                        Forget Password
                      </Link>
                      <div className="d-flex justify-content-center align-items-center gap-15">
                        <button
                          type="submit"
                          className="button border-0 w-100 mt-3 text-lg"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                    <NotAccount>
                      <span>Not a any account ?</span>
                      <Link to="/register">Register</Link>
                    </NotAccount>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;
