/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {

    createRegisterUserRequest: function (req, res) {
        var userEmail = req.body.submittedUserName;
        var userPassword = req.body.submittedPassword;
        var userOrganizationName = req.body.submittedOrganizationName;
        
    
        User.create({
          userEmail: userEmail,
          userPassword: userPassword,
          userOrganizationName: userOrganizationName
        }).exec(
          function (err) {
            if (err) {
              res.send({
                error: "Database Error: Could not create user"
              });
            }
            res.send({
              registrationSuccess: "Application was submitted successfully!"
            });
          });
      },
};

