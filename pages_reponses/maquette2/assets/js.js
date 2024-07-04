window.addEventListener("DOMContentLoaded",function() {
const ag = document.getElementById("ag");
const mail = document.getElementById("mail");
const message = document.getElementById("message");
const btn = document.getElementById("send")
const plus = document.getElementById("plus").hidden = true;
const fakbtn = document.getElementById("fakbtn");
const fermer = document.getElementById("fermer");
const close = document.getElementById("close");
const croix = document.getElementById("croix");
/*const cki = document.getElementById("cki").style.display = "none";*/
const mxou = document.getElementById("mxou");
/*const mxouclick = document.getElementById("mxouclick");*/
const sended = document.getElementById("sended").style.display = "none";
/*-------------------------------------------------------------------------*/ 
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");   /*pour le slide avec les etapes*/ 
const step3 = document.getElementById("step3");
const lebloc = document.getElementById("lebloc");
/*---------------------------------------------------------------------------*/


step1.addEventListener("click", function() {            /*#36363f*/ 
document.getElementById("lebloc").textContent = " Premièrement , ça commence par un entretien entre VOUS et NOUS ! Après avoir visité notre site web, si vous avez décidé de travailler avec nous, la première étape va être l'entretien. Nous allons nous rencontrer afin de discuter de vos projets, savoir quel type de site web vous désirez, quelle charte graphique a adopter, votre budget etc... Un réel entretien nécéssaire au bon developpement du site avant de passer a la prochaine étape";
lebloc.style.fontSize ="25px";
step1.bastyle.ckgroundColor = "red";
step2.style.backgroundColor = "#36363f";
step3.style.backgroundColor = "#36363f";    
});

step2.addEventListener("click", function() {
    document.getElementById("lebloc").textContent = "En ce qui concerne la deuxième étape, de votre côté vous allez juste attendre la fin du developpement de votre site web, pour notre part nous serons entrain de developper votre projet selon vos préférences et surtout de la manière la plus optimisée possible";
    lebloc.style.fontSize ="25px";
    step1.style.backgroundColor = "#36363f";
step2.style.backgroundColor = "red";
step3.style.backgroundColor = "#36363f";  
    });

    step3.addEventListener("click", function() {
        document.getElementById("lebloc").textContent = "Et enfin la dernière étape, un dernier entretien sur le projet final, un rendez-vous durant lequel nous discuterons de petites éventuelles modifications a apporter. Une seule règle , si pour vous tout est parfait, le developpement de votre site web sera terminé et vous serez l'unique propriétaire du site, si il y a le moindre problème ou la moindre modification a apporter, nous retournerons a l'étape 2 afin de corriger le problème, et si nécéssaire un retour a l'étape 1 peut être envisagé";
        lebloc.style.fontSize ="25px";
        step1.style.backgroundColor = "#36363f";
step2.style.backgroundColor = "#36363f";
step3.style.backgroundColor = "red";  
        });















btn.addEventListener("click", function() {
    

    if (mail.value.length == 0 && message.value.length == 0 ) {
        document.getElementById("sended").style.display = "block";
        document.getElementById("sended").textContent ="Entrez une adresse mail et/ou un message";
    } else { 
        document.getElementById("sended").style.display = "block";
    };
});




mxouclick.addEventListener("click", function() {

document.getElementById("cki").style.display = "block";

});


fakbtn.addEventListener("click", function() {
document.getElementById("plus").hidden = false;
});



fermer.addEventListener("click", function() {
    document.getElementById("plus").hidden = true;
});









/*
btn.addEventListener("click", function() {
    if (mail.value.length == 0 && message.value.length == 0 ) {
        document.getElementById("sended").hidden = true;
    } else { 
        document.getElementById("sended").hidden = false;
    };
    
}); */

});

