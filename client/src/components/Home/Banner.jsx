import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../../styles/BannerStyle.module.css";

// images
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner1.png";

const bannerData = [
  {
    id: "1",
    img: banner1,
    title: "Lorem Ipsum Dolor Sit Amet",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    img: banner2,
    title: "Lorem Ipsum Dolor Sit Amet 2",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 2",
  },
];

const Banner = () => {
  return (
    <div>
      <Carousel
        autoFocus={true}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        {bannerData?.map((data) => (
          <div
            key={`content-${data.id}`}
            className={styles.my_slide}
            style={{
              background: `linear-gradient(90deg, #3C444C 0%, rgba(60, 68, 76, 0) 100%), url(${data.img}) no-repeat center`,
            }}
          >
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.desc}>
              <p>{data.desc}</p>
            </div>
            <div>
              <button className={styles.getStartedBtn}>GET STARTED</button>
              <button className={styles.findOutBtn}>FIND OUT MORE</button>
            </div>
          </div>
        ))}
      </Carousel>

      <style jsx>{`
        .control-arrow {
          top: 15rem !important;
          bottom: 15rem !important;
          background: rgba(0, 0, 0, 0.2);
        }
        .control-prev {
          background: #30363d !important;
          opacity: 0.5;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        .control-next {
          background: #30363d !important;
          opacity: 0.5;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        .control-dots {
          bottom: 2rem !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;
