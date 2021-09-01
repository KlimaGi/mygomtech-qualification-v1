import { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants";
import login from "../../services/login";
import ErrorBlock from "../ErrorBlock";
import {
  usernameValidation,
  passwordValidation,
} from "../../services/formValidation";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>();

  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    usernameValidation(username, setUsernameErr);
    passwordValidation(password, setPasswordErr);

    try {
      await login(username, password);
      history.push(Routes.Users);
    } catch (error) {
      setErrorMessage("Your username or password is incorrect");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Mygom.tech</h1>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          type="text"
          className={`input mt-52px pl-8px ${usernameErr ? "error" : null}`}
        />
        <ErrorBlock error={usernameErr} />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          className={`input mt-24px pl-8px ${passwordErr ? "error" : null}`}
        />
        <ErrorBlock error={passwordErr} />

        <button type="submit" className="button mt-24px">
          Login
        </button>
        <ErrorBlock error={errorMessage} />
      </form>
    </div>
  );
};

export default Login;
