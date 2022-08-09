import React, { useEffect, useState } from "react";
import pic from "./logo1.png";
import { useNavigate } from "react-router-dom";


function loginForm() {
  const navigate = useNavigate();
  const forgotpassword = () => {
    navigate("/forgot");
  };
  
  
  const [theme, setTheme] = useState("Light");
  const [colors, setColors] = useState({
    HeadingColor: "",
    backgroundColor: "white",
    textColor: "",
    button: "black",
   buttonTextColor:"white",
   placeholderBackgroundColor:"white",
  });

  const ChangeColor = () => {
    if (theme === "Light") {
      setColors({
        HeadingColor: Light.HeadingColor,
        backgroundColor: Light.backgroundColor,
        textColor: Light.textColor,
        button: Light.button,
        buttonTextColor: Light.buttonTextColor,
        placeholderBackgroundColor: Light.placeholderBackgroundColor,
      });
    } else if (theme === "Cosmic") {
      setColors({
        HeadingColor: Cosmic.HeadingColor,
        backgroundColor: Cosmic.backgroundColor,
        textColor: Cosmic.textColor,
        button: Cosmic.button,
        buttonTextColor: Cosmic.buttonTextColor,
        placeholderBackgroundColor: Cosmic.placeholderBackgroundColor,
      });
    } else if (theme === "Corporate") {
      setColors({
        HeadingColor: Corporate.HeadingColor,
        backgroundColor: Corporate.backgroundColor,
        textColor: Corporate.textColor,
        button: Corporate.button,
        buttonTextColor: Corporate.buttonTextColor,
        placeholderBackgroundColor: Corporate.placeholderBackgroundColor,
      });
    } else if (theme === "Dark") {
      setColors({
        HeadingColor: Dark.HeadingColor,
        backgroundColor: Dark.backgroundColor,
        textColor: Dark.textColor,
        button: Dark.button,
        buttonTextColor: Dark.buttonTextColor,
        placeholderBackgroundColor: Dark.placeholderBackgroundColor,
      });
    }
  };


  const Light = {
    HeadingColor: "black",
    backgroundColor: "white",
    textColor: "Black",
    button: "black",
    buttonTextColor: "white",
    placeholderBackgroundColor: "white"
  };
  const Dark = {
    HeadingColor: "white",
    backgroundColor: "#222b45",
    textColor: "white",
    button: "#36f",
    buttonTextColor: "white",
    placeholderBackgroundColor: "#192038"   
  };
  const Cosmic = {
    HeadingColor: "white",
    backgroundColor: "#323259",
    textColor: "white",
    button: "#a16eff",
    buttonTextColor: "white",
    placeholderBackgroundColor: "white"
  };
  const Corporate = {
    HeadingColor: "#222b45",
    backgroundColor: "white",
    textColor: "Black",
    button: "black",
    buttonTextColor: "white",
    placeholderBackgroundColor: "white"
  };

  const Styles = {
    HeadingColor: colors.HeadingColor,
    backgroundColor: colors.backgroundColor,
    textColor: colors.textColor,
    button: colors.button,
    buttonTextColor: colors.buttonTextColor,
    placeholderBackgroundColor: colors.placeholderBackgroundColor
  };

  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [terms, setTerms] = useState(false);


  const validateStep = () => {
    var emailRegrex = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (email.length === 0 && password.length === 0) {
      setpasswordError("*Please enter password");
      setemailError("*Please enter Email");
    } else if (!emailRegrex.test(email)) {
      console.log("right emal");
      setemailError("*Please enter valid email address");
    } else if (password.length === 0) {
      setpasswordError("*Please enter password");
    }
  };

  useEffect(() => {
    ChangeColor();
  }, [theme]);

  return (
    <div className="container">
      <style>{"body {background-color:" + Styles.backgroundColor + ";"}</style>
      <div className="logo-container">
        <img src={pic} alt="logo1" className="logo" />
        
        <h2 className="title" style={{color:Styles.HeadingColor}}>We love creative Business Ideas</h2>
      </div>
      <div className="form-container">
        <form>
          <div>
            <div className="form-element">
              <div>
                <label className="content">Email</label>
              </div>
              <input
                placeholder="Enter email"
                className="form-input"
                value={email}
                style={{backgroundColor:Styles.placeholderBackgroundColor}}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError.length > 0 && (
                <span style={{ color: "red" }}>{emailError}</span>
              )}
            </div>

            <div className="form-element">
              <label className="content">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-input"
                style={{backgroundColor:Styles.placeholderBackgroundColor}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError.length > 0 && (
                <span style={{ color: "red" }}>{passwordError}</span>
              )}
            </div>
            <div className="form-element form-password-reset">
              <label className="checkbox-content">
              <input
            type="checkbox"
            name="terms"
            checked={terms}
            onChange={(event) => setTerms(event.target.checked)}
            className="checkbox"
          />
                <i className="link">Remember me</i>
              </label>
              <button onClick={forgotpassword} className="link" style={{color: Styles.textColor}}>
                Forgot password?
              </button>
            </div>
            <div className="form-element form-button">
              <button className="button1 " 
               style={{color:Styles.buttonTextColor,backgroundColor:Styles.button, }}
            onClick={() => validateStep()}
            
            type="button" >Login</button>
            </div>
            <div className="form-element">
              <label className="content">
                Select Theme
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="select-theme"
                  style={{backgroundColor:Styles.placeholderBackgroundColor}}
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>Cosmic</option>
                  <option>Corporate</option>
                </select>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default loginForm;
