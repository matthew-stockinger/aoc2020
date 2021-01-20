let testInput1 =
    `.#.
..#
###`;

let realInput =
    `##.#....
...#...#
.#.#.##.
..#.#...
.###....
.##.#...
#.##..##
#.####..`;

const conway = new Map();

const init = (input) => {
    let a = input
        .split('\n')
        .map(row => row.split(''))
        .map(row => row.map(item => item === '.' ? 0 : 1));
    a.forEach((y, yIndex) => {
        y.forEach((state, xIndex) => {
            if (state === 1) conway.set(`${xIndex},${yIndex},0,0`, state);
        });
    });

    console.log(conway);
};

const numActiveNeighbors = (loc, map) => {
    // change loc string to loc array.
    loc = loc.split(',').map(dim => parseInt(dim));
    let res = 0;
    for (let x = loc[0] - 1; x <= loc[0] + 1; x++) {
        for (let y = loc[1] - 1; y <= loc[1] + 1; y++) {
            for (let z = loc[2] - 1; z <= loc[2] + 1; z++) {
                for (let w = loc[3] - 1; w <= loc[3] + 1; w++) {
                    if (x === loc[0] && y === loc[1] && z === loc[2] && w === loc[3]) continue;
                    let checkLoc = `${x},${y},${z},${w}`;
                    res += map.get(checkLoc) === 1 ? 1 : 0;
                }
            }
        }
    }
    return res;
};

const runSimFrame = () => {
    let original = new Map(conway);
    // need to iterate through all active locations, including a shell of empty neighbors.
    // getBounds takes care of this.
    let b = getBounds();
    for (let x = b[0]; x <= b[1]; x++) {
        for (let y = b[2]; y <= b[3]; y++) {
            for (let z = b[4]; z <= b[5]; z++) {
                for (let w = b[6]; w <= b[7]; w++) {
                    let myLoc = `${x},${y},${z},${w}`;
                    let state = original.get(myLoc);
                    let homies = numActiveNeighbors(myLoc, original);
                    if (state === 1 && !(homies === 2 || homies === 3)) {
                        conway.delete(myLoc);
                    } else if (!state && homies === 3) {
                        conway.set(myLoc, 1);
                    }
                }
            }
        }
    }
};

const getBounds = () => {
    // look for min and max x, y, and z val present in conway.  return lowest - 1 as lower bound and highest + 1 as upper bound.

    // create xs, ys, and zs variables.
    let xs = [], ys = [], zs = [], ws = [];
    conway.forEach((val, key) => xs.push(parseInt(key.slice(0, key.indexOf(',')))));
    conway.forEach((val, key) => ys.push(parseInt(key.match(/(?<=,)-?\d+(?=,)/))));
    conway.forEach((val, key) => zs.push(parseInt(key.match(/(?<=,-?\d,)-?\d+(?=,)/))));
    conway.forEach((val, key) => ws.push(parseInt(key.match(/(?<=,)-?\d+$/))));

    // find min and max x, etc.
    let xmin = xs.reduce((a, c) => a < c ? a : c);
    let xmax = xs.reduce((a, c) => a > c ? a : c);
    let ymin = ys.reduce((a, c) => a < c ? a : c);
    let ymax = ys.reduce((a, c) => a > c ? a : c);
    let zmin = zs.reduce((a, c) => a < c ? a : c);
    let zmax = zs.reduce((a, c) => a > c ? a : c);
    let wmin = ws.reduce((a, c) => a < c ? a : c);
    let wmax = ws.reduce((a, c) => a > c ? a : c);

    return [xmin - 1, xmax + 1, ymin - 1, ymax + 1, zmin - 1, zmax + 1, wmin - 1, wmax + 1];
};

const printOut = () => {
    // convert conway to array of arrays.
    let res = new Map(conway);
    res = Array.from(res.keys())
        .map(loc => loc.split(','))
        .map(loc => loc.map(n => parseInt(n)));
    // sort by w.
    res.sort((a, b) => a[3] - b[3]);


    let b = getBounds();
    b[4] += 1;
    b[5] -= 1;
    b[6] += 1;
    b[7] -= 1;
    console.log('new map:\n');
    for (let w = b[6]; w <= b[7]; w++) {
        for (let z = b[4]; z <= b[5]; z++) {
            console.log(`layer z = ${z}, w = ${w}`);
            // column headings
            let ch = 'x =     ';
            for (let x = b[0]; x <= b[1]; x++) {
                ch += x;
            }
            console.log(ch);
            // rows
            let line = ``;
            for (let y = b[2]; y <= b[3]; y++) {
                line += y < 0 ? `y = ${y}   ` : `y = ${y}    `;
                for (let x = b[0]; x <= b[1]; x++) {
                    line += conway.get(`${x},${y},${z},${w}`) ? '#' : '.';
                }
                line += '\n';
            }
            console.log(line);
        }
    }
};


init(realInput);
printOut();
runSimFrame();
runSimFrame();
runSimFrame();
runSimFrame();
runSimFrame();
runSimFrame();
console.log(conway.size);

