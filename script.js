let cell = document.getElementById("cell")
let ticTacToe = document.getElementsByClassName(" TicTacToe")

function one(){
    alert("клик")
}

for (let index = 0; index <ticTacToe.length; index++) {
     ticTacToe[index].addEventListener("click",one)
}мт
