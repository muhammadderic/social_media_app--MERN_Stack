import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorPassword(false);
    if (passwordAgain !== password) {
      setErrorPassword(true);
    } else {
      const user = {
        username,
        email,
        password,
      }
      try {
        await fetch("http://localhost:5000/api/v1/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
        })
          .then(navigate("/login"));
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Dericsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Dericsocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              required
              value={username}
              className="loginInput"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Email"
              required
              value={email}
              className="loginInput"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              required
              value={password}
              className="loginInput"
              type="password"
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className={errorPassword ? "errorPassword" : "showErrorPassword"}>Password is not same</p>
            <input
              placeholder="Password Again"
              required
              value={passwordAgain}
              className="loginInput"
              type="password"
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}