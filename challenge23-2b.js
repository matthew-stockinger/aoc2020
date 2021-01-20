// rewrote 23-2 with a MyMap subclass of Map.
// way slower than arrays.  
// lesson learned:  built-ins are always faster.


const testInput1 = `389125467`;
const realInput = `962713854`;

const MIN_LABEL = 1;
const MAX_LABEL = 1000000;

class MyMap extends Map {
    constructor(iterable) {
        super(iterable);
    }

    splice(start, deleteCount, ...items) {
        let res = new MyMap();
        if (items.length === 0) {
            // deleting
            for (let i = start; i < start + deleteCount; i++) {
                res.set(i, this.get(i));
                this.delete(i);
            }
            // shift everything left.
            for (let i = start; i < this.size; i++) {
                this.set(i, this.get(i + deleteCount));
            }
            // remove ending elements, which are now undefined.
            for (let i = this.size - deleteCount; i < this.size; i++) {
                this.delete(i);
            }
        } else {
            // inserting
            let count = items.length;
            // move everything up by length of insert.
            for (let i = this.size + count - 1; i > start - 1; i--) {
                this.set(i, this.get(i - count));
            }
            // set insert values
            let j = 0;
            for (let i = start; i < start + count; i++) {
                this.set(i, items[j]);
                j += 1;
            }
        }
        return res;
    }

    push(...elements) {
        let nextIndex = this.size;
        for (let i = 0; i < elements.length; i++) {
            this.set(nextIndex + i, elements[i]);
        }
        return this.size;
    }

    indexOf(searchElement) {
        for (let entry of this.entries()) {
            if (entry[1] === searchElement) return entry[0];
        }
        return -1;
    }

    shift() {
        let res = this.get(0);
        for (let i = 0; i < this.size; i++) {
            this.set(i, this.get(i + 1));
        }
        this.delete(this.size - 1);
        return res;
    }

    unshift(...elements) {
        let count = elements.length;
        // move everything up by length of insert.
        for (let i = this.size + count - 1; i > -1; i--) {
            this.set(i, this.get(i - count));
        }
        // set insert values
        let j = 0;
        for (let i = 0; i < count; i++) {
            this.set(i, elements[j]);
            j += 1;
        }
        return this.size;
    }

    pop() {
        let res = this.get(this.size - 1);
        this.delete(this.size - 1);
        return res;
    }

    slice(start = 0, end = this.size) {
        let res = new MyMap();
        for (let i = start; i < end; i++) {
            res.set(i, this.get(i));
        }
        return res;
    }
}

const init = (input) => {
    let res = new MyMap(input.split('').map(item => parseInt(item)).entries());
    for (let i = 10; i < 1000001; i++) {
        res.set(i - 1, i);
    }
    return res;
};

const makeMoves = (cups, howMany, startIndex) => {
    let nextIndex = startIndex;
    for (let i = 0; i < howMany; i++) {
        console.log(`-- move ${i + 1} --`);
        console.log(`cups: ${cups.slice(0, nextIndex)} (${cups.get(nextIndex)}) ${cups.slice(nextIndex + 1)}`);
        nextIndex = move(cups, nextIndex);
        // console.log(i);
    }
    console.log(`-- final --`);
    console.log(`cups: ${cups.slice(0, nextIndex)} (${cups.get(nextIndex)}) ${cups.slice(nextIndex + 1)}`);
    // console.log(`order = ${getOrder(cups)}`);
};

// returns index of the new current cup (the cup clockwise of current).  
const move = (cups, currentIndex) => {
    if (currentIndex >= cups.size) throw new Error('current index exceeds move limit.');
    let currentLabel = cups.get(currentIndex);
    // console.time('getPickup');
    let pickup = getPickup(cups, currentIndex);
    // console.timeEnd('getPickup');
    console.log(`pick up: ${pickup}`);
    // console.time('getdest');
    let destIndex = getDest(cups, currentLabel);
    // console.timeEnd('getdest');
    console.log(`destination: ${cups.get(destIndex)}\n`);
    // console.time('placepickup');
    placePickup(pickup, cups, destIndex);
    // console.timeEnd('placepickup');
    // console.time('shuffle');
    shuffle(cups, currentIndex, currentLabel);
    // console.timeEnd('shuffle');
    console.log();
    return wrapIndex(cups, currentIndex + 1);
};

// returns copy of the pickup cups.  Doesn't actually pull them yet.
const getPickup = (cups, currentIndex) => {
    let res = cups.splice(currentIndex + 1, 3);
    if (res.size < 3) {
        res.push(...cups.splice(0, 3 - res.size));
    }
    return res;
};

// find the destination cup.
// pickup should already have been pulled from cups.
const getDest = (cups, currentLabel) => {
    let destLabel = wrapLabel(currentLabel - 1);
    let destIndex = cups.indexOf(destLabel);
    while (destIndex === -1) {
        destLabel = wrapLabel(destLabel - 1);
        destIndex = cups.indexOf(destLabel);
    }
    return destIndex;
};

// cups should have pickup removed already.
const placePickup = (pickup, cups, destIndex) => {
    cups.splice(destIndex + 1, 0, ...pickup);
};

// after replacing picked up cups, currentIndex must still refer to currentLabel.
// if needed, shuffle the array to make this true.
const shuffle = (cups, currentIndex, currentLabel) => {
    let j = cups.indexOf(currentLabel);
    let dist = currentIndex - j;
    let otherdist = dist < 0 ? cups.size + dist : dist - cups.size;
    let shortdist = Math.abs(dist) < Math.abs(otherdist) ? dist : otherdist;

    if (shortdist < 0) {
        for (let i = 0; i < -shortdist; i++) {
            cups.push(cups.shift());
        }
    } else if (shortdist > 0) {
        for (let i = 0; i < shortdist; i++) {
            cups.unshift(cups.pop());
        }
    }
};

const getOrder = (cups) => {
    shuffle(cups, 0, 1);
    return cups.slice(1).join('');
};

// handles negative indexes, too.
const wrapIndex = (cups, index) => {
    if (index >= 0) {
        return index % cups.size;
    } else {
        return wrapIndex(index + cups.size);
    }
};

const wrapLabel = (label) => {
    if (label >= 0) {
        return label % MAX_LABEL === 0 ? MAX_LABEL : label % MAX_LABEL;
    } else {
        return wrapLabel(label + MAX_LABEL);
    }
};

/************************** Main *********************************** */

let a = init(testInput1);
// makeMoves(a, 10000000, 0);
// console.log(cups.get(cups.indexOf(1)));
// console.log(cups.get(cups.indexOf(1) + 1));
// console.log(cups.get(cups.indexOf(1) + 2));



// makeMoves(a, 10000000, 0);
// console.log(cups[cups.findIndex(1)]);
// console.log(cups[cups.findIndex(1) + 1]);
// console.log(cups[cups.findIndex(1) + 2]);

console.time('t');
makeMoves(a, 10, 0);

console.timeEnd('t');