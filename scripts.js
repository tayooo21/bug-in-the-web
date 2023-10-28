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

for (let i = 0; i < alphabet.length; i++) {
    const letterDiv = document.createElement('div');
    letterDiv.textContent = alphabet[i];
    letterDiv.className = 'letter';
    lettersDiv.appendChild(letterDiv);

    letterDiv.addEventListener('click', () => {
        output.textContent += incorrectAlphabet[i];
    });
}
