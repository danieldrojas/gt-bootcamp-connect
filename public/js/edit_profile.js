// Add on click and on submit event listeners for each handlebars page.
// This should make an api call (AJAX) with the corresponding routes
$(document).ready(function () {
  const locationEdit = $("#locationEdit");
  const githubEdit = $("#githubEdit");
  const linkedinEdit = $("#linkedinEdit");
  const bioEdit = $("#bioEdit");

  $("#finalUpdateProfileBtn").on("click", function (event) {
    event.preventDefault();
    var updateData = {
      id: sessionStorage.getItem("currentUser"),
      location: locationEdit.val().trim(),
      github: githubEdit.val().trim(),
      linkedIn: linkedinEdit.val().trim(),
      bio: bioEdit.val().trim(),
    };
    editProfile(
      updateData.id,
      updateData.location,
      updateData.github,
      updateData.linkedIn,
      updateData.bio
    );
  });

  function editProfile(id, location, github, linkedin, bio) {
    console.log("Ajax put hit");
    $.ajax({
      url: "/api/edit_profile/",
      method: "PUT",
      data: {
        id: id,
        location: location,
        github: github,
        linkedIn: linkedin,
        bio: bio,
      },
    }).then(() => {
      console.log("Updated Profile");
      window.location.replace(
        "/profile/" + sessionStorage.getItem("currentUser")
      );
    });
  }
});
