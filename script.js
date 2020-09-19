function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 2 +3 + "s";

    star.innerText = "⭐";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}

window.setInterval(function(){
 
  $("document").ready(function(){
    
    $("#btn").on("click",createStar);

  });
 },300);
