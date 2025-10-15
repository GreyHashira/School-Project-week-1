let response1 = document.getElementById("response1");
let response2 = document.getElementById("response2");
let response3 = document.getElementById("response3");
let dialogue = document.getElementById("dialogue");

response1.addEventListener("click", function(){
    dialogue.textContent = "test";
});

response2.addEventListener("click", function(){
    dialogue.textContent = "test2";
});

response3.addEventListener("click", function(){
    dialogue.textContent = "test3";
});
