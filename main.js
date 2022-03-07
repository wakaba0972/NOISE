//
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')
canvas.height = 800
canvas.width = 800

let reqID
let pointNum = 10
let interval = canvas.height / (pointNum - 1)
let points = []
let camX = 0

function init(){
    cancelAnimationFrame(reqID)
    pointNum = 10
    points = []
    camX = 0
    interval = canvas.height / (pointNum - 1)
    for(let i=0; i<pointNum*2; ++i){
        points.push(rand(1, 799))
    }
}

function loop(){
    //Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Draw Noise
    ctx.beginPath()
    ctx.moveTo(0, easing(points[Math.floor(camX/interval)], points[Math.floor(camX/interval)+1], (camX%interval)/interval))
    for(let i=1; i<800; ++i){
        ctx.lineTo(i, easing(points[Math.floor((camX+i)/interval)], points[Math.floor((camX+i)/interval)+1], ((camX+i)%interval)/interval))
    }

    //Fill Color
    ctx.lineTo(800, 0)
    ctx.lineTo(0, 0)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    //Delete old Points And Generate The New's
    if(!(camX%800)){
        camX = 0
        points.splice(0, pointNum-1)
        for(let i=0; i<pointNum-1; ++i){
            points.push(rand(1, 799))
        }
    }

    camX+=5
    reqID = requestAnimationFrame(loop)
}

function main(){
    init()
    reqID = requestAnimationFrame(loop)
}

main()