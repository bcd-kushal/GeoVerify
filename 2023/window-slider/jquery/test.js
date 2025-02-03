
$(document).ready(function () {
    $(".submitForm1").click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(function () {
            window.location.href = "index_pics.html";
        }, 1000);
    });
});