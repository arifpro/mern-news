import { useState } from "react";
import styles from "../../../styles/LoginStyle.module.css";
import NavField from "./NavField";
import { isAuthenticate, isAdmin } from "../../../api/authApi";
import { addNewsReq, allNewsReq, editNewsReq } from "../../../api/newsApi";

// icons
import { IoClose } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BiText, BiLink, BiWorld } from "react-icons/bi";
import { BsImage } from "react-icons/bs";

const AddNews = (props) => {
  const [isAddForm, setIsAddForm] = useState(true);

  // login
  const [data, setData] = useState({
    id: "",
    title: "",
    url: "",
    newsSite: "",
    summary: "",
    imageUrl: "",
    error: false,
    loading: false,
    success: "",
  });

  const formSubmit = async () => {
    if (isAuthenticate() && isAdmin()) {
      if (!data.imageUrl) {
        return setData({ ...data, error: "Please upload a news image" });
      }
      if (
        isAddForm &&
        (data.title === "" ||
          data.url === "" ||
          data.newsSite === "" ||
          data.summary === "")
      ) {
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
              imageUrl: data.imageUrl,
            });
          } else {
            responseData = await editNewsReq({
              id: data.id,
            });
          }

          if (responseData.success) {
            setData({
              id: "",
              title: "",
              url: "",
              newsSite: "",
              summary: "",
              imageUrl: "",
              error: false,
              loading: false,
              success: responseData.success,
            });

            const response = allNewsReq();
            response.then((result) => props.setAllNews(result));
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
      setData({ ...data, error: "You must be logged in", loading: false });
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

        <div className={styles.navbar__text}>
          <HiDocumentText />
          <textarea
            placeholder="News Summary"
            name="summary"
            className={styles.navbar__user_input}
            onChange={(e) =>
              setData({
                ...data,
                [e.target.name]: e.target.value,
                error: false,
              })
            }
          />
        </div>

        {/* Image Field & function */}
        <div
          className={styles.navbar__text}
          style={{ marginBottom: 0, paddingTop: 0 }}
        >
          <BsImage style={{ paddingTop: "11px", fontSize: "14px" }} />
          <input
            accept=".jpg, .jpeg, .png"
            onChange={(e) => {
              setData({
                ...data,
                success: false,
                error: false,
                imageUrl: e.target.files[0],
              });
            }}
            type="file"
            className={styles.navbar__user_input}
            style={{ fontSize: "11px" }}
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
