window.addEventListener("DOMContentLoaded", function () {
  const un = document.getElementById("un");
  const deux = document.getElementById("deux");
  const trois = document.getElementById("trois");
  const btn = document.getElementById("btn");
  const rezult = document.getElementById("rezult");
  const rezult2 = document.getElementById("rezult2");
  const kb = document.getElementById("kb");
  
  btn.addEventListener("click", function () {
    let unVal = un.value;
    let deuxVal = deux.value;
    let troisVal = trois.value;
    kb.className = "here";
    
    let r =
      ((unVal * 5 + deuxVal * 11 + troisVal * 23) * (8760 / 1000) * 0.174) / 5;
    let kebab = Math.floor(r);
    let euro = Math.round(r * 5);
    let kwh = (unVal * 5 + deuxVal * 11 + troisVal * 23) * (8760 / 1000);

    if (isNaN(unVal) || isNaN(deuxVal) || isNaN(troisVal)) {
      rezult.innerHTML = "Vous devez rentrer des valeurs chiffrées uniquement !";
      rezult2.innerHTML = "";
    } else {
      rezult.innerHTML =
        "Vous gagnez " +
        kebab +
        " kebabs (c'est à dire environ " +
        euro +
        " € d'économie)";
      rezult2.innerHTML =
        "En réalité, vous économisez " +
        kwh +
        " kWh, au prix de 0.1740 € unité";  
    }
    list = "";
    for (let i = 0; i < kebab; i++) {
      list = list + '<img src="./assets/lekebab.png" style="width:50px; heigth:50px;" alt="kebab">'; 
    }
    console.log = list;
    kb.innerHTML = list;
console.log("Done");
  });
});
