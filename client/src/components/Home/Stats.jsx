import styles from "../../styles/StatsStyle.module.css";
import useWindowDimensions from "../../HOC/useWindowDimensions";

// icons
import { MdForum, MdPlace } from "react-icons/md";
import { WiDayRainMix } from "react-icons/wi";

import dot from "../../assets/icons/dot.png";
import MainButton from "../Custom/MainButton";

const Stats = () => {
  const { width } = useWindowDimensions();
  let displayWidth;
  let displayHeight;

  if (width > 1200) {
    displayWidth = "116px";
    displayHeight = "28px";
  } else if (width > 800) {
    displayWidth = "105px";
    displayHeight = "25px";
  } else if (width > 700) {
    displayWidth = "105px";
    displayHeight = "25px";
  } else if (width > 650) {
    displayWidth = "105px";
    displayHeight = "25px";
  } else if (width > 500) {
    displayWidth = "105px";
    displayHeight = "20px";
  } else {
    displayWidth = "116px";
    displayHeight = "28px";
  }

  return (
    <main className={styles.stats}>
      <section className={`${styles.card} ${styles.card1}`}>
        <div className={styles.dotIcon}>
          <img src={dot} alt="dot" />
        </div>
        <div className={styles.content}>
          <MdForum className={styles.contentIcon} />
          <p className={styles.contentTitle}>2,564</p>
          <p className={styles.contentName}>Messages</p>
          <p className={styles.contentDesc}>Posted by our users</p>
        </div>
      </section>
      <section className={`${styles.card} ${styles.card2}`}>
        <div className={styles.dotIcon}>
          <img src={dot} alt="dot" />
        </div>
        <div className={styles.content}>
          <MdPlace
            className={styles.contentIcon}
            style={{ color: "#F27A54" }}
          />
          <p className={styles.contentLocation}>
            138 Mount Pleasant Bracknell, RG12 9EA Berkshire, UK
          </p>
          <MainButton
            text="GET DIRECTIONS"
            arrow={false}
            width={displayWidth}
            height={displayHeight}
            style={{ fontSize: "8px", fontWeight: "bold" }}
          />
        </div>
      </section>
      <section className={`${styles.card} ${styles.card1}`}>
        <div className={styles.dotIcon}>
          <img src={dot} alt="dot" />
        </div>
        <div className={styles.content}>
          <WiDayRainMix className={styles.contentIcon} />
          <p className={styles.contentTitle}>18ºC</p>
          <p className={styles.contentName}>Craiova, RO</p>
          <p className={styles.contentDesc}>Sunny and raining</p>
        </div>
      </section>
    </main>
  );
};

export default Stats;
