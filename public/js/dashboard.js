
$(document).ready(function () {
    $("#profileLink").on("click", () => {
        window.location.replace("/profile/" + sessionStorage.getItem("currentUser"))
    })

    


    $("#generalBtn").on("click", event => {
        event.preventDefault();

        console.log("got clicked")


        $.get("/dashboard", {

            categoryId: 2


        }).then(function (data) {
            console.log("hit the then in clicked", data)
            // window.location.replace("/dashboard");

            // If there's an error, log the error
        })
            .catch(function (err) {
                console.log(err);
            });
        
    })
    
})

// $("#Btn").on("click", event => {
//     event.preventDefault();

//     console.log("got clicked")


//     $.post("/dashboard/btn", {

//         CategoryId: 2


//     }).then(function (data) {
//         // console.log("hit the then in clicked", data)
//         // window.location.replace("/dashboard");

//         // If there's an error, log the error
//     })
//         .catch(function (err) {
//             console.log(err);
//         });

// })
    
// })

