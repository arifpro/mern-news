import { useState } from "react";
import styles from "../../../styles/LoginStyle.module.css";
import NavField from "./NavField";
import {
  loginReq,
  signupReq,
  isAuthenticate,
  isAdmin,
} from "../../../api/authApi";

// icons
import { IoClose } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BiText, BiLink, BiWorld } from "react-icons/bi";

const AddNews = (props) => {
  const [isAddForm, setIsAddForm] = useState(true);

  // login
  const [data, setData] = useState({
    title: "",
    url: "",
    newsSite: "",
    summary: "",
    error: false,
    loading: true,
    success: "",
  });

  const formSubmit = async () => {
    if (isAddForm && (data.email === "" || data.password === "")) {
      alert("All field required.");
    } else if (
      !isAddForm &&
      (data.name === "" || data.email === "" || data.password === "")
    ) {
      alert("All field required.");
    } else {
      setData({ ...data, loading: true });
      try {
        let responseData;

        if (isAddForm) {
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
          <button type="button" onClick={() => props.setViewModal(false)}>
            <IoClose />
          </button>
        )}
      </div>
      <div
        className={styles.navbar__title}
        style={{ marginTop: "3px", fontFamily: "Comic Sans MS" }}
      >
        {!isAddForm ? "Update" : "Add"} News
      </div>
      <section className={styles.navbar__fields}>
        <NavField
          data={data}
          setData={setData}
          name="News Title"
          icon={<BiText />}
        />
        <NavField
          data={data}
          setData={setData}
          name="News Link"
          icon={<BiLink />}
        />
        <NavField
          data={data}
          setData={setData}
          name="News Website Name"
          icon={<BiWorld />}
        />

        <div className={styles.navbar__text} style={{ marginBottom: 0 }}>
          <HiDocumentText />
          <textarea
            placeholder="News Summary"
            className={styles.navbar__user_input}
          />
        </div>
        <p style={{ marginBottom: "26px" }}></p>
      </section>

      <button
        type="button"
        className={styles.navbar__signin_button}
        onClick={(e) => formSubmit()}
        style={{ fontFamily: "Comic Sans MS" }}
      >
        {!isAddForm ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AddNews;
