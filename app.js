const divContainer = document.getElementById("primary");
const btnAdd = document.querySelector(".btn-add");
const btnRem = document.querySelector(".btn-rem");
const counter = document.querySelector(".num");
const inputVal = document.querySelector(".input").value;
const addT = document.querySelector(".addtask");
const secondaryDiv = document.getElementById("secondary");

var count = 0;
counter.innerHTML = count;
btnAdd.addEventListener("click", AddNew);

let pDiv = 1;
function AddNew() {
  if (count< 3) {
    count++;
    pDiv = document.createElement("div");
    pDiv.classList.add("border");
    let className = "counter" + count;
    pDiv.classList.add(className); 
    pDiv.setAttribute("id", className);
    divContainer.appendChild(pDiv);
    counter.innerHTML = count;
  }
} 
AddNew();

var add = 0;
addT.addEventListener("click", addTask);
function addTask() {
  let userInput = document.getElementById("input").value;
  console.log(userInput);

  for (let i = 1; i<=userInput; i++) {
    let className = "counter" + i;
    let getDiv = document.getElementById(className);
    const newDiv1 = document.createElement("div");
    newDiv1.classList.add("border1");
    getDiv.appendChild(newDiv1);
  }
}
 
 


btnRem.addEventListener("click", RemChild);

function RemChild() {
  if (count >= 1) {
    count--;
    const elem = document.querySelector(".border");
    elem.remove();
    counter.innerHTML = count;
  }
}
