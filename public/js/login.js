$(document).ready(function () {
    // Getting references to our form and inputs
    const loginForm = $("#loginForm");
    const emailInput = $("input#email");
    const passwordInput = $("input#password");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
       loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });
});
// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(email, password) {
    $.post("/", {
        email: email,
        password: password
    })
        .then(function (newUser) {
            console.log(newUser)
            sessionStorage.setItem("currentUser", newUser.data.id)
            window.location.replace("/dashboard/1");

            // If there's an error, log the error
        })
        .catch(function (err) {
            console.log(err);
        });

};

