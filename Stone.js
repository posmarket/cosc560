var STATUS;
(function (STATUS) {
    STATUS["AVAILABLE"] = "AVAILABLE";
    STATUS["TAKEN"] = "TAKEN";
    STATUS["WHITE"] = "WHITE";
    STATUS["BLACK"] = "BLACK";
})(STATUS || (STATUS = {}));
export default class Stone {
    constructor(id, rowId, isOccupied = false) {
        this.id = (10 + id) + ":" + (10 + rowId);
        this.rowId = (10 + rowId);
        this.colId = (10 + id);
        this.status = STATUS.AVAILABLE;
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.classList.add('stone');
        this.element.classList.add(this.status.toLowerCase());
        this.element.addEventListener('click', () => {
            this.handleClick();
        });
        //console.log("colId: " + this.colId)
    }
    handleClick() {
        if (this.status === STATUS.WHITE || this.status === STATUS.BLACK || globalThis.endGame === true)
            return;
        this.element.classList.remove(this.status.toLowerCase());
        this.element.classList.add(globalThis.turn.toLowerCase());
        if (globalThis.turn == "WHITE") {
            this.status = STATUS.WHITE;
            globalThis.turn = "BLACK";
        }
        else {
            this.status = STATUS.BLACK;
            globalThis.turn = "WHITE";
        }
        const gameStatus = document.getElementById('gameStatus');
        gameStatus.innerHTML = "ACTIVE PLAYER: " + globalThis.turn;
    }
    get isSelected() {
        return this.status === STATUS.WHITE;
    }
    get isWhite() {
        return this.status === STATUS.WHITE;
    }
    get isBlack() {
        return this.status === STATUS.BLACK;
    }
}
