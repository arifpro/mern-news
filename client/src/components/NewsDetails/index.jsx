import Layout from "../Layout";
import News from "../Home/News";
import styles from "../../styles/NewsDetailsStyle.module.css";

// icons
import { FiClock } from "react-icons/fi";
import { BiComment } from "react-icons/bi";

// images
import img from "../../assets/banner/team.png";

const NewsDetails = () => {
  return (
    <Layout>
      <section
        className={styles.newsDetails}
        style={{
          background: `linear-gradient(90deg, #3C444C 0%, rgba(60, 68, 76, 0) 100%), url(${img}) no-repeat center`,
        }}
      >
        <button className={styles.btn}>CATEGORY</button>
        <p className={styles.desc}>Lorem Ipsum Dolor Sit Amet Consectetur</p>

        <div className={styles.info}>
          <aside>
            <FiClock />
            <p>Jan 12th, 2018</p>
          </aside>
          <aside>
            <BiComment />
            <p>25 Comments</p>
          </aside>
        </div>
      </section>

      <News />
    </Layout>
  );
};

export default NewsDetails;
