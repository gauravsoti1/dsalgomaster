/*

  https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem 

*/

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }


// will return an rankings array for the scores present
function getRankings(scores = []) {
    let rank = 1;
    // 1st score will always be the top rank
    const rankings = [1];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] === scores[i - 1])
            rankings[i] = rank;
        else {
            rank++;
            rankings[i] = rank;
        }
    }
    return rankings;
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    const rankings = getRankings(scores);
    console.log("rankings ===", rankings);
    const result = [];
    let lastIndex = rankings.length - 1;
    for (let a = 0; a < alice.length; a++) {
        console.log("a ===", a);
        const currentScore = alice[a];
        if (currentScore >= scores[0]) {
            lastIndex = 0;
            result.push(1);
        }
        else {
            // to make sure we traverse the array as less as possible every time
            let i = lastIndex; 
            // traversing from the end(last visited index for previous alice's score)
            while (i >= 0) {
                // since alice's score is less than the score present on the leaderboard, her score would come here
                if (currentScore < scores[i]) {
                    lastIndex = i + 1;
                    result.push(rankings[i] + 1); // score is less than current score, add a rank greater than current
                    break; // we found the answer, we don't need to iterate anymore
                }
                else if (currentScore === scores[i]){
                    lastIndex = i + 1;
                    result.push(rankings[i]); // score is less than current score, add current rank only
                    break;
                }
                i--;
            }
        }

    }
    return result;
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const rankedCount = parseInt(readLine().trim(), 10);

//     const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

//     const playerCount = parseInt(readLine().trim(), 10);

//     const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

//     const result = climbingLeaderboard(ranked, player);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }
