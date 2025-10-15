let response1 = document.getElementById("response1")
let response2 = document.getElementById("response2")
let response3 = document.getElementById("response3")
let dialogue = document.getElementById ("dialogue")
response1Button.addeventlistener("click", function(response1, dialogue){
    dialogue.textContent = "Wuh huh"
});