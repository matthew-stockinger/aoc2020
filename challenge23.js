// Challenge23, part 1.

const testInput1 = `389125467`;
const realInput = `962713854`;

const MIN_LABEL = 1;
const MAX_LABEL = 9;

const init = (input) => {
    return input.split('').map(item => parseInt(item));
};

const makeMoves = (cups, howMany, startIndex) => {
    let nextIndex = startIndex;
    for (let i = 0; i < howMany; i++) {
        console.log(`-- move ${i + 1} --`);
        console.log(`cups: ${cups.slice(0, nextIndex)} (${cups[nextIndex]}) ${cups.slice(nextIndex + 1)}`);
        nextIndex = move(cups, nextIndex);
    }
    console.log(`-- final --`);
    console.log(`cups: ${cups.slice(0, nextIndex)} (${cups[nextIndex]}) ${cups.slice(nextIndex + 1)}`);
    console.log(`order = ${getOrder(cups)}`);
};

// returns index of the new current cup (the cup clockwise of current).  
const move = (cups, currentIndex) => {
    if (currentIndex >= cups.length) throw new Error('current index exceeds move limit.');
    let currentLabel = cups[currentIndex];
    let pickup = getPickup(cups, currentIndex);
    console.log(`pick up: ${pickup}`);
    let destIndex = getDest(cups, currentLabel);
    console.log(`destination: ${cups[destIndex]}\n`);
    placePickup(pickup, cups, destIndex);
    shuffle(cups, currentIndex, currentLabel);
    return wrapIndex(cups, currentIndex + 1);
};

// returns copy of the pickup cups.  Doesn't actually pull them yet.
const getPickup = (cups, currentIndex) => {
    let res = cups.splice(currentIndex + 1, 3);
    if (res.length < 3) {
        res.push(...cups.splice(0, 3 - res.length));
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
    let otherdist = dist < 0 ? cups.length + dist : dist - cups.length;
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
    // old.
    // while (cups[currentIndex] !== currentLabel) {
    //     cups.push(cups.shift());
    // }
};

const getOrder = (cups) => {
    shuffle(cups, 0, 1);
    return cups.slice(1).join('');
};

// handles negative indexes, too.
const wrapIndex = (cups, index) => {
    if (index >= 0) {
        return index % cups.length;
    } else {
        return wrapIndex(index + cups.length);
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
makeMoves(a, 10, 0);
