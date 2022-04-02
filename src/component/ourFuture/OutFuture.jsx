import "./OutFuture.css";
import futureImage from "../../images/Illustration.png";
import futureCard from "../../images/card.png";
import { Flip, Slide, Zoom } from "react-reveal";
const OutFuture = () => {
  return (
    <div className="container">
      <div className="future__wrapper">
        <Slide left>
          <img src={futureImage} alt="" />
        </Slide>

        <Slide right>
          <div className="future__content">
            <h2>Our Feature</h2>
            <Flip left>
              <h1>
                All of your portfolios are linked to your AR Shakir account
              </h1>
            </Flip>

            <Zoom left>
              <p>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.
              </p>
            </Zoom>

            <button>Get Started</button>
          </div>
        </Slide>
      </div>
      {/* 2nd */}
      <div className="future__wrapper">
        <Slide right>
          <div className="future__content">
            <h2>Our Feature</h2>
            <Flip left>
              <h1>
                All of your portfolios are linked to your AR Shakir account
              </h1>
            </Flip>
            <Zoom left>
              <p>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.
              </p>
            </Zoom>

            <button>Get Started</button>
          </div>
        </Slide>
        <Slide left>
          <img src={futureCard} alt="" />
        </Slide>
      </div>
    </div>
  );
};

export default OutFuture;
