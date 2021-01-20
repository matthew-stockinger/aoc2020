// https://github.com/filiptammergard/advent-of-code-2020
// another: https://github.com/rubnvp/advent-of-code-2020


let input = `1000495
19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,521,x,x,x,x,x,x,x,23,x,x,x,x,x,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,523,x,x,x,x,x,37,x,x,x,x,x,x,13`;
input = input.split("\n");

function computePartOne() {
  const [now, buses] = [
    input[0],
    input[1]
      .split(",")
      .filter((bus) => bus !== "x")
      .map((bus) => parseInt(bus)),
  ];
  let timestamp = now;
  let earliestDeparture = false;
  while (!earliestDeparture) {
    timestamp++;
    earliestDeparture = buses.find((bus) => timestamp % bus === 0);
  }
  return (timestamp - now) * earliestDeparture;
}

function computePartTwo() {
  const [firstBus, ...buses] = input[1]
    .split(",")
    .map((item, index) => [parseInt(item), index])
    .filter(([item]) => Number.isInteger(item));
  let multiplier = firstBus[0];
  let timestamp = 0;
  buses.forEach(([bus, busIndex]) => {
    while (true) {
      if ((timestamp + busIndex) % bus === 0) {
        multiplier *= bus;
        break;
      }
      timestamp += multiplier;
    }
  });
  return timestamp;
}

const partOneAnswer = computePartOne();
console.log(`Part 1: ${partOneAnswer}`);

const partTwoAnswer = computePartTwo();
console.log(`Part 2: ${partTwoAnswer}`);