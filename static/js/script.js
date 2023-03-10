let grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


let output = document.querySelector(".sottotitolo")

let links = document.querySelectorAll(".gridBtn"),
    currentPlayer = 1,
    cellIsOccupied = true


for (let i = 0; i < links.length; i++) {
    let link = links[i]
    link.addEventListener("click", function(e) {
        e.preventDefault()
        cellIsOccupied = e.currentTarget.classList.contains("player2") || e.currentTarget.classList.contains("player1");
        console.log(cellIsOccupied)
        if (cellIsOccupied === false) {

            console.log(e.currentTarget.dataset)
            e.currentTarget.classList.toggle("player" + currentPlayer)

            let riga = e.currentTarget.dataset.row
            let colonna = e.currentTarget.dataset.col

            if (currentPlayer === 1) {
                grid[riga][colonna] = "X"
            } else {
                grid[riga][colonna] = "O"
            }


            if (currentPlayer === 1) {
                currentPlayer = 2
                output.innerHTML = "tocca giocatore 2"
            } else {
                currentPlayer = 1
                 output.innerHTML = "tocca giocatore 1"
            }

            console.log(currentPlayer)
        }
    })
}


reset.addEventListener("click", function(event) {
    window.location.reload()
})


function getEmptyCells(grid){
        let emptyCells = []
        for (i = 0; i = 2; i ++){
            for (j = 0; j = 2; j ++){
               if(grid[i][j] === null){
                let empty = [i][j]
                emptyCells.push(empty)
               } 
            }
        }
        return emptyCells
    }


function getBestMove(grid, currentPlayer){
    let emptyCells = getEmptyCells(board)
}

  
    
    