import axios from "./apiBase";

export const allNewsReq = async () => {
  try {
    const res = await axios.get(`/api/news/all-news`);
    return res.data.news;
  } catch (error) {
    console.log(error);
  }
};

export const addNewsReq = async ({ title, summary, newsSite, url }) => {
  const data = { title, summary, newsSite, url };
  
  try {
      const res = await axios.post(`/api/news/add-news`, data);
      console.log(res)
      return res.data;
  } catch (error) {
      console.log(error);
  }
};

export const editNewsReq = async (id) => {
  try {
      const res = await axios.post(`/api/news/edit-news`, id);
      return res.data;
  } catch (error) {
      console.log(error);
  }
};

export const deleteNewsReq = async (id) => {
  try {
      const res = await axios.post(`/api/news/delete-news`, id);
      return res.data;
  } catch (error) {
      console.log(error);
  }
};