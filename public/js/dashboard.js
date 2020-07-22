$(document).ready(function () {
  $(".catBtn").on("click", function () {
    console.log($(this));
    let catId = $(this).data("value");
    console.log(catId);
    window.location.replace("/dashboard/" + catId)
  });
});

