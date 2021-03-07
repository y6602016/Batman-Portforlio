document.getElementById("openWin1").addEventListener("click", function () {
    document.getElementById("popWindow1").style.display= "block";
})

document.getElementById("closeWin1").addEventListener("click", function () {
    document.getElementById("popWindow1").style.display= "none";
})

document.getElementById("openWin2").addEventListener("click", function () {
    document.getElementById("popWindow2").style.display= "block";
})
document.getElementById("closeWin2").addEventListener("click", function () {
    document.getElementById("popWindow2").style.display= "none";
})

document.getElementById("hamburger").addEventListener("click", function (){
    let rightList = document.getElementById("smallList");
    if (rightList.style.display == "none") {
        rightList.style.display = "block";
    }
    else {
        rightList.style.display = "none";
    }
})
