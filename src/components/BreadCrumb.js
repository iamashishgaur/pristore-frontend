import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const BreadCrumbContainer = styled.div``;
const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <>
      <BreadCrumbContainer className=" mb-0 py-4">
        <div className="container-xxl wrapper">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0">
                <Link to="/" className="text-dark">
                  Home &nbsp;
                </Link>
                / {title}
              </p>
            </div>
          </div>
        </div>
      </BreadCrumbContainer>
    </>
  );
};

export default BreadCrumb;
