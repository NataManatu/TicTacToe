let cell = document.querySelectorAll("#cell")
let ticTacToe = document.getElementsByClassName(" TicTacToe")

function place(){
    alert("клик")
}

for (let index = 0; index <cell.length; index++) {
     cell[index].addEventListener("click",place)
}
