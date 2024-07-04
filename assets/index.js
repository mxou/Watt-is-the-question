window.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("interrupteur");
    const calque = document.getElementById("calque_noir");
    const intr = document.getElementById("intr");
    
    btn.addEventListener("click", function () {
      if (calque.className == "on") {
        calque.className = "off";
        intr.src = "assets/images/eteint.png";
      } 
      else {
        calque.className = "on";
        intr.src = "assets/images/allume.png";
      }
    });
  });