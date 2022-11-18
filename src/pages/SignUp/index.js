import React, { useState, setState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [inputsError, setInputsError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    const postUser = async () => {
      try {
        const userPostResponse = await axios.post(
          "http://localhost:4000/users",
          {
            name: name,
            email: email,
            password: password,
          }
        );
        if (userPostResponse.status === 200) {
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          navigate("/signUpSuccessful");
          // add navigation to the page
        } else if (userPostResponse.status === 400) {
        }
      } catch (error) {
        console.log("error test:", error.message);
      }
    };
    postUser();
  };

  <button onClick={() => navigate("/doctors")}>Doctors on duty</button>;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-body">
        <div className="name">
          <p> Name: </p>
          <label className="form-label"></label>
          <input
            type="text"
            name=""
            id="name"
            value={name}
            className="form-input"
            onChange={(e) => handleInputChange(e)}
            placeholder="Name"
          />
        </div>
        <div className="email">
          <p> Email: </p>
          <label className="form-label"></label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <p> Password: </p>
          <label className="form-label"></label>
          <input
            className="form-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <p> Confirm password: </p>
          <label className="form-label"></label>
          <input
            className="form-input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="footer">
        <button type="submit" className="btn-form">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
