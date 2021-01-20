let testInput1 = 
`5764801
17807724`;

let realInput =
`15335876
15086442`;

const init = (input) => {
    return input
        .split('\n')
        .map(n => parseInt(n));
};

const findLoopSize = (pubKey, sub = 7, val = 1) => {
    let loopSize = 0;
    while (val !== pubKey) {
        loopSize += 1;
        val *= sub;
        val = val % 20201227;
    }
    return loopSize;
};

const getEnKey = (sub, loopSize) => {
    let val = 1;
    for (let i = 0; i < loopSize; i++) {
        val *= sub;
        val = val % 20201227;
    }
    return val;
};

/************ Main ************** */
let keys = init(realInput);
let cardLoopSize = findLoopSize(keys[0]);
let doorLoopSize = findLoopSize(keys[1]);
console.log(cardLoopSize);
console.log(doorLoopSize);
console.log(getEnKey(keys[0], doorLoopSize));
console.log(getEnKey(keys[1], cardLoopSize));
