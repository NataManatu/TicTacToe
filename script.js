let cell = document.querySelectorAll("#cell")
let ticTacToe = document.getElementsByClassName(" TicTacToe")
let currentPlayer = "q"

for (let index = 0; index < cell.length; index++) {
    cell[index].addEventListener("click", place)
}

function place() {
   cell.innerHTML = currentPlayer;
    if (currentPlayer == "q") {
        currentPlayer = "s";
    }
    else {
        currentPlayer = "q";
    }
    alert(currentPlayer)
}


