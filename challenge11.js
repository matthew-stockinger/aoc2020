/******** This is a case where it would probably be easier with arrays of strings, procedurally programmed. */

const testInput =
    `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

const realInput =
    `LLLLLLLLL.L.LLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLLL
LLLLLLLLL.LLLLLL..LLLLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLL.LLLL..LLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
L.LLLL.L..L.LL....L......L...LL.LL..L....L...LL.LL.L.LL.LL..LL............L..L...LL.L.L.L..LLL...L
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.L.LLLLLL.LLLLLLLLLL.LLLL.LL.LLLLL.LLLLLLLL.LLLLLL
LLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LL.LLLL.LLLLLLLLL.LLL.LLLL..LLL.LLLLL.LL.LLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL..LLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL
LLLLLLLLL.LL.LLL.LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LL.LLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL..LLLLLLLL..LLL.LLLLL.LL.LLLLLLLLLL.LLLLLLLLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL
....LL.....LL..LLL..L......LL.LL......L.....L.....LL.LLLL..L.L.......LL.LL.....L.........L...L..L.
LLLLLLL.L.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLLLLLL.LLLLLL.L.LLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLL
.LLL....L....LL....L..........LL.L................L...L...LL......L.....LLLL...LL..L.....L.L..L.L.
LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LL.LLLLLLLLLL.LLLL..LLLLLLLLL
LLLLLLLLL..LLLLLLLLLL.LLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLL..LLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.L.LLLLLL.LLLLLLLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLL
.L.LL..L.....L...L...L.L...L..L..L.L.L.L........L..LL....L...L...L.....LL.L............L..L..L....
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLL.LLLLLLLLLLLLLL.LLLLL.LL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.L.
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.L.LLLL.LLLLLLLLL.LLLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLLL.LL.LLLL..LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLL.L.LLLLL.LLLLLLLLL
L.L..L.L..L.....LL...LL..LL..L.L...L...L.....L...L.......L...LL.............LL.LL.LL....L.L.LL.L..
LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLL.LL.LLLLL.LLL.LLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLL.L.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL
.........L.L.L.LL.LLLLL..LL..LL......LL.L.L.L...L.L.....L.LL.....LLL.L.L.L.....LL...L..L....L..L.L
LLLLLLLLL.LLLLLL.LLLLLLLL.L.LLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLL..LLLLLL.LL.LL.LLLL.LLLLL.LLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLL.LLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLL.LLLL.LLLL
.L.........LL....L..LL.LLL.LL.L...L..L.....LLLL..........L.LLL...LLLL.L..L.L.LLL...LLL..L.L......L
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LL.LLLLLL
LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLL..LLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLL.LLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLLL
.LL.L.LL.LLL.LLL.L....L....LL..L.L............L.....L.....L....LLLL..L......L.L...LL...LL.L...L.L.
LLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLL.L.LLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL.LLL.LLLLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLL.LLLLLLLL.LLL.LLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLL.
L.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
.L..L.L....L.........L.L...L..L.L..LL.........L.L....L..LL...L....L.L...LLL.L.LL.LL.L..L...LL....L
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLL..LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLL.LLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLL.LL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.L.LL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLL.L.LLLLL.LL.LLLLLL
LLLLLL.LL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLL.LL.LLLLL.LLLL..LLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLL.LLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLLLL.LL.LLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLL
.LL..L....L.....L......LLL......L...LLLL....LLL......L..L......L..LL...LL...L......LL.LL....L..L..
LLLLLLLLL.LLLLLL.LLLLLLLLLL..L.LL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLL...LLLLLLL.LLLLLLLL.LLLL.LLLL.LL.LLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLL
...L.LL..........L....L.L.L....L......LL..........L.L.....LL..LL..L..L..L..L...L..L..L..L.....L...
LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLL..LL.L.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLL.LLLLLLL..LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLL..LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLLLLLL.L.LLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLL.LLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLL.LL.LL.LLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLL.LL..LLL.LLL.L.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLL.LLL.LLLL.LLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLL.L.LLLLL.LLLLLLLLLLLLLLL
..L..L.LL..L.L..LL...L.L...L....LL..L.....L..L..L..L.....LL.L..L.LL......L.LLLL.LLL.LL.....L.L....
LLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLL.LLLL.L.LLLLLLLLL
LLLLLLLLL.LLLLLL.LL.LLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLL
LLLLL.LLL.LLLLLLLLLLLLL.L.LLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLLLLLLL.LLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLL.L.LLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL.L.LLLLL.LLLLLLLLLLLLLLL
LLLLLL.LLLLLLLL..LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLL.L.LLLL.LLLLLLLLLLL.LLLL.LLLLL.LLLLLLLLLLLL.LLLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
L.LLLLLLL.LLLLLL.L.LLLLLL..LLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLL.LLLLLLLL.LLLLLLLLLLL.L.LLL.L.LLLLLLLLLLLLLLL
.LLLLLLLL.LLLLLL.LLLLLLLL.LLLL.LL.LLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLLLLL.LLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLL.LLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LL.LLLLLLL.LLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLL
LLLLLLLL..LLLLLL.LLL.LLLL.LLLLLLL.LLLL.LLLLLLLLL.LLLL.LLL.LLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL`;

class Ferry {
    constructor({ input }) {
        this.input = input;
        this.layout = input.split(/\r?\n/g);
        this.layout = this.layout.map(row => row.split(''));
        // add 1 floor to beginning and end of each row.
        for (const row of this.layout) {
            row.push('.');
            row.unshift('.');
        }
        // add a row of floor to front and back of ferry.
        this.layout.unshift(new Array(this.layout[0].length).fill('.'));
        this.layout.push(new Array(this.layout[0].length).fill('.'));
        // deep copy layout.
        this.layoutStrings = [];
        for (const row of this.layout) {
            this.layoutStrings.push([...row]);
        }
        // replace layout of strings with layout of seat objects.
        for (let i = 0; i < this.layout.length; i++) {
            for (let j = 0; j < this.layout[0].length; j++) {
                // let s = this.layout[i][j];
                this.layout[i][j] = new Seat({
                    row: i,
                    column: j,
                    state: this.layoutStrings[i][j],
                    ferry: this
                });
            }
        }
    }

    printLayout() {
        for (let i = 0; i < this.layout.length; i++) {
            for (let j = 0; j < this.layout[0].length; j++) {
                this.layoutStrings[i][j] = this.layout[i][j].state;
            }
        }
        this.layoutStrings.forEach(row => console.log(row.join(' ')));
    }

    seatChange() {
        // make a shadow copy of the ferry layout.
        let shadowCopy = [];
        for (let i = 0; i < this.layout.length; i++) {
            shadowCopy.push([]);
            for (let j = 0; j < this.layout[0].length; j++) {
                shadowCopy[i][j] = new Seat({
                    row: i,
                    column: j,
                    state: this.layout[i][j].state,
                    ferry: this
                });
            }
        }
        // check the rules against every seat and apply results to shadow copy.
        for (let i = 1; i < shadowCopy.length - 1; i++) {
            for (let j = 1; j < shadowCopy[0].length - 1; j++) {
                let currentSeat = this.layout[i][j];
                if (currentSeat.isEmpty() && currentSeat.numOccupiedInSight() === 0) {
                    shadowCopy[i][j].state = "#";
                } else if (currentSeat.isOccupied() && currentSeat.numOccupiedInSight() >= 5) {
                    shadowCopy[i][j].state = "L";
                }
            }
        }
        // check if any seats changed state.
        let seatChanged = false;
        for (let i = 0; i < shadowCopy.length; i++) {
            if (!seatChanged) {
                for (let j = 0; j < shadowCopy[0].length; j++) {
                    if (shadowCopy[i][j].state !== this.layout[i][j].state) {
                        seatChanged = true;
                        break;
                    }
                }
            } else {
                break;
            }
        }
        // overwrite ship's real seats from shadow copy.
        for (let i = 1; i < shadowCopy.length - 1; i++) {
            for (let j = 1; j < shadowCopy[0].length - 1; j++) {
                this.layout[i][j].state = shadowCopy[i][j].state;
            }
        }
        // return a value indicating whether any seats actually changed.
        return seatChanged;
    }

    // iterate seatChange until stable.
    fillSeats() {
        while (this.seatChange()) {
            // this.printLayout();
            continue;
        }
        return this.layout;
    }

    numOccupiedSeats() {
        let res = 0;
        for (let i = 0; i < this.layout.length; i++) {
            for (let j = 0; j < this.layout[0].length; j++) {
                res += this.layout[i][j].state === "#" ? 1 : 0;
            }
        }
        return res;
    }
}

class Seat {
    constructor({ row, column, state, ferry }) {
        this.row = row;
        this.column = column;
        this.state = state;
        this.ferry = ferry;
    }

    isEmpty() {
        return this.state === "L";
    }

    isOccupied() {
        return this.state === '#';
    }

    // never feed this a boundary space.
    numOccupiedNeighbors() {
        let res = 0;
        let ship = this.ferry;
        let neighbors = [
            ship.layout[this.row][this.column - 1],
            ship.layout[this.row][this.column + 1],
            ship.layout[this.row - 1][this.column - 1],
            ship.layout[this.row - 1][this.column],
            ship.layout[this.row - 1][this.column + 1],
            ship.layout[this.row + 1][this.column - 1],
            ship.layout[this.row + 1][this.column],
            ship.layout[this.row + 1][this.column + 1]
        ];
        neighbors.forEach(neighbor => res += neighbor.state === '#' ? 1 : 0);
        return res;
    }

    numOccupiedInSight() {
        let res = 0;
        let directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
        for (const direction of directions) {
            // console.log(`checking direction ${direction}`);
            res += this.isSightLineOccupied({ dir: direction, seat: this }) ? 1 : 0;
            // console.log(`count now = ${res}`);
        }
        return res;
    }

    // L seats will block everything behind them.
    isSightLineOccupied({ seat, dir }) {
        let neighbor = seat.getNeighbor({ seat: seat, dir: dir });
        let neighborState = seat.nearestSeatState({ seat: seat, dir: dir });
        if (neighborState === ".") {
            return this.isSightLineOccupied({ seat: neighbor, dir: dir });
        } else if (neighborState === "#") {
            return true;
        } else if (neighborState === "x" || neighborState === "L") {
            return false;
        } else {
            return false;
        }
    }
    
    getNeighbor({ seat, dir }) {
        let neighbor;
        let layout = this.ferry.layout;
        switch (dir) {
            case 'n':
                neighbor = layout[seat.row - 1] ? layout[seat.row - 1][seat.column] : undefined;
                break;
            case 'ne':
                neighbor = layout[seat.row - 1] ? layout[seat.row - 1][seat.column + 1] : undefined;
                break;
            case 'e':
                neighbor = layout[seat.row][seat.column + 1];
                break;
            case 'se':
                neighbor = layout[seat.row + 1] ? layout[seat.row + 1][seat.column + 1] : undefined;
                break;
            case 's':
                neighbor = layout[seat.row + 1] ? layout[seat.row + 1][seat.column] : undefined;
                break;
            case 'sw':
                neighbor = layout[seat.row + 1] ? layout[seat.row + 1][seat.column - 1] : undefined;
                break;
            case 'w':
                neighbor = layout[seat.row][seat.column - 1];
                break;
            case 'nw':
                neighbor = layout[seat.row - 1] ? layout[seat.row - 1][seat.column - 1] : undefined;
                break;
            default:
                throw new Error("getNeighbor error");
        }
        return neighbor;
    }

    // dir must be a cardinal direction string
    nearestSeatState({ seat, dir }) {
        let neighbor = this.getNeighbor({ seat: seat, dir: dir });
        // console.log(`checking seat ${seat.row}, ${seat.column} to the ${dir}.`);
        
        // console.log(`neighbor = ${neighbor ? neighbor.state : neighbor}`);
        if (neighbor === undefined) {
            // if we're at the boundary
            return 'x';
        } else if (neighbor.state === '.') {
            // if neighbor is empty, keep looking.
            return neighbor.nearestSeatState({ dir: dir, seat: neighbor });
        } else {
            // if neighbor is a seat, return state of seat.
            return neighbor.state;
        }
    }
}

const ferry1 = new Ferry({ input: testInput });
const ferry2 = new Ferry({ input: realInput });
ferry2.fillSeats();
ferry2.printLayout();
console.log(ferry2.numOccupiedSeats());
console.log();