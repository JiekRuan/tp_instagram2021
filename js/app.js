document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn, form, warning, email, password, submit;
    /* portée des varibles globales*/
    warning = document.querySelector(".warning");
    
    let expr = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    btn = document.getElementsByClassName("btn");
    form = document.getElementsByClassName("form")[0];
    /* methode */
    let formActive = () => {
        /* portée locale */
        email = document.getElementsByTagName("input")[0].value;
        password = document.getElementsByTagName("input")[1].value;
        if (email.match(expr) && password) {
            warning.classList.add("success");
            warning.style.display = "block";
            warning.innerText = "";
            localStorage.setItem("user", email); //stocker le login
            sessionStorage.setItem("user", "sessionid");
            document.location.assign("accueil.html");
        } else if (!email.match(expr)) {
            warning.style.display = "block";
            warning.innerText = "Mail ou mot de passe incorrect";
            warning.classList.remove("success");
            warning.classList.add("error")
        }
        else if (!password.match(expr)) {
            warning.style.display = "block";
            warning.innerText = "Mot de passe incorrect";
            warning.classList.remove("success");
            warning.classList.add("error")
        } else {
            warning.style.display = "block";
            warning.innerText = "remplir les champs";
        }
    };
    /*appelle de la fonction*/
    submit = document.getElementsByTagName("input")[2];
    /*bouton valider*/
    submit.addEventListener("click", e => {
        e.preventDefault(); //empeche rechargement de la page
        formActive();
    });
});