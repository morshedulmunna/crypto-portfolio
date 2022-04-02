import React from "react";
import { Fade } from "react-reveal";
import companyLogo from "../../images/companyLogo.png";

const CompanyLogo = () => {
  return (
    <Fade>
      <div className="companyLogo">
        <img src={companyLogo} alt="" />
      </div>
    </Fade>
  );
};

export default CompanyLogo;
