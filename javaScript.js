let elements = document.getElementsByClassName("element");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", (event) => {
    // console.log(elements[i].classList)
    if (elements[i].classList[1] === "selected") {
      elements[i].classList.remove("selected");
    } else {
      for (let j = 0; j < elements.length; j++) {
        elements[j].classList.remove("selected");
      }

      elements[i].classList.add("selected");
    }
  });
}

// console.log(elements);

// mainImg.style.backgroundImage = this.style.backgroundImage;

let mainImg = document.getElementById("main-img");
let listOfImgs = document.querySelectorAll("img.list-img");

console.log(listOfImgs)

for(let i = 0; i < listOfImgs.length; i++){
  listOfImgs[i].addEventListener("click", (event) => {
    mainImg.src = listOfImgs[i].src;
  })
}
