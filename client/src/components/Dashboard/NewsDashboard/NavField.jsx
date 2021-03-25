import styles from "../../../styles/LoginStyle.module.css";

const NavField = ({ data, setData, name, icon }) => {
  return (
    <>
      <div className={styles.navbar__username} style={{ marginBottom: 0 }}>
        {icon}
        <input
          type="text"
          className={styles.navbar__user_input}
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

export default NavField;
