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
function expand(i) {
    var display = document.getElementsByClassName("forms")[i];

    if (display.style.visibility === "hidden")
        display.style.visibility = "visible";
    else display.style.visibility = "hidden";

    var itr = -1;
    var flag = 1;
    if (document.getElementsByClassName("list")[i].style.width === "40%") {
        document.getElementsByClassName("forms")[i].style.visibility =
            "hidden";
        document.getElementsByClassName("list")[i].style.width = "96%";
        document
            .getElementsByClassName("list")
        [i].setAttribute("style", "width:96%");
        flag = 0;
    } else {
        var u = 0;
        while (u < 6) {
            document.getElementsByClassName("forms")[u].style.visibility =
                "hidden";
            u++;
        }
        document.getElementsByClassName("forms")[i].style.visibility =
            "visible";
        document.getElementsByClassName("list")[i].style.width = "40%";
        document
            .getElementsByClassName("list")
        [i].setAttribute("style", "width:40%");
        document.getElementsByClassName("list")[i].style.backgroundColor =
            "rgb(240, 42, 52)";
    }

    while (itr < 6) {
        itr += 1;
        if (itr == i) continue;
        else {
            if (flag == 0) {
                document.getElementsByClassName("list")[itr].style.width = "96%";
                document
                    .getElementsByClassName("list")
                [itr].setAttribute("style", "width:96%");
            } else {
                document.getElementsByClassName("list")[itr].style.width = "33%";
                document
                    .getElementsByClassName("list")
                [itr].setAttribute("style", "width:33%");
            }
        }
    }
}

function changeBorderBlue(i) {
    document.getElementsByClassName("forms")[i].style.borderColor =
        "rgb(15,213,203)";
}

function changeBorderBack(i) {
    document.getElementsByClassName("forms")[i].style.borderColor =
        "rgb(240, 42, 52)";
}

function scroll_headers() {
    var x = setTimeout(abc, 1000);
    function abc() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    }
}
function sub(x) {
    return x.substr(x.lastIndexOf("\\") + 1);
}
function getOutput(i) {
    textarea[i].value = sub(filename[i].value);
}