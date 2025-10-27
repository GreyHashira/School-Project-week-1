let response1 = document.getElementById("response1");
let response2 = document.getElementById("response2");
let response3 = document.getElementById("response3");
let dialogue = document.getElementById("dialogue");

function updateDialogue(newText) {
    dialogue.textContent = "";       
    dialogue.textContent = newText;  
}

response1.addEventListener("click", function(){
    updateDialogue("You chose option 1");
});

response2.addEventListener("click", function(){
    updateDialogue("You chose option 2");
});

response3.addEventListener("click", function(){
    updateDialogue("You chose option 3");
});
