const knapp = document.getElementById("addknapp");
const reset = document.getElementById("deleteknapp");
const decrease = document.getElementById("ned");
const display = document.getElementById("nummer");
let currentNumber = 0;

knapp.addEventListener("click", function() {
    currentNumber++;
    display.textContent = currentNumber;
});

decrease.addEventListener("click", function(){
    
    if(currentNumber <= 0)
        window.alert("Kan ikke være negativ tall")
    else 
        currentNumber--;
        display.textContent = currentNumber;
})

reset.addEventListener("click", function() {
    currentNumber = 0; 
    display.textContent = currentNumber;
});

