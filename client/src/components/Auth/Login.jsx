import { useState, useEffect, createContext } from "react";
import Modal from "react-modal";
import styles from "../../styles/LoginStyle.module.css";
import {
  loginReq,
  signupReq,
  isAuthenticate,
  isAdmin,
} from "../../api/authApi";

// icons
import { IoLockClosed, IoMail, IoPerson, IoClose } from "react-icons/io5";

// images
import facebook from "../../assets/loginIcons/facebook.jpg";
import google from "../../assets/loginIcons/google.jpg";
import linkedin from "../../assets/loginIcons/linkedin.jpg";

const validateEmail = (mail) => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(mail)) return true;
  else return false;
};

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

// export const LayoutContext = createContext();

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

  useEffect(() => {
    // if (isAuthenticate()) {
    //   if (isAdmin()) {
    //     window.location.href = "/dashboard";
    //   }
    // }

    isAuthenticate() && isAdmin() && (window.location.href = "/dashboard");
  }, []);

  // login
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    error: false,
    emailError: false,
    passwordError: false,
    loading: true,
    success: "",
  });

  const formSubmit = async () => {
    if (isLoginForm && (data.email === "" || data.password === "")) {
      alert("All field required.");
    } else if (
      !isLoginForm &&
      (data.name === "" || data.email === "" || data.password === "")
    ) {
      alert("All field required.");
    } else {
      setData({ ...data, loading: true });
      try {
        let responseData;

        if (isLoginForm) {
          responseData = await loginReq({
            email: data.email,
            password: data.password,
          });
        } else {
          responseData = await signupReq({
            name: data.name,
            email: data.email,
            password: data.password,
          });
        }

        if (responseData.success) {
          setData({ ...data, success: responseData.success });
        }

        if (responseData.error) {
          setData({
            ...data,
            loading: false,
            error: responseData.error,
            password: "",
            cPassword: "",
          });
        } else if (responseData.token) {
          setData({
            name: "",
            email: "",
            password: "",
            cPassword: "",
            loading: false,
            error: false,
          });
          localStorage.setItem("jwt", JSON.stringify(responseData));
          window.location.href = "/dashboard";
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.navbar__login_div}>
      <div className={styles.navbar__login_div_close}>
        {props.closeBtn && (
          <button type="button" onClick={() => props.setViewLoginModal(false)}>
            <IoClose />
          </button>
        )}
      </div>
      <div className={styles.navbar__logo} />
      <div className={styles.navbar__title}>
        {!isLoginForm ? "Signup " : "Login "}Form
      </div>
      <div className={styles.navbar__sub_title}>
        Please fill all required fields!
      </div>
      <div className={styles.navbar__fields}>
        {!isLoginForm && (
          <div className={styles.navbar__username} style={{ marginBottom: 0 }}>
            <IoPerson />
            <input
              type="text"
              className={styles.navbar__user_input}
              placeholder="name"
              onChange={(e) => {
                setData({ ...data, name: e.target.value, error: false });
              }}
            />
          </div>
        )}
        {data.error.name && data.error.name !== "" && (
          <p
            style={{
              marginTop: "5px",
              textAlign: "center",
              color: "#e22d2d",
              fontWeight: "bold",
            }}
          >
            {data.error.name}
          </p>
        )}
        <p style={{ marginBottom: "26px" }}></p>

        <div className={styles.navbar__username} style={{ marginBottom: 0 }}>
          <IoMail />
          <input
            type="email"
            className={styles.navbar__user_input}
            placeholder="email"
            onChange={(e) => {
              validateEmail(e.target.value)
                ? setData({ ...data, email: e.target.value, emailError: false })
                : setData({ ...data, email: e.target.value, emailError: true });
            }}
          />
        </div>
        {data.emailError && (
          <p
            style={{
              marginTop: "5px",
              textAlign: "center",
              color: "#e22d2d",
              fontWeight: "bold",
            }}
          >
            Enter a valid email
          </p>
        )}
        {data.error.email && data.error.email !== "" && (
          <p
            style={{
              marginTop: "5px",
              textAlign: "center",
              color: "#e22d2d",
              fontWeight: "bold",
            }}
          >
            {data.error.email}
          </p>
        )}
        <p style={{ marginBottom: "26px" }}></p>

        <div className={styles.navbar__password} style={{ marginBottom: 0 }}>
          <IoLockClosed />
          <input
            type="password"
            className={styles.navbar__pass_input}
            placeholder="password"
            onChange={(e) => {
              setData({ ...data, password: e.target.value, error: false });
            }}
          />
        </div>
        {data.error.password && data.error.password !== "" && (
          <p
            style={{
              marginTop: "5px",
              textAlign: "center",
              color: "#e22d2d",
              fontWeight: "bold",
            }}
          >
            {data.error.password}
          </p>
        )}
        <p style={{ marginBottom: "26px" }}></p>

        {!isLoginForm && (
          <div className={styles.navbar__password} style={{ marginBottom: 0 }}>
            <IoLockClosed />
            <input
              type="password"
              className={styles.navbar__pass_input}
              placeholder="confirm password"
              onChange={(e) => {
                data.password === e.target.value
                  ? setData({
                      ...data,
                      cPassword: e.target.value,
                      passwordError: false,
                    })
                  : setData({
                      ...data,
                      cPassword: e.target.value,
                      passwordError: true,
                    });
              }}
            />
          </div>
        )}
        {!isLoginForm && data.passwordError && (
          <p
            style={{
              marginTop: "5px",
              textAlign: "center",
              color: "#e22d2d",
              fontWeight: "bold",
            }}
          >
            Password didn't match
          </p>
        )}
        {data.success !== "" && (
          <p
            style={{
              marginTop: "5px",
              textAlign: "center",
              color: "#0aaf41",
              fontWeight: "bold",
            }}
          >
            {data.success}
          </p>
        )}
        <p style={{ marginBottom: "26px" }}></p>
      </div>

      <button
        type="button"
        className={styles.navbar__signin_button}
        onClick={(e) => formSubmit()}
      >
        {!isLoginForm ? "Signup" : "Login"}
      </button>
      <div className={styles.navbar__link}>
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
        <div className={styles.social__link}>
          <img src={facebook} alt="fb" />
          <img src={google} alt="google" />
          <img src={linkedin} alt="linkedin" />
        </div>
      )}
    </div>
  );
};

export default Login;
