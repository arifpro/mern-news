import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

const BearerToken = () =>
  localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt")).token
    : false;

const Headers = () => ({
  headers: {
    token: `Bearer ${BearerToken()}`,
  },
});

export const allNewsReq = async () => {
  try {
    const res = await axios.get(`${apiURL}/api/news/all-news`);
    return res.data.news;
  } catch (error) {
    console.log(error);
  }
};

export const addNewsReq = async ({
  title,
  summary,
  newsSite,
  url,
  imageUrl,
}) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("summary", summary);
  formData.append("newsSite", newsSite);
  formData.append("url", url);
  formData.append("imageUrl", imageUrl);

  try {
    const res = await axios.post(
      `${apiURL}/api/news/add-news`,
      formData,
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editNewsReq = async (id) => {
  try {
    const res = await axios.post(`${apiURL}/api/news/edit-news`, id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNewsReq = async (id) => {
  try {
    const res = await axios.post(`${apiURL}/api/news/delete-news`, id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
