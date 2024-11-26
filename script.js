let countElement = document.querySelector("#count-el");
let saveElement = document.querySelector("#save-el");

let count = 0;

function increment(){
  count++;
  countElement.textContent = count;
}

function save(){
  let entries = count + " - ";
  saveElement.textContent =  saveElement.textContent + entries;
  countElement.textContent = 0;
  count = 0;
}


