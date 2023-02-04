import React, { useState } from "react";
import "./InfoPage.css";
import bg from "../../assets/bgstyle.png";
import person from "../../assets/human.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  phone: "",
};

const InfoPage = () => {
  const [allData, setAllData] = useState(initialState);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();
  const { email, phone } = allData;

  const onChange = (e) => {
    setAllData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\d{10}$/;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setPhoneError("Invalid phone number");
      return;
    }

    localStorage.setItem("data", JSON.stringify(allData));
    navigate("/thankyou");
  };

  return (
    <div className="flex">
      <div className="image">
        <img className="bg" src={bg} alt="" />
        <img className="person" src={person} alt="" />
      </div>
      <div className="right">
        <img className="logo" src={logo} alt="" />
        <p className="free">Get a FREE</p>
        <p className="cons">consultation with an expert</p>
        <form className="input-box" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            className="input"
            placeholder="Enter your email"
            onChange={onChange}
          />
          {emailError && <div>{emailError}</div>}
          <input
            type="number"
            name="phone"
            value={phone}
            className="input"
            placeholder="Enter your mobile"
            onChange={onChange}
          />
          {phoneError && <div>{phoneError}</div>}
          <button className="btn" type="submit">
            TALK TO US &#x2192;
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoPage;
