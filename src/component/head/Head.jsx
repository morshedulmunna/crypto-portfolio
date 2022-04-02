import "./Head.css";
import { BsPlayFill } from "react-icons/bs";

const Head = () => {
  return (
    <>
      <div className="Header">
        <div className="head__content">
          <h1>
            Managing your crypto portfolio <span>has never been easier</span>
          </h1>
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
        </div>
      </div>
    </>
  );
};

export default Head;
