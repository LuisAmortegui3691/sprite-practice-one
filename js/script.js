let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 575;
const spriteHeight = 523;


let gameFrame = 0; // Variable para controlar velocidad de los frames
const staggerFrames = 3; // Variable para controlar velocidad de los frames
const spriteAnimations = [];
const animationsStates = [
    {
        name: 'idle', // one 
        frames: '7',
    },
    {
        name: 'jump', // two
        frames: '7',
    },
    {
        name: 'fall', // Four
        frames: '7',
    },
    {
        name: 'run', // Five
        frames: '9',
    },
    {
        name: 'dizzy', // Six
        frames: '11',
    },
    {
        name: 'sit', // Seven
        frames: '5',
    },
    {
        name: 'roll', // Eignht
        frames: '7',
    },
    {
        name: 'bite', // nine
        frames: '7',
    },
    {
        name: 'ko', // ten
        frames: '12',
    },
    {
        name: 'gethit', // twelve
        frames: '4',
    },
];
animationsStates.forEach((state, index) => {
    let frames = {
        loc: [],
    };
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    };
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);
canvas.style.top = '50%';
canvas.style.left = '50%';
canvas.style.position = 'absolute';
canvas.style.transform = 'translate(-50%, -50%)';

const playerImage = new Image();
playerImage.src = 'img/shadow_dog.png'; 

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); // Borra contenido del lienzo
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; // controla la velocidad y los frame, si son 11 frame se deve poner -1, es decir 10 frame
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    // ctx.fillRect(100,50,100,100); // Dibuja un rectangulo (x,y,width, height) cordenadas, ancho y alto
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); guia de lo que obtiene metodo 
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); // Dibuja la imagen
    gameFrame++;
    requestAnimationFrame(animate); // Realiza la animacion
}

animate();

