import Stone from "./Stone";

export default class Row {
    id: number
    rowStones: Stone[]
    //colStones: Stone[] = []
    element: HTMLDivElement

    constructor(rowId: number, rowWidth: number) {
        this.id = rowId
        this.rowStones = Array.from({ length: rowWidth }).map((_, index) => {
            const stoneId = rowWidth * rowId + index
            let newStone = new Stone(index, rowId)
            //this.colStones.push(newStone)
            return newStone
        })

        this.element = document.createElement('div')
        this.element.classList.add('row')
        this.element.append(...this.rowStones.map((stone) => stone.element))
    }

    columnWhiteStones(colId: number) {
        return this.rowStones.filter((stone) => stone.colId == colId && stone.isWhite).map((stone) => stone.rowId).toString()
    }

    columnBlackStones(colId: number) {
        return this.rowStones.filter((stone) => stone.colId == colId && stone.isBlack).map((stone) => stone.rowId).toString()
    }    

    get whiteStoneIds() {
        return this.rowStones.filter((stone) => stone.isWhite).map((stone) => stone.colId).join("")
    } 

    get blackStoneIds() {
        return this.rowStones.filter((stone) => stone.isBlack).map((stone) => stone.colId).join("")
    }     
}