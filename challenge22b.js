const testInput1 =
    `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`;

const testInput2 =
    `Player 1:
43
19

Player 2:
2
29
14`;

const testInput3 =
    `Player 1:
17
18
16
12
9
2
6
3
1
13
15

Player 2:
21
10
19
5
8
4
7
11
14
20
22`;

const realInput =
    `Player 1:
50
19
40
22
7
4
3
16
34
45
46
39
44
32
20
29
15
35
41
2
21
28
6
26
48

Player 2:
14
9
37
47
38
27
30
24
36
31
43
42
11
17
18
10
12
5
33
25
8
23
1
13
49`;

let player1 = [];
let player2 = [];

const init = (input) => {
    let decks = input
        .split('\n\n')
        .map(player => player.split('\n'))
        .map(player => player.slice(1))
        .map(player => player.map(card => parseInt(card)));

    player1 = decks[0];
    player2 = decks[1];
};

const playRound = (r, g) => {
    // console.log(`-- Round ${r} (Game ${g}) --`);
    // console.log(`Player 1's deck: ${player1.join(', ')}`);
    // console.log(`Player 2's deck: ${player2.join(', ')}`);
    // console.log(`Player 1 plays: ${player1[0]}`);
    // console.log(`Player 2 plays: ${player2[0]}`);
    // console.log(`Player ${player1[0] > player2[0] ? 1 : 2} wins round ${r} of game ${g}!\n`);
    if (player1[0] > player2[0]) {
        player1.push(player1.splice(0, 1)[0]);
        player1.push(player2.splice(0, 1)[0]);
    } else {
        player2.push(player2.splice(0, 1)[0]);
        player2.push(player1.splice(0, 1)[0]);
    }
};

// original with no memo.
// const playGame = () => {
//     let log = new Set();
//     while (player1.length > 0 && player2.length > 0) {
//         let beginningState = [...player1, '', ...player2].join(',');
//         if (log.has(beginningState)) {
//             return 1;
//         } else {
//             if (player1.length - 1 >= player1[0] && player2.length - 1 >= player2[0]) {
//                 log.add(beginningState);

//                 // play sub-game to determine this winner.
//                 const p1copy = [...player1];
//                 const p2copy = [...player2];
//                 player1.splice(0, 1);
//                 player2.splice(0, 1);
//                 const subGameWinner = playGame();
//                 player1 = [...p1copy];
//                 player2 = [...p2copy];

//                 // alter decks from sub-game results.
//                 if (subGameWinner === 1) {
//                     player1.push(player1.splice(0, 1)[0]);
//                     player1.push(player2.splice(0, 1)[0]);
//                 } else if (subGameWinner === 2) {
//                     player2.push(player2.splice(0, 1)[0]);
//                     player2.push(player1.splice(0, 1)[0]);
//                 } else {
//                     throw new Error('subGame error.');
//                 }
//             } else {
//                 log.add(beginningState);
//                 playRound();
//             }
//         }
//     }
//     return player1.length > 0 ? 1 : 2;
// };

// memoized slow version.
// const playGame = (memo = new Map()) => {
//     let log = new Set();
//     while (player1.length > 0 && player2.length > 0) {
//         // old: let beginningState = [...player1, '', ...player2].join(',');
//         let beginningState = player1.join(',') + ',,' + player2.join(',');
//         if (memo.has(beginningState)) {
//             return memo.get(beginningState);
//         } else if (log.has(beginningState)) {
//             return 1;
//         } else {
//             if (player1.length - 1 >= player1[0] && player2.length - 1 >= player2[0]) {
//                 log.add(beginningState);

//                 // play sub-game to determine this winner.
//                 const p1copy = [...player1];
//                 const p2copy = [...player2];
//                 player1.splice(0, 1);
//                 player2.splice(0, 1);
//                 // old: const subGameState = [...player1, '', ...player2].join(',');
//                 const subGameState = player1.join(',') + ',,' + player2.join(',');
//                 memo.set(subGameState, playGame(memo));
//                 subGameWinner = memo.get(subGameState);
//                 player1 = [...p1copy];
//                 player2 = [...p2copy];

//                 // alter decks from sub-game results.
//                 if (subGameWinner === 1) {
//                     player1.push(player1.splice(0, 1)[0]);
//                     player1.push(player2.splice(0, 1)[0]);
//                 } else if (subGameWinner === 2) {
//                     player2.push(player2.splice(0, 1)[0]);
//                     player2.push(player1.splice(0, 1)[0]);
//                 } else {
//                     throw new Error('subGame error.');
//                 }
//             } else {
//                 log.add(beginningState);
//                 playRound();
//             }
//         }
//     }
//     return player1.length > 0 ? 1 : 2;
// };

// new with memo and optimized speed?
const playGame = (g = 1, memo = new Map()) => {
    let r = 0;
    let log = new Set();
    // console.log(`=== Game ${g} ===\n`);
    while (player1.length > 0 && player2.length > 0) {
        let beginningState = player1.join(',') + ',,' + player2.join(',');
        if (memo.has(beginningState)) {
            return memo.get(beginningState);
        } else if (log.has(beginningState)) {
            return 1;
        } else {
            if (player1.length - 1 >= player1[0] && player2.length - 1 >= player2[0]) {
                log.add(beginningState);
                
                // logging.
                r += 1;
                // console.log(`-- Round ${r} (Game ${g}) --`);
                // console.log(`Player 1's deck: ${player1.join(', ')}`);
                // console.log(`Player 2's deck: ${player2.join(', ')}`);
                // console.log(`Player 1 plays: ${player1[0]}`);
                // console.log(`Player 2 plays: ${player2[0]}`);
                // console.log(`Playing a sub-game to determine the winner...\n`);
                
                // play sub-game to determine this winner.
                const p1copy = [...player1];
                const p2copy = [...player2];
                player1 = player1.slice(1, player1[0] + 1);
                player2 = player2.slice(1, player2[0] + 1);
                // const p1topCard = player1.shift();
                // const p2topCard = player2.shift();
                const subGameState = player1.join(',') + ',,' + player2.join(',');
                memo.set(subGameState, playGame(g + 1, memo));
                subGameWinner = memo.get(subGameState);
                // console.log(`The winner of game ${g + 1} is player ${subGameWinner}!\n`);
                // console.log(`...anyway, back to game ${g}`);
                // console.log(`Player ${subGameWinner} wins round ${r} of game ${g}!\n`);
                player1 = [...p1copy];
                player2 = [...p2copy];

                // alter decks from sub-game results.
                if (subGameWinner === 1) {
                    player1.push(player1.splice(0, 1)[0]);
                    player1.push(player2.splice(0, 1)[0]);
                } else if (subGameWinner === 2) {
                    player2.push(player2.splice(0, 1)[0]);
                    player2.push(player1.splice(0, 1)[0]);
                } else {
                    throw new Error('subGame error.');
                }
            } else {
                log.add(beginningState);
                r += 1;
                playRound(r, g);
            }
        }
    }
    return player1.length > 0 ? 1 : 2;
};

const score = () => {
    let winner = player1.length === 0 ? player2 : player1;
    let res = 0;
    for (let i = 0; i < winner.length; i++) {
        res += winner[winner.length - 1 - i] * (i + 1);
    }
    return res;
};

/******************** Main ******************************* */

// mine is slow.  As far as I can tell, it's the copying and spread operators in the middle.
// or maybe.... I missed something!  The sub-game is only played with as many cards as the top card!

init(realInput);
playGame();
console.log(score());