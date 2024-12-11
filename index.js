const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let balls = [];

for (let i =0 ; i < 5; i++) {
    balls.push(new Ball(canvas.width / 2, canvas.height / 2))
}


function animar () {

    balls.forEach(ball => {
        ball.dibujar();
        ball.mover();
    })

    requestAnimationFrame(animar)
}

animar();