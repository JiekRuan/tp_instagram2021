document.addEventListener("DOMContentLoaded", () => {
    console.log("present");
    let submit_log = localStorage.getItem("user");
    let el = document.querySelector(".email");
    let el2 = document.querySelector(".mail");
    el.innerText += ` ${submit_log}`;
    el2.innerText += ` ${submit_log}`;
    let btn = document.querySelector(".unlocked");
    /*event*/
    btn.addEventListener("click", () => {
        localStorage.clear();
        sessionStorage.clear();
        document.location.assign("accueil.html");
    });
});