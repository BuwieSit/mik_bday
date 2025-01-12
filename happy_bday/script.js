window.onload = function() {
    let gift = document.querySelector(".gift")
    let white = document.querySelector(".white-bg")
    let title = document.getElementById("title")
    let body = document.querySelector("body")

    let clickCount = 0;

    let sideBars = document.querySelector(".side-bars")
    

    gift.addEventListener("mouseover", () => {
        white.style.transform = "translate(-50%, 0%)";
        white.style.height = "50vh";
        title.style.animationPlayState = "running" ;
      
    });


    gift.addEventListener("mouseout", () => {
        white.style.transform = "translate(-50%, -50%)"
        white.style.height = "100vh";
        title.style.animationPlayState = "paused";
    
    });

    gift.addEventListener("click", () => {
        
        if (title.innerHTML === "HAPPY BIRTHDAY MIKMIK!") {
            title.innerHTML = "CLICK THE GIFT";
            white.style.transform = "translate(-50%, 0%)"
            white.style.height = "50vh";
            console.log(clickCount++);
        } 
        else  {
            title.innerHTML = "HAPPY BIRTHDAY MIKMIK!";
            white.style.height = "50vh";
            white.style.transform = "translate(-50%, 100%)";
            console.log(clickCount++);
        }

        if (clickCount == 3) {
            alert("CLicked 3 times");
            

        } 


        
    });

}
