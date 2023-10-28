let height = 500;
let width = 500;
let counter = 0;

const myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover",begin);

function begin(){
    counter++;
    let xCoord = Math.floor(Math.random() * width);
    let yCoord = Math.floor(Math.random() * height);
    let x = myButton.getBoundingClientRect().left;
    let y = myButton.getBoundingClientRect().top;
    randomMove(xCoord,yCoord,x,y);
}



function randomMove(a,b,x,y){
    if(counter < 4){
        myButton.style.left = (a+x)%width + "px";
        myButton.style.top = (b+y)%height + "px";
    }
}

