import { useState, useEffect, createContext } from "react";
import Dashboard from "./index";
import Modal from "react-modal";
import styles from "../../styles/DashboardStyle.module.css";
import style from "../../styles/LoginStyle.module.css";

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

// icons
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import { BiText, BiLink, BiWorld } from "react-icons/bi";

const validateEmail = (mail) => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(mail)) return true;
  else return false;
};

const customStyles = {
  content: {
    top: "50%",
    left: "60%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
  },
};

const NewsDashboard = () => {
  const [viewModal, setViewModal] = useState(false);

  return (
    <Dashboard>
      <button onClick={() => setViewModal(true)} className={styles.addNewsBtn}>
        Add News
      </button>

      {/* news table */}
      <section className={styles.tableSection}>
        <table>
          <thead>
            <tr>
              <th>The table header</th>
              <th>The table header</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
              <td>
                <RiEdit2Fill />
                <MdDelete />
              </td>
            </tr>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
              <td>
                <RiEdit2Fill />
                <MdDelete />
              </td>
            </tr>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
              <td>
                <RiEdit2Fill />
                <MdDelete />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* add news modal */}
      <Modal
        isOpen={viewModal}
        onRequestClose={() => setViewModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddNews setViewModal={setViewModal} closeBtn={true} />
      </Modal>
    </Dashboard>
  );
};

export const AddNews = (props) => {
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
    <div className={style.navbar__login_div}>
      <div className={style.navbar__login_div_close}>
        {props.closeBtn && (
          <button type="button" onClick={() => props.setViewModal(false)}>
            <IoClose />
          </button>
        )}
      </div>
      <div className={style.navbar__title} style={{ marginTop: "3px" }}>
        {!isAddForm ? "Update" : "Add"} News
      </div>
      <section className={style.navbar__fields}>
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

        <div className={style.navbar__text} style={{ marginBottom: 0 }}>
          <HiDocumentText />
          <textarea
            placeholder="News Summary"
            className={style.navbar__user_input}
          />
        </div>
        <p style={{ marginBottom: "26px" }}></p>
      </section>

      <button
        type="button"
        className={style.navbar__signin_button}
        onClick={(e) => formSubmit()}
      >
        {!isAddForm ? "Update" : "Add"}
      </button>
    </div>
  );
};

const NavField = ({ data, setData, name, icon }) => {
  return (
    <>
      <div className={style.navbar__username} style={{ marginBottom: 0 }}>
        {icon}
        <input
          type="text"
          className={style.navbar__user_input}
          placeholder={name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value, error: false });
          }}
        />
      </div>

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
    </>
  );
};

export default NewsDashboard;
