// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
<<<<<<< HEAD
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
=======
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
      return next();
    }
  
    // If the user isn't logged in, redirect them to the login page
    return res.redirect("/");
  };
>>>>>>> 1f523e4e3df3cab4bec10ea5b6f6f04f69a8d79a
