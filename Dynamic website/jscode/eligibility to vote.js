"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // arrayOfPersons
  let arrayOfPersons = JSON.parse(readLine().replace(/'/g, '"'));
for (let items of arrayOfPersons) {
    if (items['age'] >= 18) {
        console.log(items['name']);
    }
}
}
