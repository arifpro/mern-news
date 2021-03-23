import { useState, createContext } from "react";
import Modal from "react-modal";
import "./style.css";
import { loginReq } from "./fetchApi";

// icons
import { IoLockClosed, IoMail, IoPerson, IoClose } from "react-icons/io5";

// images
import facebook from '../../assets/loginIcons/facebook.jpg'
import google from '../../assets/loginIcons/google.jpg'
import linkedin from '../../assets/loginIcons/linkedin.jpg'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
  },
};

export const LayoutContext = createContext();

const Login = (props) => {
  const { viewLoginModal, setViewLoginModal } = props;

  return (
    <Modal
      isOpen={viewLoginModal}
      onRequestClose={() => setViewLoginModal(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <LoginDiv setViewLoginModal={setViewLoginModal} closeBtn={true} />
    </Modal>
  );
};

export const LoginDiv = (props) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  // login
  const [data, setData] = useState({
    email: "",
    password: "",
    error: false,
    loading: true,
  });

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    try {
      let responseData = await loginReq({
        email: data.email,
        password: data.password,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
      } else if (responseData.token) {
        setData({ email: "", password: "", loading: false, error: false });
        localStorage.setItem("jwt", JSON.stringify(responseData));
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="navbar__login-div">
        <div className="navbar__login-div-close">
          {props.closeBtn && (
            <button
              type="button"
              onClick={() => props.setViewLoginModal(false)}
            >
              <IoClose />
            </button>
          )}
        </div>
        <div className="navbar__logo" />
        <div className="navbar__title">
          {!isLoginForm ? "Signup " : "Login "}Form
        </div>
        <div className="navbar__sub-title">
          Please fill all required fields!
        </div>
        <div className="navbar__fields">
          {!isLoginForm && (
            <div className="navbar__username">
              <IoPerson />
              <input
                type="text"
                className="navbar__user-input"
                placeholder="name"
              />
            </div>
          )}

          <div className="navbar__username">
            <IoMail />
            <input
              type="email"
              className="navbar__user-input"
              placeholder="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value, error: false });
              }}
            />
          </div>

          <div className="navbar__password">
            <IoLockClosed />
            <input
              type="password"
              className="navbar__pass-input"
              placeholder="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value, error: false });
              }}
            />
          </div>
          {!data.error ? "" : alert(data.error)}

          {!isLoginForm && (
            <div className="navbar__password">
              <IoLockClosed />
              <input
                type="password"
                className="navbar__pass-input"
                placeholder="confirm password"
              />
            </div>
          )}
        </div>

        <button
          type="button"
          className="navbar__signin-button"
          onClick={(e) => formSubmit()}
        >
          {!isLoginForm ? "Signup" : "Login"}
        </button>
        <div className="navbar__link">
          <p>
            {!isLoginForm ? (
              <button type="button" onClick={() => setIsLoginForm(true)}>
                Already have an account? &nbsp;
                <span style={{ fontWeight: "bold" }}>Login</span>
              </button>
            ) : (
              <button type="button" onClick={() => setIsLoginForm(false)}>
                New User? &nbsp;
                <span style={{ fontWeight: "bold" }}>Signup</span>
              </button>
            )}
          </p>
        </div>
        {isLoginForm && (
          <div className="social__link">
            <img src={facebook} alt="fb" />
            <img src={google} alt="google" />
            <img src={linkedin} alt="linkedin" />
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
