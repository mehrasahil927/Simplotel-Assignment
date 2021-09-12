const divContainer = document.getElementById("primary");
const btnAdd = document.querySelector(".btn-add");
const btnRem = document.querySelector(".btn-rem");
const counter = document.querySelector(".num");
var count = 0;
counter.innerHTML = count;
btnAdd.addEventListener("click", AddNew);

function AddNew(){
  if(count<=2){
    count++;
    const pDiv = document.createElement("div");
    pDiv.classList.add('border'); 
    const newDiv1 =document.createElement("div");
    newDiv1.classList.add('border1');
    pDiv.appendChild(newDiv1);
    divContainer.appendChild(pDiv);
    counter.innerHTML = count;
  }
 }

btnRem.addEventListener("click", RemChild);

function RemChild(){
  if(count>=1)
  {
    count--;
    const elem = document.querySelector(".border");
    elem.remove();
    counter.innerHTML = count;
  }
  
}


