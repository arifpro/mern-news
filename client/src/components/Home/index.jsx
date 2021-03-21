import Layout from "../Layout";
import Banner from "./Banner";
import Stats from "./Stats";
import Features from "./Features";
import News from "./News";
import CTA from "./CTA";

const Home = (props) => {
  return (
    <Layout {...props}>
      <Banner />
      <Stats />
      <Features />
      <News />
      <CTA />
    </Layout>
  );
};

export default Home;
