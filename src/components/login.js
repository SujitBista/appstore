import React,{ useState } from "react";
import {useNavigate} from "react-router-dom";
import "../css/styles.css";

const database = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};


function Login({ setIsAuthenticated }) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log('handleSubmit')
    console.log(document.forms[0]);
    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    console.log(userData)
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsAuthenticated(true);
        navigate('/admin')
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {
           renderForm
        }
      </div>
    </div>
  );
}

export default Login;