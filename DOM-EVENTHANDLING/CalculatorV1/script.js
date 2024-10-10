const tall1 = document.getElementById("input-1");
const tall2 = document.getElementById("input-2");
const add = document.getElementById("ADD");
const sub = document.getElementById("SUB");
const multi = document.getElementById("MULT");
const div = document.getElementById("DIV");
const resultDisplay = document.getElementById("result"); // Ensure you have this element in your HTML

add.addEventListener("click", function() {
    const num1 = parseFloat(tall1.value);
    const num2 = parseFloat(tall2.value);
    resultDisplay.textContent = num1 + num2;
});

sub.addEventListener("click", function() {
    const num1 = parseFloat(tall1.value);
    const num2 = parseFloat(tall2.value);
    resultDisplay.textContent = num1 - num2;
});

multi.addEventListener("click", function() {
    const num1 = parseFloat(tall1.value);
    const num2 = parseFloat(tall2.value);
    resultDisplay.textContent = num1 * num2;
});

div.addEventListener("click", function() {
    const num1 = parseFloat(tall1.value);
    const num2 = parseFloat(tall2.value);
    if (num2 === 0) {
        resultDisplay.textContent = "Error: Division by zero";
    } else {
        resultDisplay.textContent = num1 / num2;
    }
});
