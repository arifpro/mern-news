const { toTitleCase } = require("../configs/function");
const News = require("../models/News");
const fs = require("fs");

exports.allNews = async (req, res) => {
  try {
    const news = await News.find({}).sort({ _id: -1 });
    if (news) return res.json({ news });
  } catch (err) {
    console.log(err);
  }
};

exports.addNews = async (req, res) => {
  let { title, url, newsSite, summary } = req.body;

  let imageUrl = req.file.filename;
  const filePath = `../public/news/${imageUrl}`;

  if (!title || !url || !newsSite || !summary || !imageUrl) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
      }
      return res.json({ error: "All filled must be required" });
    });
  } else {
    title = toTitleCase(title);
    try {
      let checkNewsExists = await News.findOne({ title });

      if (checkNewsExists) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
          return res.json({ error: "News already exists" });
        });
      } else {
        let newNews = new News({
          title,
          url,
          newsSite,
          summary,
          imageUrl,
        });
        await newNews.save((err) => {
          if (!err) {
            return res.json({ success: "News created successfully" });
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
};

exports.editNews = async (req, res) => {
  let { _id, title, url, newsSite, summary } = req.body;

  console.log({ _id, title, url, newsSite, summary })

  if ((!_id || !url || !newsSite || !summary)) {
    return res.json({ error: "All filled must be required" });
  }

  try {
    let editNews = News.findByIdAndUpdate(_id, {
      title,
      url,
      newsSite,
      summary,
      updatedAt: Date.now(),
    });

    let edit = await editNews.exec();

    if (edit) {
      return res.json({ success: "News edit successfully" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.deleteNews = async (req, res) => {
  let { _id } = req.body;

  if (!_id) {
    return res.json({ error: "All filled must be required" });
  } else {
    try {
      let deletedNewsFile = await News.findById(_id);
      const filePath = `../public/news/${deletedNewsFile.imageUrl}`;

      let deleteNews = await News.findByIdAndDelete(_id);

      if (deleteNews) {
        // Delete Image from public -> news folder
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
          return res.json({ success: "News deleted successfully" });
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
};
