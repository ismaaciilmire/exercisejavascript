const header = document.querySelector('#header');
console.log(header)

const list = document.querySelector("#list")
console.log(list)

function addItem() {
  const newitem = document.createElement('li');
  newitem.textContent = ('item3');
  list.appendChild(newitem)
}

function removeItem() {
  if (list.lastChild) {
    list.removeChild(list.lastChild)
   

  }else{
     alert("wuu dhmaday wakhtigagii zxp")
  }



}
