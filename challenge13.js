const testInput1 =
    `939
7,13,x,x,59,x,31,19`;

const testInput2 =
    `939
17,x,13,19`;

const testInput3 =
    `939
67,7,59,61`;

const testInput4 =
    `939
67,x,7,59,61`;

const testInput5 =
    `939
67,7,x,59,61`;

const testInput6 =
    `939
1789,37,47,1889`;

const myInput =
    `939
3,x,x,x,x,4,11`;

const realInput =
    `1000495
19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,521,x,x,x,x,x,x,x,23,x,x,x,x,x,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,523,x,x,x,x,x,37,x,x,x,x,x,x,13`;

// find the smallest multiple of busNum that is >= timeStamp.
// busNum - timeStamp % busNum gives time to next departure.

const input = realInput.split(/\r?\n/);
const timeStamp = parseInt(input[0]);
const buses = input[1].split(',');

/**************** Part 1 *****************************
// make array of {bus, departure wait times}. 
let departures = [];
for (let bus of buses) {
    if (bus === 'x') {
        continue;
    } else {
        bus = parseInt(bus);
        departures.push({
            bus: bus,
            wait: bus - timeStamp % bus
        });
    }
}
// find the minimum.
departures.sort((a, b) => {
    return a.wait - b.wait
});

// puzzle output = wait * busNum
console.log(departures[0].bus * departures[0].wait);
*/

/************** Part 2 **************************** */
const checkBusCriteria = (timeStamp, subset) => {
    return subset.every((bus, index, arr) => {
        let busNum = parseInt(bus);
        if (bus === 'x') {
            return true;
        } else {
            return (timeStamp + index) % busNum === 0;
        }
    });
}

// returns subset of busList that includes the first numBuses, and retains all 'x' entries.
// returns empty array if numBuses is too high.
const getSubset = (numBuses, busList) => {
    return busList.slice(0, findNthIndex(busList, numBuses, (item) => item !== 'x') + 1);
}

const findNthIndex = (arr, n, testingFn) => {
    arrCopy = [...arr];
    for (let i = 0; i < n - 1; i++) {
        arrCopy[arrCopy.findIndex(testingFn)] = 'x';
    }
    return arrCopy.findIndex(testingFn);
}

const busNumbersOnly = (busList) => {
    return busList
        .filter((bus) => bus !== 'x')
        .map((bus) => parseInt(bus));
}


// How this works:
// start with subset of buses that includes only 2 bus numbers.
// find the first timestamp that meets the critera for that subset.
// recursively iterate, adding a new bus each time.  The search increment can be the product of the prior bus numbers, since that's how often a new match will occur inside the prior subset.
const findTimeStamp = (busList, depth) => {
    let t = 0;
    // lop off the information after that.
    let subset = getSubset(depth, busList);
    if (!Number.isSafeInteger(t)) {
        throw new Error("timestamp not safe.");
    } else if (depth <= 2) {
        let increment = Number(busList[0]);
        console.log(`depth = ${depth}, initial timestamp = ${t}. subset = ${subset}. increment = ${increment}`);
        while (!checkBusCriteria(t, subset)) {
            t += increment;
            // console.log(`depth = ${depth}.  checking timestamp ${t} of ${subset}.`);
        }
        console.log(`while finished.  t = ${t}`);
    } else {
        // start at timestamp = solution to prior depth.
        // increment is product of bus numbers in busList of prior depth.
        t = findTimeStamp(busList, depth - 1);
        let subsetNums = busNumbersOnly(subset);
        let increment = subsetNums
            .slice(0, subsetNums.length - 1)
            .reduce((accum, curr) => accum * curr);
        console.log(`depth = ${depth}, initial timestamp = ${t}. subset = ${subset}. increment = ${increment}`);
        while (!checkBusCriteria(t, subset)) {
            t += increment;
            // console.log(`depth = ${depth}.  checking timestamp ${t} of ${subset}.`);
        }
        console.log(`while finished.  t = ${t}`);
    }
    return t;
}

console.log(findTimeStamp(buses, busNumbersOnly(buses).length));


// let inc1 = findTimeStamp(buses, 3);
// console.log(myFunction(4, inc1));


console.log();