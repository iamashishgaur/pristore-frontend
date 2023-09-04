import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { PolicyContainer } from "../styles/PolicyPageStyle";
const TermAndCondition = () => {
  return (
    <>
      <Meta title={"Term & Condition"} />
      <BreadCrumb title="Term & Condition" />
      <PolicyContainer>
        <div className="policy-wrapper py-3">
          <div className="container-xxl wrapper">
            <div className="row">
              <div className="col-12">
                <div className="policy"></div>
              </div>
            </div>
          </div>
        </div>
      </PolicyContainer>
    </>
  );
};

export default TermAndCondition;
