import { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "../../../styles/DashboardStyle.module.css";
import { allNewsReq } from "../../../api/newsApi";

// components
import Dashboard from "../index";
import AddNews from "./AddNews";

// icons
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

const customStyles = {
  content: {
    top: "50%",
    left: "60%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
  },
};

const apiURL = process.env.REACT_APP_API_URL;

const NewsDashboard = () => {
  const [viewModal, setViewModal] = useState(false);
  const [allNews, setAllNews] = useState(null);

  useEffect(() => {
    const responseData = allNewsReq();
    responseData.then((result) => setAllNews(result));
  }, []);

  return (
    <Dashboard>
      <button onClick={() => setViewModal(true)} className={styles.addNewsBtn}>
        Add News
      </button>

      {/* news table */}
      <section className={styles.tableSection}>
        <table>
          <thead>
            <tr>
              {/* <th>id</th> */}
              <th>#</th>
              <th>Title</th>
              <th>Summary</th>
              <th>News Site</th>
              <th>URL</th>
              <th>Image</th>
              <th>createdAt</th>
              <th>updatedAt</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {allNews?.map(
                (
                  {
                    _id: id,
                    title,
                    summary,
                    newsSite,
                    url,
                    imageUrl,
                    createdAt,
                    updatedAt,
                  },
                  index
                ) => (
                  <>
                    {/* <td>{id}</td> */}
                    <td>{index + 1}</td>
                    <td>{title.slice(0, 15) + "..."}</td>
                    <td>{summary.slice(0, 15) + "..."}</td>
                    <td>{newsSite}</td>
                    <td>
                      <a href={url} rel="noreferrer" target="_blank">
                        click here
                      </a>
                    </td>
                    <td>
                      <img
                        src={`${apiURL}/news/${imageUrl}`}
                        alt={imageUrl}
                        width="40px"
                      />
                    </td>
                    <td>
                      <p>{createdAt.split("T")[0]}</p>
                      <p>{createdAt.split("T")[1].split(".")[0]}</p>
                    </td>
                    <td>
                      <p>{updatedAt.split("T")[0]}</p>
                      <p>{updatedAt.split("T")[1].split(".")[0]}</p>
                    </td>
                    <td>
                      <RiEdit2Fill />
                      <MdDelete />
                    </td>
                  </>
                )
              )}
            </tr>
          </tbody>
        </table>
      </section>

      {/* add news modal */}
      <Modal
        isOpen={viewModal}
        onRequestClose={() => setViewModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddNews setViewModal={setViewModal} closeBtn={true} />
      </Modal>
    </Dashboard>
  );
};

export default NewsDashboard;
