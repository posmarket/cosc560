import Row from "./Row";
export default class StoneMap {
    constructor(gridWidth, gridHeight) {
        this.selectedStones = [];
        this.gridSize = 0;
        this.gridWidth = 0;
        this.gridHeight = 0;
        this.colSequence = "";
        this.rowSequence = "";
        this.gridSize = gridWidth * gridHeight;
        this.gridWidth = gridWidth;
        this.gridWidth = gridHeight;
        // Create a string sequence to compare against stone positions.
        // This will allow code to check if there is a winner (5 in a column)
        for (let i = 0; i < gridWidth; i++) {
            this.colSequence += (i + 10);
        }
        // Same for rows
        for (let i = 0; i < gridHeight; i++) {
            this.rowSequence += (i + 10);
        }
        this.rows = Array.from({ length: gridHeight }).map((_, index) => {
            return new Row(index, gridWidth);
        });
        this.element = document.createElement('div');
        this.element.classList.add('stone-map');
        this.element.append(...this.rows.map((row) => row.element));
        this.element.addEventListener('click', (event) => {
            this.checkForWinner();
        });
    }
    checkForWinner() {
        let winner = this.checkRowsForWinner();
        if (winner !== "") {
            alert(winner);
            globalThis.endGame = true;
            const gameStatus = document.getElementById('gameStatus');
            gameStatus.innerHTML = "GAME ENDED: " + winner;
        }
        winner = this.checkColsForWinner();
        console.log("colWinner: " + winner);
        if (winner !== "") {
            alert(winner);
            globalThis.endGame = true;
            const gameStatus = document.getElementById('gameStatus');
            gameStatus.innerHTML = "GAME ENDED: " + winner;
        }
    }
    createCols() {
        for (let i = 0; i < this.gridWidth; i++) {
            for (let i = 0; i < this.gridWidth; i++) {
                this.colSequence += (i + 10);
            }
        }
    }
    checkColsForWinner() {
        let colArrayWhite = [];
        let colArrayBlack = [];
        let colSequence = this.colSequence;
        let gridWidth = this.gridWidth;
        let currentStone = "";
        let winner = "";
        for (let i = 10; i < gridWidth + 10; i++) {
            // check each row (by column index for stones to add to array)
            this.rows.forEach(function (value) {
                // white stones
                currentStone = value.columnWhiteStones(i);
                if (currentStone !== "")
                    colArrayWhite.push(currentStone);
                // black stones
                currentStone = value.columnBlackStones(i);
                if (currentStone !== "")
                    colArrayBlack.push(currentStone);
            });
            // if the array length is greater than 5 and the sequence matches the column sequence
            // then we have a winner (WHITE)
            if (colArrayWhite.length >= 5) {
                if (colSequence.indexOf(colArrayWhite.join("")) >= 0)
                    winner = "WHITE WON";
            }
            if (colArrayBlack.length >= 5) {
                if (colSequence.indexOf(colArrayBlack.join("")) >= 0)
                    winner = "BLACK WON";
            }
        }
        return winner;
    }
    checkRowsForWinner() {
        const colSequence = this.colSequence;
        let stoneCount = 0;
        let winner = "";
        this.rows.forEach(function (value) {
            const whiteStones = value.whiteStoneIds;
            stoneCount += whiteStones.length;
            if (whiteStones.length >= 10) {
                if (colSequence.indexOf(whiteStones) >= 0)
                    winner = "WHITE WON";
            }
            const blackStones = value.blackStoneIds;
            stoneCount += blackStones.length;
            if (blackStones.length >= 10) {
                if (colSequence.indexOf(blackStones) >= 0)
                    winner = "BLACK WON";
            }
        });
        stoneCount = stoneCount / 2;
        if (winner == "" && stoneCount === this.gridSize)
            winner = "GAME IS A DRAW";
        return winner;
    }
}
