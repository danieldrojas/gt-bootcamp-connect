
$(document).ready(function () {
    $("#profileLink").on("click", () => {
        window.location.replace("/profile/" + sessionStorage.getItem("currentUser"))
    })
        $(".catBtn").on("click", function () {
            console.log($(this));
            let catId = $(this).data("value");
            console.log(catId);
            switchTab(catId);
        });

    function switchTab(categoryId) {
        console.log("function called");
        $.get("/dashboard/btn", {
            CategoryId: categoryId,
        }).success(function (data) {
            console.log("Changed Tab");
            // location.reload()
            window.location = "/dashboard"
        });
    }
    


    // $("#generalBtn").on("click", event => {
    //     event.preventDefault();

    //     console.log("got clicked")


    //     $.get("/dashboard/btn", {

    //         CategoryId: 1


    //     }).then(function (data) {
    //         // console.log("hit the then in clicked", data)
    //         // window.location.replace("/dashboard");

    //         // If there's an error, log the error
    //     })
    //         .catch(function (err) {
    //             console.log(err);
    //         });
        
    // })
    
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

