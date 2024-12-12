const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let balls = [];

for (let i =0 ; i < 10; i++) {
    balls.push(new Ball(canvas.width / 2, canvas.height / 2))
}


function animar () {

    ctx.clearRect(0,0, canvas.width, canvas.height);

    balls.forEach(ball => {


        balls.forEach(ballT => {

            let dx = ball.x - ballT.x;
            let dy = ball.y - ballT.y;

            let dist = Math.sqrt(dx ** 2 + dy ** 2);

            if (dist < 300) {
                ctx.beginPath();
                ctx.moveTo(ball.x, ball.y);
                ctx.lineTo(ballT.x, ballT.y);
                ctx.stroke();
                ctx.closePath();
            }


            
        })

        ball.dibujar();
        ball.mover();
    })

    requestAnimationFrame(animar)
}

animar();