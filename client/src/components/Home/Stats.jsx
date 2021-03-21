import styles from "../../styles/StatsStyle.module.css";

// icons
import { MdForum, MdPlace } from "react-icons/md";
import { WiDayRainMix } from "react-icons/wi";

import dot from "../../assets/icons/dot.png";
import MainButton from "../Custom/MainButton";

const Stats = () => {
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
            width="116px"
            height="30px"
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
