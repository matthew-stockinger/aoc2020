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

const playRound = () => {
    // console.log(`Player 1's deck: ${player1.join(', ')}`);
    // console.log(`Player 2's deck: ${player2.join(', ')}`);
    // console.log(`Player 1 plays: ${player1[0]}`);
    // console.log(`Player 2 plays: ${player2[0]}`);
    // console.log(`Player ${player1[0] > player2[0] ? 1 : 2} wins the round!`);
    if (player1[0] > player2[0]) {
        player1.push(player1.splice(0, 1)[0]);
        player1.push(player2.splice(0, 1)[0]);
    } else {
        player2.push(player2.splice(0, 1)[0]);
        player2.push(player1.splice(0, 1)[0]);
    }
};

// const playGame = (roundCount = 1, gameCount = 1, log = new Set()) => {
//     let beginningState = [...player1, '', ...player2].join(',');
//     if (log.has(beginningState)) {
//         // console.log(`repeat in log`);
//         return 1;
//     } else if (player1.length === 0 || player2.length === 0) {
//         // console.log(`== Post-game results ==`);
//         // console.log(`Player 1's deck: ${player1.join(', ')}`);
//         // console.log(`Player 2's deck: ${player2.join(', ')}`);
//         let winner = player1.length === 0 ? 2 : 1;
//         return winner;
//     } else {
//         // console.log(`-- Round ${roundCount} (Game ${gameCount}) --`);
//         if (player1.length - 1 >= player1[0] && player2.length - 1 >= player2[0]) {
//             // if players have enough cards, recurse to sub-game:
//             // copy current cards into dummies.  
//             // remove first card from each player's hand.
//             // Play subgame to determine who won.
//             // pull original cards back from dummies.  Modify those hands based on who won sub-game.
//             const p1copy = [...player1];
//             const p2copy = [...player2];
//             player1.splice(0, 1);
//             player2.splice(0, 1);
//             // console.log(`Playing a sub-game to determine the winner...`);
//             const subGameWinner = playGame(1, gameCount + 1, new Set());
//             player1 = [...p1copy];
//             player2 = [...p2copy];
//             if (subGameWinner === 1) {
//                 player1.push(player1.splice(0, 1)[0]);
//                 player1.push(player2.splice(0, 1)[0]);
//             } else if (subGameWinner === 2) {
//                 player2.push(player2.splice(0, 1)[0]);
//                 player2.push(player1.splice(0, 1)[0]);
//             } else {
//                 throw new Error('subGame error.');
//             }
//             roundCount += 1;
//             // console.log();
//             return playGame(roundCount, gameCount, log);
//         } else {
//             // continue normal game
//             log.add([...player1, '', ...player2].join(','));
//             playRound();
//             roundCount += 1;
//             // console.log();

//             return playGame(roundCount, gameCount, log);
//         }
//     }
// };

playGame = (roundCount = 1, gameCount = 1, log = new Set(), memo = new Map()) => {
    let beginningState = [...player1, '', ...player2].join(',');
    if (log.has(beginningState)) {
        // console.log(`repeat in log`);
        return 1;
    } else if (memo.has(beginningState)) {
        return memo.get(beginningState);
    } else if (player1.length === 0 || player2.length === 0) {
        // console.log(`== Post-game results ==`);
        // console.log(`Player 1's deck: ${player1.join(', ')}`);
        // console.log(`Player 2's deck: ${player2.join(', ')}`);
        let winner = player1.length === 0 ? 2 : 1;
        return winner;
    } else {
        // console.log(`-- Round ${roundCount} (Game ${gameCount}) --`);
        if (player1.length - 1 >= player1[0] && player2.length - 1 >= player2[0]) {
            log.add([...player1, '', ...player2].join(','));
            // if players have enough cards, recurse to sub-game:
            // copy current cards into dummies.  
            // remove first card from each player's hand.
            // Play subgame to determine who won.
            // pull original cards back from dummies.  Modify those hands based on who won sub-game.
            const p1copy = [...player1];
            const p2copy = [...player2];
            player1.splice(0, 1);
            player2.splice(0, 1);
            // console.log(`Playing a sub-game to determine the winner...`);
            const preSubGameState = [...player1, '', ...player2].join(',');
            const subGameWinner = playGame(1, 1, new Set(), memo);
            memo.set(preSubGameState, subGameWinner);
            player1 = [...p1copy];
            player2 = [...p2copy];
            if (subGameWinner === 1) {
                player1.push(player1.splice(0, 1)[0]);
                player1.push(player2.splice(0, 1)[0]);
            } else if (subGameWinner === 2) {
                player2.push(player2.splice(0, 1)[0]);
                player2.push(player1.splice(0, 1)[0]);
            } else {
                throw new Error('subGame error.');
            }
            roundCount += 1;
            // console.log();
            memo.set(beginningState, playGame(1, 1, new Set(), memo));
            return memo.get(beginningState);
            // return playGame(1, 1, log, memo);
        } else {
            // continue normal game
            log.add([...player1, '', ...player2].join(','));
            playRound();
            roundCount += 1;
            // console.log();

            // memo.set(beginningState, playGame(roundCount, gameCount, log, memo));
            // return memo.get(beginningState);
            return playGame(1, 1, log, memo);
        }
    }
};

const playMatch = () => {

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

// structure isn't right.  playGame should recurse until game is over.
// playMatch should call playGame when needed, and playMatch should recurse until the match is over.

// add memoization later, to playMatch.

init(realInput);
playGame();
console.log(score());