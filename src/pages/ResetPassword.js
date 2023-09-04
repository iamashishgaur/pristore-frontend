import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { ForgetPasswordContainer } from "../styles/Loginstyle";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <ForgetPasswordContainer>
        <div className="login-wrapper  py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <div className="auth-card">
                  <h3 className="text-center">Reset Password</h3>

                  <form action="">
                    <div class="mb-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        class="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        value={password}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                      />
                    </div>
                    <div class="mb-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        class="form-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        value={password}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Confirm password"
                      />
                    </div>
                    <div>
                      <div className="d-flex flex-column justify-content-center align-items-center gap-15">
                        <button
                          type="submit"
                          className="button border-0 w-50 mt-3 text-lg"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ForgetPasswordContainer>
    </>
  );
};

export default ResetPassword;
