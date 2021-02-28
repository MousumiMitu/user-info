import React from "react";
import "./Information.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelopeOpenText,
  faPhoneSquareAlt,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";

const Information = (props) => {
  const { name, image, email, phone, username, income } = props.user;
  const handleAddUser = props.handleAddUser;

  return (
    <div className="user-container ">
      <div className="user-box ">
        <div className="user-img">
          <img src={image} alt="" />
        </div>
        <div className="user-info">
          <h3>{name}</h3>
          <h4>
            <small>
              <FontAwesomeIcon icon={faUser} className="icon-margin" />
              User Name: {username}
            </small>
          </h4>
          <div className="Contact-info">
            <h5 style={{ marginRight: "10px" }}>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="icon-margin"
              />
              {email}
            </h5>
            <h5>
              <FontAwesomeIcon
                icon={faPhoneSquareAlt}
                className="icon-margin"
              />
              {phone}
            </h5>
          </div>
          <h5>
            <FontAwesomeIcon icon={faMoneyCheckAlt} className="icon-margin" />
            Annual Income: ${income}
          </h5>
          <button onClick={() => handleAddUser(props.user)}>
            Add to Friendlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
