import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigateTo = useNavigate();

  const loginSuccess = async () => {
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      });
      navigateTo("/");
      setEmail("");
      setPassword("");
      setError(null);
      props.setToken(response.data.token);
      props.setUserName(response.data.name);
    } catch (e) {
      console.log(e);
      if (e.response.status === 422) {
        setError("Incorrect email/password");
      }
    }
  };

  return (
    <div className="form">
      <h3>Sign in</h3>
      <form>
        <div className="container">
          <div className="form-a">
            <input
              type="text"
              placeholder="username/email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="form-a">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
          </div>
          <button type="button" onClick={loginSuccess}>
            Log in
          </button>
          {error ? <h5>{error}</h5> : <></>}
        </div>
        <div>
          <p>Forgot password?</p>
        </div>
      </form>
      <div>
        <p>Don't have an account yet?</p>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export { LoginPage };
