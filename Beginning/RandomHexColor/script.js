const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const knapp = document.getElementById("Button");
const farge = document.getElementById("Color");

knapp.addEventListener("click", function(){
    let hexcolor = '#';

    for(let i = 0; i<6; i++){
        hexcolor += hex[getRandomNumber()];
    }
    farge.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;

    
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}