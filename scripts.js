document.body.addEventListener('mousemove', e => 
{
    const x = Math.floor(e.clientX / window.innerWidth * 255);
    const y = Math.floor(e.clientY / window.innerHeight * 255);
    document.body.style.background = `rgb(${x}, ${y}, 100)`;
});

const lettersDiv = document.getElementById('letters');
const output = document.getElementById('output');
const alphabet = 'RZKTFXEUGHMIJLPNBOCSVWYAQD';
const incorrectAlphabet = 'XZABCEGTHIJLWNOPQRSDYUVMFK';

for (let i = 0; i < alphabet.length; i++) 
{
    const letterDiv = document.createElement('div');
    letterDiv.textContent = alphabet[i];
    letterDiv.className = 'letter';
    lettersDiv.appendChild(letterDiv);

    letterDiv.addEventListener('click', () => 
    {
        output.textContent += incorrectAlphabet[i];
    });
}

const backspaceDiv = document.createElement('div');
backspaceDiv.textContent = 'BACK';
backspaceDiv.className = 'letter';
lettersDiv.appendChild(backspaceDiv);

backspaceDiv.addEventListener('click', () => 
{
    output.textContent = output.textContent.slice(0, -1);
});

let imageSelected = false;

function checkAnswer(imageId) 
{
    if (imageId === 'image1') 
    { 
        alert("Correct! This is the cat.");
        imageSelected = true;
    } else 
    {
        alert("Incorrect! This is not the cat.");
        imageSelected = false;
    }
}

enter.addEventListener('click', () => {
    if (output.textContent === 'BOTTLE' && imageSelected) {
        window.location.href = 'accessed.html';
    } else {
        output.textContent = '';
        imageSelected = false;
    }
});
