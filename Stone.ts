enum STATUS {
    AVAILABLE = 'AVAILABLE',
    TAKEN = 'TAKEN',
    WHITE = 'WHITE',
    BLACK = 'BLACK',
}

export default class Stone {
    id: string
    rowId: number
    colId: number
    status: STATUS
    element: HTMLDivElement

    constructor(id: number, rowId: number, isOccupied: boolean = false) {
        this.id = (10+id) + ":" + (10+rowId)

        this.rowId = (10+rowId)
        this.colId = (10+id)
        this.status = STATUS.AVAILABLE
        this.element = document.createElement('div')
        this.element.id = this.id
        this.element.classList.add('stone')
        this.element.classList.add(this.status.toLowerCase())
        this.element.addEventListener('click', () => {
            this.handleClick()
        })
        //console.log("colId: " + this.colId)
    }

    handleClick() {
        if (this.status === STATUS.WHITE || this.status === STATUS.BLACK || globalThis.endGame === true) return

        this.element.classList.remove(this.status.toLowerCase())
        this.element.classList.add(globalThis.turn.toLowerCase())

        if(globalThis.turn == "WHITE") {
            this.status = STATUS.WHITE
            globalThis.turn = "BLACK"
        } else {
            this.status = STATUS.BLACK
            globalThis.turn = "WHITE"
        }
        const gameStatus = document.getElementById('gameStatus')
        gameStatus.innerHTML = "ACTIVE PLAYER: " + globalThis.turn
    }

    get isSelected() {
        return this.status === STATUS.WHITE
    }

    get isWhite() {
        return this.status === STATUS.WHITE
    }    

    get isBlack() {
        return this.status === STATUS.BLACK
    }        
}