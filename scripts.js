document.body.addEventListener('mousemove', e => 
{
    const x = Math.floor(e.clientX / window.innerWidth * 255);
    const y = Math.floor(e.clientY / window.innerHeight * 255);
    document.body.style.background = `rgb(${x}, ${y}, 100)`;
});
