import "./Company.css";
import CompanyLogo from "./CompanyLogo";

const Company = () => {
  return (
    <div className="companay container">
      <p>Over 32k+ software businesses growing with AR Shakir.</p>
      <div className="companyLogo">
        <CompanyLogo />
        <CompanyLogo />
        <CompanyLogo />
        <CompanyLogo />
        <CompanyLogo />
        <CompanyLogo />
      </div>
    </div>
  );
};

export default Company;
