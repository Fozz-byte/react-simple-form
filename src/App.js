import React, { useState } from "react";
import "./index.css";
import storefrontlogo from "./images/storefront_logo.png";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

const [submitted, setSubmitted] = useState(false);
const [valid, setValid] = useState(false);

const handleFirstNameInputChange = (event) => {
  setValues({...values, firstName: event.target.value})
}

const handleLastNameInputChange = (event) => {
  setValues({...values, lastName: event.target.value})
}

const handleEmailInputChange = (event) => {
  setValues({...values, email: event.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault();
  if(values.firstName && values.lastName && values.email) {
    setValid(true);
  }
  setSubmitted(true);
}
  return (
    <div className="form-container">
      <div className="logo">
        <img
          src={storefrontlogo}
          alt="logo"
          style={{ width: "200px", height: "35px" }}
        />
      </div>
      <div className="para"><p> Please input your details below</p></div>
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
