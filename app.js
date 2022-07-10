"use strict";
var _a;
console.log("Hello, AWP");
var STATUS;
(function (STATUS) {
    STATUS["AVAILABLE"] = "AVAILABLE";
    STATUS["OCCUPIED"] = "OCCUPIED";
    STATUS["SELECTED"] = "SELECTED";
})(STATUS || (STATUS = {}));
class Seat {
    constructor(id, isOccupied = false) {
        this.id = id;
        this.status = isOccupied ? STATUS.OCCUPIED : STATUS.AVAILABLE;
        this.element = document.createElement('div');
        this.element.classList.add('seat');
        this.element.classList.add(this.status.toLowerCase());
    }
}
class Row {
    constructor(id, seatNumber) {
        this.id = id;
        this.seats = Array.from({ length: seatNumber }).map((_, index) => {
            const seatId = seatNumber * id + index;
            return new Seat(seatId);
        });
        this.element = document.createElement('div');
        this.element.classList.add('row');
        this.element.append(...this.seats.map((seat) => seat.element));
    }
}
class SeatMap {
    constructor(rowNumber, seatNumberPerRow) {
        this.selectedSeats = [];
        this.rows = Array.from({ length: rowNumber }).map((_, index) => {
            return new Row(index, seatNumberPerRow);
        });
        this.element = document.createElement('div');
        this.element.classList.add('seat-map');
        this.element.append(...this.rows.map((row) => row.element));
    }
}
const seatMap = new SeatMap(7, 9);
(_a = document.getElementById('theater')) === null || _a === void 0 ? void 0 : _a.appendChild(seatMap.element);
