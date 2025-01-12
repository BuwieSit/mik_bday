window.onload = function() {
    let gift = document.querySelector(".gift")
    let white = document.querySelector(".white-bg")
    let title = document.getElementById("title")
    let clickCount = 0;
    let sideBars = document.querySelector(".side-bars")
    let leftBar = document.getElementById("leftBar");
    let staticFilter = document.querySelector(".static-filter")

    staticFilter.style.opacity = "0";
    

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
        else if (title.innerHTML === "CLICK THE GIFT") {
            title.innerHTML = "HAPPY BIRTHDAY MIKMIK!";
            white.style.height = "50vh";
            white.style.transform = "translate(-50%, 100%)";
            console.log(clickCount++);
        }
        else {

        }

        if (clickCount == 3) {
            alert("CLicked 3 times");

            staticFilter.style.opacity = "35%";
            
            clickCount = 0;
            title.innerHTML = "HAPPY BIRTHDAY PRECIOUS!";
            white.remove();
            

        } 


        
    });

}
