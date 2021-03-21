import styles from "../../styles/FeaturesStyle.module.css";
// import { IoPersonCircle } from "react-icons/io5";
// import { MdPhonelink, MdStoreMallDirectory } from "react-icons/md";

// icons
import personCircle from "../../assets/icons/account_circle.png";
import phonelink from "../../assets/icons/phonelink.png";
import storeMallDirectory from "../../assets/icons/store_mall_directory.png";

const Features = () => {
  return (
    <main className={styles.features}>
      <div>
        <h1 className={styles.featuresTitle}>Lorem Ipsum Dolor</h1>
        <p className={styles.featuresDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div className={styles.featuresItems}>
        <section>
          {/* <IoPersonCircle className={styles.featuresItems__icon} /> */}
          <img src={personCircle} alt="personCircle"/>
          <p className={styles.featuresItems__title}>Magna Aliqua</p>
          <p className={styles.featuresItems__desc}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </section>
        <section>
          {/* <MdPhonelink className={styles.featuresItems__icon} /> */}
          <img src={phonelink} alt="phonelink"/>
          <p className={styles.featuresItems__title}>Consectetur Elit</p>
          <p className={styles.featuresItems__desc}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </section>
        <section>
          {/* <MdStoreMallDirectory className={styles.featuresItems__icon} /> */}
          <img src={storeMallDirectory} alt="storeMallDirectory"/>
          <p className={styles.featuresItems__title}>Minim Veniam</p>
          <p className={styles.featuresItems__desc}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Features;
