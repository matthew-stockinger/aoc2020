/* inspired by other dude.  data structure is like this:
each cup is an object.  The cup has a value property and a 'next' property.
The next property points to another cup.

All of the cup objects are stored in a larger object.
The keys of this object are just numbers 1 through 1M.  Values match these keys.

To play a round only requires reassignment of the 'next' properties.
*/

const testInput1 = `389125467`;
const realInput = `962713854`;

let MIN_LABEL = 1;
let MAX_LABEL = 1000000;

const init = (input, numCups) => {
    MAX_LABEL = numCups;
    let cups = {};
    for (let i = 1; i < numCups + 1; i++) {
        cups[i] = {v: i};
    }

    // assign all the 'next' properties.
    let inArr = input.split('');
    for (let i = 0; i < inArr.length - 1; i++) {
        cups[inArr[i]].next = cups[inArr[i + 1]];
    }
    if (numCups === 9) {
        cups[inArr[inArr.length - 1]].next = cups[inArr[0]];
    } else if (numCups > 9) {
        cups[inArr[inArr.length - 1]].next = cups[10];
        for (let i = 10; i < numCups; i++) {
            cups[i].next = cups[i + 1]
        }
        cups[numCups].next = cups[inArr[0]];
    }
    return cups;
};

const makeMoves = (currentCup, cups, howMany) => {
    for (let i = 0; i < howMany; i++) {
        currentCup = move(currentCup, cups);
    }
}

const move = (currentCup, cups) => {
    // pick up next 3.
    let pickup = [
        currentCup.next,
        currentCup.next.next,
        currentCup.next.next.next
    ];
    currentCup.next = currentCup.next.next.next.next;

    // get destination.
    let pickVals = pickup.map(cup => cup.v);
    let offset = 1;
    while (pickVals.includes(wrapLabel(currentCup.v - offset))) {
        offset++;
    }
    let dest = cups[wrapLabel(currentCup.v - offset)];
    
    // place pickup cups.
    pickup[2].next = dest.next;
    dest.next = pickup[0];

    return currentCup.next;
};

const wrapLabel = (label) => {
    if (label >= 0) {
        return label % MAX_LABEL === 0 ? MAX_LABEL : label % MAX_LABEL;
    } else {
        return wrapLabel(label + MAX_LABEL);
    }
};

const finalOrder = (cups) => {
    let res = [];
    res.push(cups[1].next.v);
    res.push(cups[1].next.next.v);
    res.push(cups[1].next.next.next.v);
    res.push(cups[1].next.next.next.next.v);
    res.push(cups[1].next.next.next.next.next.v);
    res.push(cups[1].next.next.next.next.next.next.v);
    res.push(cups[1].next.next.next.next.next.next.next.v);
    res.push(cups[1].next.next.next.next.next.next.next.next.v);
    return res;
}

let c = init(realInput, 1000000);
makeMoves(c[9], c, 10000000);
console.log(c[1].next.v);
console.log(c[1].next.next.v);
console.log(c[1].next.v * c[1].next.next.v);