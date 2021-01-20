let arr = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14]
];

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

arr.forEach((row, rowNum, a) => {
    row.forEach((item, colNum, r) => {
        a[rowNum][colNum] = new Seat({
            row: rowNum,
            column: colNum,
            state: 'L',
            ferry: "ferry1"
        });
    });
});

console.log(arr);
console.log();

// replace layout of strings with layout of seat objects.
// for (let i = 0; i < this.layout.length; i++) {
//     for (let j = 0; j < this.layout[0].length; j++) {
//         // let s = this.layout[i][j];
//         this.layout[i][j] = new Seat({
//             row: i,
//             column: j,
//             state: this.layoutStrings[i][j],
//             ferry: this
//         });
//     }
// }