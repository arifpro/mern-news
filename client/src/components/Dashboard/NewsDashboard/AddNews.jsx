import { useState } from "react";
import styles from "../../../styles/LoginStyle.module.css";
import NavField from "./NavField";
import {
  isAuthenticate,
  isAdmin,
} from "../../../api/authApi";

// icons
import { IoClose } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BiText, BiLink, BiWorld } from "react-icons/bi";
import { addNewsReq, editNewsReq } from "../../../api/newsApi";

const AddNews = (props) => {
  const [isAddForm, setIsAddForm] = useState(true);

  // login
  const [data, setData] = useState({
    id: "",
    title: "",
    url: "",
    newsSite: "",
    summary: "",
    error: false,
    loading: true,
    success: "",
  });

  const formSubmit = async () => {
    if (isAuthenticate() && isAdmin()) {
      if (isAddForm && (data.title === "" || data.url === "" || data.newsSite === "" || data.summary === "")) {
        alert("All field required.");
      } else {
        setData({ ...data, loading: true });
        try {
          let responseData;
          
          if (isAddForm) {
            responseData = await addNewsReq({
              title: data.title,
              url: data.url,
              newsSite: data.newsSite,
              summary: data.summary,
            });
          } else {
            responseData = await editNewsReq({
              id: data.id
            });
          }
          
          if (responseData.success) {
            setData({ ...data, success: responseData.success, error: false });
          }

          if (responseData.error) {            
            setData({
              ...data,
              loading: false,
              error: responseData.error,
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setData({...data, error: "You must be logged in", loading: false})
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
          placeholder="News Title"
          name="title"
          icon={<BiText />}
        />
        <NavField
          data={data}
          setData={setData}
          placeholder="News Link"
          name="url"
          icon={<BiLink />}
        />
        <NavField
          data={data}
          setData={setData}
          placeholder="News Website Name"
          name="newsSite"
          icon={<BiWorld />}
        />

        <div className={styles.navbar__text} style={{ marginBottom: 0 }}>
          <HiDocumentText />
          <textarea
            placeholder="News Summary"
            name="summary"
            className={styles.navbar__user_input}
            onChange={(e) => setData({
              ...data,
              [e.target.name]: e.target.value,
              error: false
            })}
          />
        </div>
        {data.error && data.error !== "" && (
        <p
          style={{
            marginTop: "5px",
            textAlign: "center",
            color: "#e22d2d",
            fontWeight: "bold",
          }}
        >
          {data.error}
        </p>
      )}
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
