const knapp = document.getElementById("button");
const dice = document.getElementById("dice");
const list = document.getElementById("roll-history");

let historyrolls = [];

function rollDice() {
    const rollresult = Math.floor(Math.random() * 6) + 1;
    const diceface = getDiceFace(rollresult);
    dice.innerHTML = diceface;
    historyrolls.push(rollresult);
    updateRollHistory();
}

function updateRollHistory() {
    list.innerHTML = "";
    for (let i = 0; i < historyrolls.length; i++) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyrolls[i])}</span>`;
      list.appendChild(listItem);
    }
}
  
function getDiceFace(rollresult) {
    switch (rollresult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

knapp.addEventListener("click", () => {
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});
