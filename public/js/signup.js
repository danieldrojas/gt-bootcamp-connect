$(document).ready(function () {
    // Getting references to our form and inputs
    const signUpForm = $("#signUpForm");
    const firstNameInput = $("input#first_name");
    const lastNameInput = $("input#last_name");
    const emailInput = $("input#email");
    const passwordInput = $("input#password");

    
    // When the form is submitted, we validate there's an email and password entered
    signUpForm.on("submit", function (event) {
        console.log("Sign up Button clicked");
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
<<<<<<< HEAD
function signUpUser(firstName, lastName, email, password) {
=======
function signUpUser(firstName, lastName ,email, password) {
    console.log("Ajax Post hit")
>>>>>>> 1f523e4e3df3cab4bec10ea5b6f6f04f69a8d79a
    $.post("/api/signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName

    })
        .then(function (newUser) {
            console.log("newUser", newUser)
            window.location.replace("/dashboard");
            // If there's an error, log the error
        })
        .catch(function (err) {
            console.log(err);
        });

};

