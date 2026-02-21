const container = document.getElementById("boxContainer");
const counterText = document.getElementById("counter");

let totalClicks = 0;
//this took a while but I think it should work 

// For loop code, creates the boxes using the DOM
for (let i = 1; i <= 10; i++) {    
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = i;

box.addEventListener("click", function () {
    totalClicks++;
    counterText.textContent = "Total Clicks: " + totalClicks;
   
    box.style.backgroundColor = "orange";     

        updateBackground();
    });

    container.appendChild(box);
}
function updateBackground() { // While loop code, used to calculate background level
    let level = 0;
    let tempClicks = totalClicks;

    while (tempClicks > 0) {
        level += 10;
        tempClicks--;
    }

    if (level >= 100) {    // Change CSS based on variable value
        document.body.style.backgroundColor = "lightgreen";
    } else if (level >= 50) {
        document.body.style.backgroundColor = "lightyellow";
    } else {
        document.body.style.backgroundColor = "lightcoral";
    }
}