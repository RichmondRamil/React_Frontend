import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import axios from "../../api/axios";
import "./register.scss";
import { Tick } from "../../assets";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const FNAME_REGEX = /^[A-Z][a-z]{0,23}$/;
const LNAME_REGEX = /^[A-Z][a-z]{0,23}$/;
const AGE_REGEX = /^[0-9]{1,3}$/;
const POSITION_REGEX = /^^[a-zA-Z0-9_ ]{3,23}$/;
// eslint-disable-next-line
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [validFirstname, setValidFirstname] = useState(false);
  const [firstnameFocus, setFirstnameFocus] = useState(false);

  const [lastname, setLastname] = useState("");
  const [validLastname, setValidLastname] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);

  const [age, setAge] = useState("");
  const [validAge, setValidAge] = useState(false);
  const [ageFocus, setAgeFocus] = useState(false);

  const [position, setPosition] = useState("");
  const [validPosition, setValidPosition] = useState(false);
  const [positionFocus, setPositionFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [check, setCheck] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
    setValidFirstname(FNAME_REGEX.test(firstname));
    setValidLastname(LNAME_REGEX.test(lastname));
    setValidAge(AGE_REGEX.test(age));
    setValidPosition(POSITION_REGEX.test(position));
    setValidEmail(EMAIL_REGEX.test(email));
  }, [user, firstname, lastname, age, position, email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, firstname, lastname, age, position, email, pwd, matchPwd]);

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = FNAME_REGEX.test(firstname);
    const v3 = LNAME_REGEX.test(lastname);
    const v4 = AGE_REGEX.test(age);
    const v5 = POSITION_REGEX.test(position);
    const v6 = EMAIL_REGEX.test(email);
    const v7 = PWD_REGEX.test(pwd);

    if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6 || !v7) {
      setErrMsg("Invalid Entry");
      return;
    }
    if (check === false) {
      setErrMsg("Needs to agree with Terms and Regulations");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          username: user,
          firstname,
          lastname,
          age,
          position,
          email,
          password: pwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //Clear input fields
    } catch (error) {
      if (!error.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <section className="success">
          <div className="success-container">
            <h1>Success!</h1>
            <img src={Tick} alt="" />
            <p>
              <Link to="/login">Login</Link>
            </p>
          </div>
        </section>
      ) : (
        <div className="register-container">
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="register-title">
              <h1>Sign Up New Account</h1>
              <p>
                Already have an account?
                <span>
                  <Link to="/login">Sign in</Link>
                </span>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="left">
                  <div className="input">
                    <label htmlFor="username">
                      Username
                      <span className={validName ? "valid" : "hide"}>
                        <CheckCircleIcon className="icon" />
                      </span>
                      <span className={validName || !user ? "hide" : "invalid"}>
                        <CancelIcon className="icon" />
                      </span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="usernamenote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                  </div>
                  <p
                    id="usernamenote"
                    className={
                      userFocus && user && !validName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <InfoIcon className="icon" />
                    4 to 24 Characters. <br />
                    Must begin with a letter. <br />
                    Letters, numbers, underscores and hyphens are allowed
                  </p>
                  <div className="input">
                    <label htmlFor="firstname">
                      Firstname
                      <span className={validFirstname ? "valid" : "hide"}>
                        <CheckCircleIcon className="icon" />
                      </span>
                      <span
                        className={
                          validFirstname || !firstname ? "hide" : "invalid"
                        }
                      >
                        <CancelIcon className="icon" />
                      </span>
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                      aria-invalid={validFirstname ? "false" : "true"}
                      aria-describedby="firstnamenote"
                      onFocus={() => setFirstnameFocus(true)}
                      onBlur={() => setFirstnameFocus(false)}
                    />
                  </div>
                  <p
                    id="firstnamenote"
                    className={
                      firstnameFocus && firstname && !validFirstname
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <InfoIcon className="icon" />
                    1 to 24 Characters. <br />
                    Must begin with a Capital letter. <br />
                  </p>
                  <div className="input">
                    <label htmlFor="lastname">
                      Lastname
                      <span className={validLastname ? "valid" : "hide"}>
                        <CheckCircleIcon className="icon" />
                      </span>
                      <span
                        className={
                          validLastname || !lastname ? "hide" : "invalid"
                        }
                      >
                        <CancelIcon className="icon" />
                      </span>
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setLastname(e.target.value)}
                      required
                      aria-invalid={validLastname ? "false" : "true"}
                      aria-describedby="lastnamenote"
                      onFocus={() => setLastnameFocus(true)}
                      onBlur={() => setLastnameFocus(false)}
                    />
                  </div>
                  <p
                    id="lastnamenote"
                    className={
                      lastnameFocus && lastname && !validLastname
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <InfoIcon className="icon" />
                    1 to 24 Characters. <br />
                    Must begin with a Capital letter. <br />
                  </p>
                  <div className="input">
                    <label htmlFor="age">
                      Age
                      <span className={validAge ? "valid" : "hide"}>
                        <CheckCircleIcon className="icon" />
                      </span>
                      <span className={validAge || !age ? "hide" : "invalid"}>
                        <CancelIcon className="icon" />
                      </span>
                    </label>
                    <input
                      type="text"
                      id="age"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setAge(e.target.value)}
                      required
                      aria-invalid={validAge ? "false" : "true"}
                      aria-describedby="agenote"
                      onFocus={() => setAgeFocus(true)}
                      onBlur={() => setAgeFocus(false)}
                    />
                  </div>
                  <p
                    id="agenote"
                    className={
                      ageFocus && age && !validAge
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <InfoIcon className="icon" />
                    1 to 3 Characters. <br />
                    Input must be a number.
                  </p>
                </div>
                <div className="right">
                  {" "}
                  <div className="input">
                    <label htmlFor="position">
                      Position
                      <span className={validPosition ? "valid" : "hide"}>
                        <CheckCircleIcon className="icon" />
                      </span>
                      <span
                        className={
                          validPosition || !position ? "hide" : "invalid"
                        }
                      >
                        <CancelIcon className="icon" />
                      </span>
                    </label>
                    <input
                      type="text"
                      id="position"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setPosition(e.target.value)}
                      required
                      aria-invalid={validPosition ? "false" : "true"}
                      aria-describedby="positionnote"
                      onFocus={() => setPositionFocus(true)}
                      onBlur={() => setPositionFocus(false)}
                    />
                  </div>
                  <p
                    id="positionnote"
                    className={
                      positionFocus && position && !validPosition
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <InfoIcon className="icon" />
                    1 to 24 Characters. <br />
                    Input must begin with capital letter. <br />
                    It allows spaces
                  </p>
                  <div className="input">
                    <label htmlFor="email">
                      Email
                      <span className={validEmail ? "valid" : "hide"}>
                        <CheckCircleIcon className="icon" />
                      </span>
                      <span
                        className={validEmail || !email ? "hide" : "invalid"}
                      >
                        <CancelIcon className="icon" />
                      </span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="emailnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                  </div>
                  <p
                    id="emailnote"
                    className={
                      emailFocus && email && !validEmail
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <InfoIcon className="icon" />
                    1 to 24 Characters. <br />
                    Must have a @ and .com <br />
                  </p>
                  <div className="input">
                    <label htmlFor="password">
                      Password
                      <span className={validPwd ? "valid" : "hide"}>
                        <CheckCircleIcon className="icon" />
                      </span>
                      <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <CancelIcon className="icon" />
                      </span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                  </div>
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd ? "instructions" : "offscreen"
                    }
                  >

                    <InfoIcon className="icon" />
                    8 to 24 Characters. <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character. <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!,</span>
                    <span aria-label="at symbl">@,</span>
                    <span aria-label="hashtag">#,</span>
                    <span aria-label="dollar sign">$,</span>
                    <span aria-label="percent">%</span>
                  </p>
                  <div className="input">
                    <label htmlFor="confirm_pwd">
                      Confirm Password
                      <span
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      >
                        <CheckCircleIcon className="icon" />
                      </span>
                      <span
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      >
                        <CancelIcon className="icon" />
                      </span>
                    </label>
                    <input
                      type="password"
                      id="confirm_pwd"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />
                  </div>
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }
                  >
                    <InfoIcon className="icon" />
                    Must match the first password input field
                  </p>
                </div>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" id="checkbox" onClick={handleCheck} />
                <p>
                  I agree with <span>Terms of Service</span> and
                  <span>Privacy Policy</span>
                </p>
              </div>
              <button
                disabled={
                  !validName ||
                  !validFirstname ||
                  !validLastname ||
                  !validAge ||
                  !validPosition ||
                  !validEmail ||
                  !validPwd ||
                  !validMatch
                    ? true
                    : false
                }
              >
                Create an Account
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Register;
