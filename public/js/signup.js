$(document).ready(function () {
    // Getting references to our form and inputs
    const signUpForm = $("#signUpForm");
    const firstNameInput = $("input#first_name");
    const lastNameInput = $("input#last_name");
    const emailInput = $("input#email");
    const passwordInput = $("input#password");

    
    // When the form is submitted, we validate there's an email and password entered
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        signUpUser(userData.firstName, userData.lastName, userData.email, userData.password);
        firstNameInput.val("")
        lastNameInput.val("")
        emailInput.val("");
        passwordInput.val("");
    });
});
// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function signUpUser(firstName, lastName ,email, password) {
    $.post("/api/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })
        .then(function (newUser) {
            console.log("newUser", newUser)
            sessionStorage.setItem("currentUser", newUser.id)
            window.location.replace("/dashboard");
            // If there's an error, log the error
        })
        .catch(function (err) {
            console.log(err);
        });

};

