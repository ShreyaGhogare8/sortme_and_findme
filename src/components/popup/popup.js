import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Popup = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="popup">
      <div
        onClick={(e) => e.stopPropagation()}
        className={`popup__content ${props.styling}`}
      >
        <div className="popup__content--text">
          <h3 className="popup__title">{props.header}</h3>
          <p>{props.content}</p>
        </div>
        <Link to={props.linkTo} className={`popup__close ${props.styling}`}>
          &times;
        </Link>
      </div>
    </div>,
    document.querySelector("#popup")
  );
};

export default Popup;
