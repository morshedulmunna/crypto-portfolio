import "./Head.css";
import image from "../../images/dash-bg.png";
import { BsPlayFill } from "react-icons/bs";
import { Fade } from "react-reveal";

const Head = () => {
  return (
    <>
      <div className="Header">
        <div className="head__content">
          <Fade top>
            <h1>
              Managing your crypto portfolio <span>has never been easier</span>
            </h1>
          </Fade>
          <Fade bottom>
            <p>
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
            <div className="button">
              <button className="Start">Get Start</button>
              <div id="play-icon">
                <i>
                  <BsPlayFill />
                </i>
              </div>
              <button id="how-works">See How it Works</button>
            </div>
          </Fade>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Head;
