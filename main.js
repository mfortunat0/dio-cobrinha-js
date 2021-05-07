let canvas = document.querySelector("#snake")
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

function criarBG(){
  context.fillStyle = "lightgreen"
  context.fillRect(0,0,16*box,16*box)
}

function criarCobrinha(){
  snake.forEach(value =>{
    context.fillStyle = "green"
    context.fillRect(value.x, value.y,box,box)
  })
}

criarBG()
criarCobrinha()