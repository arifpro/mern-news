import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "../../styles/MainButtonStyle.module.css";

const MainButton = (props) => {
  const width = props.width ? props.width : "190px";
  const height = props.height ? props.height : "40px";

  return (
    <main style={{ display: "flex" }}>
      <button
        className={styles.getStartedBtn}
        style={{ width, height, ...props.style, color: props.color }}
      >
        {props.text}
      </button>
      {props.arrow !== false && (
        <p className={styles.getStartedBtnIcon} style={{ color: props.color }}>
          <MdKeyboardArrowRight />
        </p>
      )}
    </main>
  );
};

export default MainButton;
