import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Popup.scss";
import img1 from "../../../img/travel-thumbnail.png";
import img2 from "../../../img/clothing-shop.png";
import img3 from "../../../img/crypto-website.png";
import { FaGithub, FaYoutube, FaTable } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Popup = ({ popUp, setPopUp }) => {
  let location = useLocation();

  const closePopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      {location.pathname === "/project1" && (
        <div className="modal">
          <div className="modal__content ">
            <div className="flex space-between">
              <h4 className="secondary-font font-weight-normal">Tui Meke NZ</h4>

              <button className="transparent-button" onClick={closePopUp}>
                <Link to="/">
                  <AiOutlineClose size={30} />
                </Link>
              </button>
            </div>
            <img src={img1} alt="first project" className="popup__img" />
            <h5>Built with</h5>
            <p>
              The technologies that I used to build this application include
              React, Nodejs, Express, Mongo Atlas and fetch APIs. This project
              also consumes Google Map Services to display attractions, hotels
              and restaurants at desired locations.For design part, Material UI
              was used to achieve clean and consistent look.
            </p>

            <h5>Features</h5>
            <ul>
              <li>• User-friendly navigation</li>
              <li>• View of available tours</li>
              <li>
                • Users can search for attractions, hotels and restaurants,
                which will show on Google Map.
              </li>
            </ul>

            <div className="project__button">
              <a
                href="https://github.com/memopussle/client_tumeke_nz"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub
                  size={30}
                  style={{ fill: "url(#more-blue-gradient)" }}
                />
              </a>
              <a
                href="https://www.loom.com/share/fc8f98f56a0a47d38568546090dacffb"
                rel="noreferrer"
                target="_blank"
              >
                <FaYoutube
                  size={30}
                  style={{ fill: "url(#more-purple-gradient)" }}
                />
              </a>
              <a
                href="https://clothing-shop-overthesea.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <FaTable size={30} style={{ fill: "url(#purple-gradient)" }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {location.pathname === "/project2" && (
        <div className="modal ">
          <div className="modal__content ">
            <div className="flex space-between">
              <h4 className="secondary-font font-weight-normal">OverTheSea</h4>

              <button className="transparent-button" onClick={closePopUp}>
                <Link to="/">
                  <AiOutlineClose size={30} />
                </Link>
              </button>
            </div>
            <img src={img2} alt="second project" className="popup__img" />
            <h5>Built with</h5>
            <p>
              Technogies that I used to build this application: Nextjs, Sanity,
              Reactjs, JavaScript, Stripe, Context API and Framer Motion.
              Context API simplifies the props by storing them globally. I chose
              Nextjs because this framework can handle both front-end and
              back-end configurations, which are needed for React. Also, I used
              the Sanity.io platform for data storage and content management.
            </p>

            <h5>Features</h5>
            <ul>
              <li>• User-friendly navigation</li>
              <li>• Buy Now and Add To Cart Function</li>
              <li>• Online purchase with Stripe</li>
            </ul>

            <div className="project__button">
              <a
                href="https://github.com/memopussle/Clothing-shop-react"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub
                  size={30}
                  style={{ fill: "url(#more-blue-gradient)" }}
                />
              </a>
              <a
                href="https://www.loom.com/share/713e2c7d96564bbfbe6f9d39c2e08f83"
                rel="noreferrer"
                target="_blank"
              >
                <FaYoutube
                  size={30}
                  style={{ fill: "url(#more-purple-gradient)" }}
                />
              </a>
              <a
                href="https://overthesea-shop-qgqll239p-memopussle.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <FaTable size={30} style={{ fill: "url(#purple-gradient)" }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {location.pathname === "/project3" && (
        <div className="modal">
          <div className="modal__content ">
            <div className="flex space-between">
              <h4 className="secondary-font font-weight-normal">KryptoX</h4>

              <button className="transparent-button" onClick={closePopUp}>
                <Link to="/">
                  <AiOutlineClose size={30} />
                </Link>
              </button>
            </div>
            <img src={img3} alt="third project" className="popup__img" />
            <h5>Built with</h5>
            <p>
              I primarily utilised these technologies to build this project:
              React and JavaScript. I used RTK Query method from Redux Toolkit
              to simplify the existing data fetching logic and Sass to write CSS
              styles faster. Also, I implemented a few small npm packages such
              as hover-effect, chart.js and millify to achieve distortion
              effects and to enhance the overall design.
            </p>

            <h5>Features</h5>
            <ul>
              <li>• User-friendly navigation</li>
              <li>• Search engine for cryptocurrencies and news</li>
              <li>
                • Display the latest cryptocurrency markets, news and top
                selling NFTs
              </li>
            </ul>

            <div className="project__button">
              <a
                href="https://github.com/memopussle/cryptoX-React"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub
                  size={30}
                  style={{ fill: "url(#more-blue-gradient)" }}
                />
              </a>
              <a
                href="https://www.loom.com/share/0e5404b67872492c9c631691f5969651"
                rel="noreferrer"
                target="_blank"
              >
                <FaYoutube
                  size={30}
                  style={{ fill: "url(#more-purple-gradient)" }}
                />
              </a>
              <a
                href="https://luxury-seahorse-505c6e.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <FaTable size={30} style={{ fill: "url(#purple-gradient)" }} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
