const jarText = document.getElementById("jarText");
const startBtn = document.getElementById("startBtn");
const introModal = document.getElementById("introModal");
const openJarBtn = document.getElementById("openJarBtn");
const scratchSection = document.getElementById("scratchSection");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const nextReasonBtn = document.getElementById("nextReasonBtn");
const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");

let musicPlaying = false;
let currentReasonIndex = 0;

/* =========================
FLOATING HEARTS
========================= */

function createHeart() {

```
const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = ["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

heart.style.left = Math.random()*100 + "%";

heart.style.fontSize =
    (20 + Math.random()*30) + "px";

heart.style.animationDuration =
    (5 + Math.random()*6) + "s";

document
    .getElementById("hearts-container")
    .appendChild(heart);

setTimeout(()=>{
    heart.remove();
},10000);
```

}

setInterval(createHeart,400);

/* =========================
JAR TALKING SCRIPT
========================= */

const messages = [

"Hey! I'm the Jar of Love! 💖",

"I've been collecting reasons why Milind loves Lakku...",

"And trust me...",

"There are A LOT of them 😍",

"Want to see one?"

];

let currentMessage = 0;

function rotateMessages(){

```
currentMessage++;

if(currentMessage >= messages.length){
    currentMessage = messages.length - 1;
    return;
}

jarText.innerText =
    messages[currentMessage];
```

}

setInterval(rotateMessages,3000);

/* =========================
MUSIC BUTTON
========================= */

musicBtn.addEventListener("click",()=>{

```
if(!musicPlaying){

    bgMusic.play();

    musicPlaying = true;

    musicBtn.innerHTML = "🔊";

}else{

    bgMusic.pause();

    musicPlaying = false;

    musicBtn.innerHTML = "🎵";
}
```

});

/* =========================
OPEN LETTER
========================= */

startBtn.addEventListener("click",()=>{

```
introModal.classList.remove("hidden");
```

});

/* =========================
OPEN JAR
========================= */

openJarBtn.addEventListener("click",()=>{

```
introModal.classList.add("hidden");

document
    .querySelector(".main-container")
    .style.display = "none";

scratchSection.classList.remove("hidden");

showRandomReason();
```

});

/* =========================
RANDOM REASONS
========================= */

function showRandomReason(){

```
const randomIndex =
    Math.floor(Math.random()*reasons.length);

currentReasonIndex = randomIndex;

reasonNumber.innerText =
    "Reason #" + (randomIndex + 1);

reasonText.innerText =
    reasons[randomIndex];
```

}

/* =========================
NEXT REASON
========================= */

nextReasonBtn.addEventListener("click",()=>{

```
showRandomReason();
```

});

/* =========================
BLINKING EYES
========================= */

function blinkEyes(){

```
const eyes =
    document.querySelectorAll(".eye");

eyes.forEach(eye=>{

    eye.style.height = "5px";

});

setTimeout(()=>{

    eyes.forEach(eye=>{

        eye.style.height = "60px";

    });

},200);
```

}

setInterval(blinkEyes,3500);

/* =========================
SCRATCH EFFECT PLACEHOLDER
========================= */

window.onload = ()=>{

```
setTimeout(()=>{

    const overlay =
        document.querySelector(".scratch-overlay");

    if(overlay){

        overlay.addEventListener("click",()=>{

            overlay.style.opacity = "0";

            overlay.style.pointerEvents = "none";

        });

    }

},500);
```

};
