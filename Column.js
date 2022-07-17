export default class Column {
    constructor(colId, rowHeight) {
        this.id = colId;
        //this.stones = stoneArray
    }
    get selectedStoneIds() {
        return this.stones.filter((stone) => stone.isSelected).map((stone) => stone.id);
    }
    get whiteStoneIds() {
        return this.stones.filter((stone) => stone.isWhite).map((stone) => stone.colId).join("");
    }
    get blackStoneIds() {
        return this.stones.filter((stone) => stone.isBlack).map((stone) => stone.colId).join("");
    }
}
