let cell = document.querySelectorAll("#cell")
let ticTacToe = document.getElementsByClassName(" TicTacToe")
let currentPlayer = "O"


// for (let index = 0; index < cell.length; index++) {
//     cell[index].addEventListener("click", place)
// }

function place(box) {

    if (box.innerHTML != "") return;
    box.innerHTML = currentPlayer;
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    console.log(currentPlayer)
}
let first = "O";
let second = "X";
let third = "O";
if (first == second && first == third){
    alert("победитель");
}