window.addEventListener('DOMContentLoaded', function() {
    const un = document.getElementById('un');
    const deux = document.getElementById('deux');
    const trois = document.getElementById('trois');
    const btn = document.getElementById('btn');
    const rezult = document.getElementById('rezult');
    const rezult2 = document.getElementById('rezult2');
    
    

btn.addEventListener('click', function() {
let unVal = Number(un.value);
let deuxVal = Number(deux.value);
let troisVal = Number(trois.value);



let r = (((unVal * 5) + (deuxVal * 11) + (troisVal * 23)) * (8760 / 1000) * 0.1740) / 5;
let kebab = Math.floor(r);
let euro = Math.round(r * 5);
let kwh = ((unVal * 5) + (deuxVal * 11) + (troisVal * 23)) * (8760 / 1000);
rezult.innerHTML = "Vous gagnez " + kebab + " kebabs (c'est à dire environ " + euro + " € d'économie)";
rezult2.innerHTML = "En réalité, vous économisez " + kwh + " kWh, au prix de 0.1740 € unité";





});
});