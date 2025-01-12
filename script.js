window.onload = function() {
    let gift = document.querySelector(".gift")
    let white = document.querySelector(".white-bg")
    let title = document.getElementById("title")
    let clickCount = 0;
    let cat = document.querySelector(".cat");
    let cat2 = document.getElementById("oiacat2");
    let cat3 = document.getElementById("oiacat3");
    let staticFilter = document.querySelector(".static-filter")

    let celebration = new Audio("resources/club-music.mp3");
   

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

            staticFilter.style.opacity = "0";


        } 
        else if (title.innerHTML === "CLICK THE GIFT") {

            celebration.play();

            title.innerHTML = "HAPPY BIRTHDAY MIKMIK!";
            staticFilter.style.opacity = "10%";
            white.style.height = "50vh";
            white.style.transform = "translate(-50%, 100%)";
            console.log(clickCount++);
        }
        else {

        }

        if (clickCount == 3) {
            
            celebration.pause();
            staticFilter.style.opacity = "0";
            clickCount = 0;
            title.innerHTML = "HAPPY BIRTHDAY PRECIOUS!";
            title.style.color = "white";
            title.style.zIndex = "10";
            white.remove();

            cat.style.opacity = "1"
            cat2.style.opacity = "1"
            cat3.style.opacity = "1"
            document.body.style.backgroundColor = "pink"

            gift.style.opacity = "0";
            gift.style.pointerEvents = "none"
            oiaDance();

            setTimeout(cake, 2000);

        } 

        
    });

    function oiaDance() {
        let bdaySong = new Audio("resources/oiahappybday.mp3");
        bdaySong.play();
    }

    function cake() {
        window.open('cake.html', '_blank');
        
    }

}
