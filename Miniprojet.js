

function onClickValid() {
    var question1 = document.getElementById("13")
    var question2 = document.getElementById("24")
    var question3 = document.getElementById("32")
    var question4 = document.getElementById("43")
    var score=0

    if (question1.checked){
        score++
    }
    if (question2.checked){
        score++
    }
    if (question3.checked){
        score++
    }
    if (question4.checked){
        score++
    }
    let resultat = document.getElementById("resultat");
    if (score<="3"){
        resultat.innerText="Dommage, votre score est de : "+score+" points"
    }
    else {
        resultat.innerText="Bravo, votre score est de : "+score+" points"
    }
    
    resultat.classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {
    validation = document.querySelector("#validation");
    resultat = document.getElementById("resultat");

    validation.addEventListener("click", onClickValid);
    resultat.addEventListener("click", onClickValid);


});

