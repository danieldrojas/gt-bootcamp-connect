// Add on click and on submit event listeners for each handlebars page.
// This should make an api call (AJAX) with the corresponding routes
$(document).ready(function () {
  const locationEdit = $("#locationEdit");
  const githubEdit = $("#githubEdit");
  const linkedinEdit = $("#linkedinEdit");
  const bioEdit = $("#bioEdit");

  $("#updateProfileBtn").on("click", function (event) {
    event.preventDefault();
    var updateData = {
      location: locationEdit.val().trim(),
      github: githubEdit.val().edit(),
      linkedIn: linkedinEdit.val().trim(),
      bio: bioEdit.val().trim(),
    };
    editProfile(
      updateData.location,
      updateData.github,
      updateData.linkedIn,
      updateData.bio
    );
    locationEdit.val("");
    githubEdit.val("");
    linkedinEdit.val("");
    bioEdit.val("");
  });

  function editProfile(location, github, linkedin, bio) {
    console.log("Ajax put hit");
    $.put("/api/edit_profile/:id", {
      location: location,
      github: github,
      linkedIn: linkedin,
      bio: bio,
    }).then(function(){
        console.log("Profile Updated")
        window.location.replace("/profile/:id")

    }).catch(function(err){
        console.log(err);
    });
  }
});
