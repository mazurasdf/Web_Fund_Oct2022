var count = 0;
var counterElement = document.querySelector("#counterElement");
function buttonClick(){
    count++;
    // console.log(`you clicked me ${count} times`);
    
    console.log(counterElement.innerText);
    counterElement.innerText = `you clicked ${count} times`;
}

var hoverCount = 0;
function hoverText(element){
    // console.log(element);
    hoverCount++;

    element.innerText = `you hovered ${hoverCount} times`;
    // console.log(hoverCount);
}