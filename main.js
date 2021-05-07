let canvas = document.querySelector("#snake")
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

let direction = "right"

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

function iniciaJogo(){
  criarBG()
  criarCobrinha()

  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if(direction === "right") snakeX += box
  if(direction === "left") snakeX -= box
  if(direction === "up") snakeY -= box
  if(direction === "down") snakeY += box

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead)
}

let jogo = setInterval(iniciaJogo, 100);

iniciaJogo()