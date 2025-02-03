$(document).ready(function () {
    $(".submitForm1").click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(function () {
            $(".form1").submit();
        }, 1000);
    });
    $("#re1").click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
    });
    $("#re3").click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(function () {
            window.location.href = "index_3b.html";
        }, 1000);
    });
});