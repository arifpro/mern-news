import styles from "../../styles/CtaStyle.module.css";
import MainButton from "../Custom/MainButton";

const CTA = () => {
  return (
    <main className={styles.cta}>
      <section>
        <h1 className={styles.ctaTitle}>Lorem Ipsum Dolor</h1>
        <p className={styles.ctaDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <MainButton
          text="READ MORE"
          color="#3c444c"
          style={{ background: "#fff", fontWeight: "bold" }}
        />
      </section>
    </main>
  );
};

export default CTA;
