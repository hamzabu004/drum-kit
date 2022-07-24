let noOfDrums = document.querySelectorAll(".drum").length;
console.log(noOfDrums);
for (let i = 0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        playSound(this.innerHTML);
        animateButton(this.innerHTML);
    });
}

document.addEventListener("keydown", event => {
    playSound(event.key);
    animateButton(event.key);
});




function playSound(key){
    console.log(key);
    switch (key){
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    }
}

function animateButton(key){
    button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 50);
}