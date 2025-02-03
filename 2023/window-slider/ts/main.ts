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

function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if (time == null) time = 1500;
    (pos = +pos), (time = +time);
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(
                0,
                ((pos - currentPos) * progress) / time + currentPos
            );
        } else {
            window.scrollTo(
                0,
                currentPos - ((currentPos - pos) * progress) / time
            );
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
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
    var x = setTimeout(abc, 500);
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
    j = i;
    if (i >= 10) j += 1;
    textarea[j].value = sub(filename[i].value);
}

function confirm_submit(str) {
    if (confirm(str)) return true;
    return false;
}