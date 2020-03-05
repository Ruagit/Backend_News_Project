const connection = require("../connection");

exports.selectUserByID = username => {
  return connection("users")
    .select("username", "avatar_url", "name")
    .where("username", username)
    .then(([user]) => {
      if (!user) {
        return Promise.reject({ status: 404, msg: "Path does not exist" });
      } else return user;
    });
};
