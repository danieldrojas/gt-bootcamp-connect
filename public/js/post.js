// Add on click and on submit event listeners for each handlebars page.
// This should make an api call (AJAX) with the corresponding routes

$(document).ready(function () {
    // Getting references to our form and inputs
    const postForm = $("form.postForm");
    const titleInput = $("input#title");
  const textInput = $("#post-text");
  const category = $("#category");
    // console.log(titleInput);
    // console.log(textInput);
  
    postForm.on("submit", function (event) {
      event.preventDefault();
      console.log("Post Submit Clicked");
      const postData = {
        title: titleInput.val().trim(),
        body: textInput.val().trim(),
        id: sessionStorage.getItem("currentUser"),
        categoryId: category.val()


      };
      console.log(" index.js line 17 ", postData);
      console.log(postData.title);
      console.log(postData.body);  

  
      if (!postData.title || !postData.body) {
        console.log("title or text missing");
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      createPost(postData.title, postData.body, postData.id, postData.categoryId);
      console.log(" createUser function called")
      titleInput.val("");
      textInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function createPost(title, body, id, categoryId) {
        console.log("createPost in post.js ran")
      $.post("/api/posts", {
        title: title,
        body: body,
        id: id,
        categoryId: categoryId
        
      })
        .then(function () {
          console.log("line 37 index.js");
          window.location.replace("/dashboard");
          // If there's an error, log the error
        })
      //   .catch(err);
    }
  });