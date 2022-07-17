import StoneGrid from "./StoneGrid"

declare global {
    var turn: string;
    var endGame: boolean;
}
  
  // other.ts
  globalThis.turn = "BLACK"

export default class GoBoard
{
    stoneGrid: StoneGrid | null = null
    boardContainer: HTMLDivElement
    boardGrid: HTMLDivElement
    boardOptions: HTMLDivElement
    boardSizeSelector: HTMLSelectElement
    boardResetButton: HTMLButtonElement
    gameStatus: HTMLDivElement
    currentTurn: string

    constructor() {
        this.boardSizeSelector = document.createElement('select')
        this.boardSizeSelector.id = 'boardSizeSelector'
        this.boardSizeSelector.onchange = () => this.resetBoard()
        this.boardSizeSelector.appendChild(new Option("5 x 5", "5,5") )
        this.boardSizeSelector.appendChild(new Option("10 x 10", "10,10") )
        this.boardSizeSelector.appendChild(new Option("15 x 15", "15,15") )

        this.boardResetButton = document.createElement('button')
        this.boardResetButton.id = 'boardResetButton'
        this.boardResetButton.innerHTML = 'Reset Board'
        this.boardResetButton.style.width = "100px"
        this.boardResetButton.onclick = () => this.resetBoard()

        this.gameStatus = document.createElement('div')
        this.gameStatus.id = 'gameStatus'

        this.boardOptions = document.createElement('div')
        this.boardOptions.classList.add("boardOptions")
        this.boardOptions.appendChild(this.boardResetButton)
        this.boardOptions.appendChild(this.boardSizeSelector)
        this.boardOptions.appendChild(this.gameStatus)

        //this.boardGrid = document.createElement('div')
        //this.boardGrid.classList.add('grid')

        this.boardContainer = document.createElement('div')
        this.boardContainer.id = 'board'
        this.boardContainer.classList.add('board')
        this.currentTurn = "BLACK"

        document.getElementById('main')?.append(this.boardOptions,this.boardContainer)
    }
    
    setBoard(gridWidth: number, gridHeight: number) {        
        this.stoneGrid = new StoneGrid(gridWidth, gridHeight)
        this.boardContainer.append(this.stoneGrid.element)        
    }    

    resetBoard() {
        var child = this.boardContainer.lastElementChild; 
        while (child) {
            this.boardContainer.removeChild(child);
            child = this.boardContainer.lastElementChild;
        }   

        let arr = this.boardSizeSelector.value.split(",").map(Number)
        this.setBoard(arr[0], arr[1])
    }
}