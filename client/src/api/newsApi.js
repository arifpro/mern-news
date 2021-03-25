import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

export const allNewsReq = async () => {
  try {
    const res = await axios.get(`${apiURL}/api/news/all-news`);
    return res.data.news;
  } catch (error) {
    console.log(error);
  }
};
