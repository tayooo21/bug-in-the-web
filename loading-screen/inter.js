const progressBar = document.getElementsByClassName("progress-bar")[0]
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))


setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0
    progressBar.style.setProperty("--width",width+.1)
},12)


function startLoading(){
    let timerId = null;
    let scaleX = 1;

    timerId = setInterval(frame,1000);

    function frame(){
        if(scaleX >= 100){
            clearInterval(timerId);
        }
        else{
            scaleX+=0.1;
            progressBar.style.width = scaleX+"%";
        }
    }
}



const repeatedGreetings = async () => {
    await sleep(1000)
    fadein(text1);
    moveUp1();
    await sleep(2000)
    fadeout(text1);

    await sleep(1000)
    fadein(text2);
    moveUp2();
    await sleep(2000)
    fadeout(text2);

    await sleep(1000)
    fadein(text3);
    moveUp3();
    await sleep(2000)
    fadeout(text3);

    await sleep(1000)
    fadein(text4);
    moveUp4();
    await sleep(2000)
    fadeout(text4);

    console.log("Third")
}



function moveUp1(){
    let y = 200;
    let moveUp1 = setInterval(() => {
        if (y <= 100) {
            clearInterval(fadeIn);
        }
        y-=0.15;
        text1.style.top = y+"px";
    }, 10);
}
function moveUp2(){
    let y = 200;
    let moveUp1 = setInterval(() => {
        if (y <= 100) {
            clearInterval(fadeIn);
        }
        y-=0.15;
        text2.style.top = y+"px";
    }, 10);
}
function moveUp3(){
    let y = 200;
    let moveUp1 = setInterval(() => {
        if (y <= 100) {
            clearInterval(fadeIn);
        }
        y-=0.15;
        text3.style.top = y+"px";
    }, 10);
}
function moveUp4(){
    let y = 200;
    let moveUp1 = setInterval(() => {
        if (y <= 100) {
            clearInterval(fadeIn);
        }
        y-=0.15;
        text4.style.top = y+"px";
    }, 10);
}

function fadein(element){
    let opacity = 0;
    let fadeIn = setInterval(() => {
        if (opacity >= 1) {
        clearInterval(fadeIn);
        }
        element.style.opacity = opacity;
        opacity += 0.01;
    }, 10);
}

function fadeout(element){
    let opacity = 1;
    let fadeIn = setInterval(() => {
        if (opacity <= 0) {
        clearInterval(fadeIn);
        }
        element.style.opacity = opacity;
        opacity -= 0.01;
    }, 10);
}

repeatedGreetings();
