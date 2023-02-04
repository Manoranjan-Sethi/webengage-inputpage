import React from "react";
import "./ThankYou.css";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="thank">
      <h1>
        Thanks a ton for taking out your precious time and for completing the
        survey
      </h1>
      <h2>{`Email Address 🡪 ${data.email}  `}</h2>
      <h2>{`Contact Number 🡪 ${data.phone}`}</h2>
      <button className="btn-rn" onClick={onClick}>
        Return
      </button>
    </div>
  );
};

export default ThankYou;
