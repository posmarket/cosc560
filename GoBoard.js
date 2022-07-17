import StoneGrid from "./StoneGrid";
// other.ts
globalThis.turn = "BLACK";
export default class GoBoard {
    constructor() {
        var _a;
        this.stoneGrid = null;
        this.boardSizeSelector = document.createElement('select');
        this.boardSizeSelector.id = 'boardSizeSelector';
        this.boardSizeSelector.onchange = () => this.resetBoard();
        this.boardSizeSelector.appendChild(new Option("5 x 5", "5,5"));
        this.boardSizeSelector.appendChild(new Option("10 x 10", "10,10"));
        this.boardSizeSelector.appendChild(new Option("15 x 15", "15,15"));
        this.boardResetButton = document.createElement('button');
        this.boardResetButton.id = 'boardResetButton';
        this.boardResetButton.innerHTML = 'Reset Board';
        this.boardResetButton.style.width = "100px";
        this.boardResetButton.onclick = () => this.resetBoard();
        this.gameStatus = document.createElement('div');
        this.gameStatus.id = 'gameStatus';
        this.boardOptions = document.createElement('div');
        this.boardOptions.classList.add("boardOptions");
        this.boardOptions.appendChild(this.boardResetButton);
        this.boardOptions.appendChild(this.boardSizeSelector);
        this.boardOptions.appendChild(this.gameStatus);
        this.boardContainer = document.createElement('div');
        this.boardContainer.id = 'board';
        this.boardContainer.classList.add('board');
        this.currentTurn = "BLACK";
        (_a = document.getElementById('main')) === null || _a === void 0 ? void 0 : _a.append(this.boardOptions, this.boardContainer);
    }
    setBoard(gridWidth, gridHeight) {
        this.stoneGrid = new StoneGrid(gridWidth, gridHeight);
        this.boardContainer.append(this.stoneGrid.element);
    }
    resetBoard() {
        var child = this.boardContainer.lastElementChild;
        while (child) {
            this.boardContainer.removeChild(child);
            child = this.boardContainer.lastElementChild;
        }
        let arr = this.boardSizeSelector.value.split(",").map(Number);
        this.setBoard(arr[0], arr[1]);
    }
}
