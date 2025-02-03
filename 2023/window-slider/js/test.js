
let LSide = document.getElementById("side_L");
let RSide = document.getElementById("side_R");
let LSide1 = document.getElementById("side_L1");
let RSide1 = document.getElementById("side_R1");
window.addEventListener("scroll", function () {
    LSide1.style.left = -window.pageYOffset * 1.5 + "px";
    RSide1.style.left = -window.pageYOffset * 1.5 + "px";
    LSide.style.left = -window.pageYOffset * 1.5 + "px";
    RSide.style.left = window.pageYOffset * 1.5 + "px";
});

function scroll_headers() {
    var x = setTimeout(abc, 1000);
    function abc() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    }
}