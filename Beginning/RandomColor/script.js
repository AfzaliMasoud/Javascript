const knapp =  document.getElementById("Button");
const farge = document.getElementById("Color");
const colors = ["Green","red", "rgba(133,122,200", "#f15025"];


knapp.addEventListener("click", function(){

    const randomnumber = randomNumber(); 
    document.body.style.backgroundColor = colors[randomnumber];
    farge.textContent = colors[randomnumber];

} );

function randomNumber(){
   return Math.floor(Math.random()*colors.length);
}