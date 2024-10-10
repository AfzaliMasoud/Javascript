let inputoppgave;

document.getElementById("knapp").onclick = function() {
    inputoppgave = document.getElementById("input").value;
    let list = document.createElement("li");
    list.textContent = inputoppgave;

    let removebutton = document.createElement("button");
    removebutton.textContent = "X";

    removebutton.onclick = function() {
        list.remove();
    };

    list.appendChild(removebutton);
    document.getElementById("items").appendChild(list);

    setcolor();
   
};

