const User = require("../models/user.model");

checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({username: req.body.username})
    .then(username => {
      if (username) {
        res.status(400).json({message: "Failed! Username is already in use!"});
        return;
      }
      User.findOne({email: req.body.email})
      .then(email => {
        if (email) {
          res.status(400).json({message: "Failed! Email is already in use!"});
          return;
        }
        next();
      });
    }
  );
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail
};
module.exports = verifySignUp;