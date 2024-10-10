
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");


let reviews = [];
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
 
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      reviews = data;
      showPerson(currentItem);
    })
    .catch((error)=> {
      console.log("Error",error);
    })


})

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job; 
  info.textContent = item.text;
}
nextButton.addEventListener("click", function(){
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
})

prevButton.addEventListener("click", function(){
  currentItem --;
  if(currentItem < 0){
    currentItem = reviews.length -1;

  }
  showPerson(currentItem)
})

randomButton.addEventListener("click", function(){
  currentItem = randomnumber();
  showPerson(currentItem);

})

function randomnumber(){
  return Math.floor(Math.random()*reviews.length);
}
