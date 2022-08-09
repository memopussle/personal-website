import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Popup.scss";
import img1 from "../../../img/travel-thumbnail.png";
import { FaGithub, FaYoutube } from "react-icons/fa";

const Popup = ({ popUp, setPopUp }) => {

  const closePopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <div className="container">

        <div className="modal">
          <div className="modal__content ">
            <div className="flex space-between">
              <h4 className="secondary-font font-weight-normal">Tui Meke NZ</h4>

              <button className="transparent-button" onClick={closePopUp}>
                <AiOutlineClose size={30} />
              </button>
            </div>
            <img src={img1} alt="first project" className="popup__img" />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
            <br />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
 
    </div>
  );
};

export default Popup;
