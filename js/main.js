var pages = ["simple", "advanced", "statfinder"];
function getPage(frame) {
    console.log(frame.src);
}

function changePage(p) {
    if (p === "simple") {
        document.getElementById("main-window").src = "./html/simpleroller.html";
    }

    if (p === "advanced") {
        document.getElementById("main-window").src = "./html/advroller.html";
    }

    if (p === "statfinder") {
        document.getElementById("main-window").src = "./html/statfinder.html";
    }
}