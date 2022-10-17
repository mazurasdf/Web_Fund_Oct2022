function flipImage(element){
    // var card = document.querySelector("#card");

    // console.log(element.src);
    element.src = "imgs/porygon.png";
}

function flipImageBack(element){
    // var card = document.querySelector("#card");

    // console.log(element.src);
    element.src = "imgs/cardBack.png";
}

function removeElement(element){
    console.log(element);
    // element.remove();
    element.style.display = "none";
    // element.style.height = "500px";
}