import styles from "../../styles/NewsStyle.module.css";
import MainButton from "../Custom/MainButton";
import useWindowDimensions from "../../HOC/useWindowDimensions";

// news images
import news1 from "../../assets/news/news1.png";

const News = () => {
  return (
    <main className={styles.news}>
      <h1 className={styles.title}>Latest News</h1>
      <section style={{ display: "flex" }}></section>

      <div class={styles.grid_container}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </main>
  );
};

const NewsItem = () => {
  const { width } = useWindowDimensions();
  let displayWidth;
  let displayHeight;

  if (width > 1200) {
    displayWidth = "270px";
    displayHeight = "40px";
  } else if (width > 950) displayWidth = "200px";
  else if (width >= 675 && width < 768) displayWidth = "245px";
  else if (width >= 630 && width < 675) displayWidth = "230px";
  else if (width >= 550 && width < 630) displayWidth = "200px";
  else if (width >= 420 && width < 550) {
    displayWidth = "180px";
    displayHeight = "35px";
  }
  else if (width < 420) {
    displayWidth = "260px";
    displayHeight = "40px";
  }

  return (
    <main className={styles.cardSection}>
      <img src={news1} alt="news" />
      <h3 className={styles.cardTitle}>Image Text Widget</h3>
      <p className={styles.cardDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus
        egestas elit, at eleifend elit ornare ut.
      </p>
      <div className={styles.btnSection}>
        <MainButton
          text="FIND OUT MORE"
          width={displayWidth}
          height={displayHeight}
        />
      </div>
    </main>
  );
};

export default News;
