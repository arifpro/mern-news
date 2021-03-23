const { toTitleCase, validateEmail } = require("../configs/function");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../configs/keys");
// const { adminRoleConfig } = require("../configs/role");

exports.admin = async (req, res) => {
  let { loggedInUserId } = req.body;
  try {
    let loggedInUserRole = await User.findById(loggedInUserId);
    res.json({ role: loggedInUserRole.userRole });
  } catch {
    res.status(404);
  }
};

exports.allUser = async (req, res) => {
  try {
    let allUser = await User.find({});
    res.json({ users: allUser });
  } catch {
    res.status(404);
  }
};

/* User Registration/Signup controller  */
exports.signup = async (req, res) => {
  let { name, email, password } = req.body;
  let error = {};

  if (!name || !email || !password) {
    error = {
      ...error,
      name: "Filed must not be empty",
      email: "Filed must not be empty",
      password: "Filed must not be empty",
    };
    return res.json({ error });
  }

  if (name.length < 3 || name.length > 25) {
    error = { ...error, name: "Name must be 3-25 characters" };
    return res.json({ error });
  } else {
    if (validateEmail(email)) {
      name = toTitleCase(name);

      if ((password.length > 255) | (password.length < 8)) {
        error = {
          ...error,
          name: "",
          email: "",
          password: "Password must be 8 characters",
        };
        return res.json({ error });
      } else {
        // If Email & Name exists in Database then:
        try {
          password = bcrypt.hashSync(password, 10);
          const data = await User.findOne({ email });

          if (data) {
            error = {
              ...error,
              name: "",
              password: "",
              email: "Email already exists",
            };
            return res.json({ error });
          } else {
            let newUser = new User({
              name,
              email,
              password,
              // role: adminRoleConfig,
            });

            newUser.save()
              .then((data) => res.json({ success: "Account create successfully. Please login" }))
              .catch((err) => console.log(err));
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      error = {
        ...error,
        password: "",
        name: "",
        email: "Email is not valid",
      };
      return res.json({ error });
    }
  }
};

/* User Login/Signin controller  */
exports.signin = async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.json({ error: "Fields must not be empty" });
  }

  try {
    const data = await User.findOne({ email: email });

    if (!data) return res.json({ error: "Invalid email or password" });
    
    else {
      const login = await bcrypt.compare(password, data.password);

      if (login) {
        const token = jwt.sign({ _id: data._id, role: data.userRole }, JWT_SECRET);
        const user = jwt.verify(token, JWT_SECRET);
        return res.json({ token, user });
      }
      
      else return res.json({ error: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
  }
};
