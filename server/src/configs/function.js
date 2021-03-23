// helper functions

const User = require("../models/User");

exports.toTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

exports.validateEmail = (mail) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(mail)) return true;
  else return false;
};

exports.emailCheckInDatabase = async (email) => {
  await User.findOne({ email }).exec((err, data) => {
    if (!data) return false;
    else return true;
  });
};

exports.phoneNumberCheckInDatabase = async (phoneNumber) => {
  await User.findOne({ phoneNumber }).exec((err, data) => {
    if (data) return true;
    else return false;
  });
};
