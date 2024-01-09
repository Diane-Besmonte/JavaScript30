const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const colorPick = document.getElementById('colorChoice');
const pen = document.getElementById('size');

function changeColor(){
    colorPick.addEventListener('change', (e) => {
        ctx.strokeStyle = e.target.value; 
    });
};

function changePenSize(){
    pen.addEventListener('change', (e) => {
        ctx.lineWidth = e.target.value; 
    });
};


canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight - 300;
ctx.strokeStyle = changeColor(); 
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = changePenSize();

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if(!isDrawing) return //;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
 
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);