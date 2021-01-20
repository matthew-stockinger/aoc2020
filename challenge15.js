let testInput1 =
    `3,1,2`;

let realInput =
    `13,0,10,12,1,5,8`;

// const nth = ({input, n}) => {
//     let res = input.split(',').map(item => parseInt(item));
//     for (let i = res.length; i < n; i++) {
//         let subRes = res.slice(0, res.length - 1);
//         let prior = subRes.lastIndexOf(res[res.length - 1]);
//         if (prior === -1) {
//             res.push(0);
//         } else {
//             res.push(res.length - prior - 1);
//         }
//     }

//     return res.pop();
// }

// instead of keeping an array of everything, just keep track of which numbers have been spoken, and attach an item number to them.
// use an object  for 0,3,6:  {0: 1, 3: 2}
const nth = ({ input, n }) => {
    let res = {};
    let inArr = input
        .split(',')
        .map(item => parseInt(item));
    inArr.slice(0, inArr.length - 1).forEach((item, index) => res[item] = index + 1);

    // start by checking the last number in the input.
    let lastSpoken = inArr[inArr.length - 1];
    let nextSpoken;
    for (let i = inArr.length; i < n; i++) {
        // if lastSpoken has already been spoken nextSpoken is index difference, otherwise 0.
        nextSpoken = res[lastSpoken] ? i - res[lastSpoken] : 0;
        res[lastSpoken] = i;
        lastSpoken = nextSpoken;
    }
    return lastSpoken;
}

// yet another way: use an array.  The _index_ is represents the numbers that have been spoken.
// the value at that index is the last time it was spoken.
const anth = ({ input, n }) => {
    let res = [];
    let inArr = input
        .split(',')
        .map(item => parseInt(item));
    inArr.slice(0, inArr.length - 1).forEach((item, index) => res[item] = index + 1);

    // start by checking the last number in the input.
    let lastSpoken = inArr[inArr.length - 1];
    let nextSpoken;
    for (let i = inArr.length; i < n; i++) {
        // if lastSpoken has already been spoken nextSpoken is index difference, otherwise 0.
        nextSpoken = res[lastSpoken] ? i - res[lastSpoken] : 0;
        res[lastSpoken] = i;
        lastSpoken = nextSpoken;
    }
    return lastSpoken;
}

console.log(anth({
    input: realInput,
    n: 30000000
}));

