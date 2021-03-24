import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/BannerStyle.module.css";
import MainButton from "../Custom/MainButton";

// images
import banner from "../../assets/banner/banner1.png";

const bannerData = [
  {
    id: "1",
    img: banner,
    title: "Lorem Ipsum Dolor Sit Amet",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    img: banner,
    title: "Lorem Ipsum Dolor Sit Amet 2",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 2",
  },
  {
    id: "3",
    img: banner,
    title: "Lorem Ipsum Dolor Sit Amet 3",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 3",
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
              background: `linear-gradient(90deg, #3c444c 0%, rgba(60, 68, 76, 0) 100%), url(${data.img}) no-repeat center`,
            }}
          >
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.desc}>
              <p>{data.desc}</p>
            </div>
            <div className={styles.btn}>
              {/* <div style={{ display: "flex" }}>
                <button className={styles.getStartedBtn}>GET STARTED</button>
                <p className={styles.getStartedBtnIcon}>
                  <MdKeyboardArrowRight />
                </p>
              </div> */}
              <MainButton text="GET STARTED" style={{ marginRight: "1rem" }} />
              <button className={styles.findOutBtn}>FIND OUT MORE</button>
            </div>
          </div>
        ))}
      </Carousel>

      <style>{`
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
