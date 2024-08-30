// Display numbers from 1 to 20
console.log("Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Display odd numbers from 1 to 20
console.log("Odd numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Compute sum of elements in an array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log("Sum of elements:", sum);

// Compute maximum of elements in an array
const nums = [3, 7, 2, 9, 1];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log("Maximum element:", max);

// Compute how many times a certain element appears in an array
const arr = [1, 2, 3, 4, 1, 5, 1];
const target = 1;
let count = 0;
for (let element of arr) {
  if (element === target) {
    count++;
  }
}
console.log("Number of times", target, "appears:", count);

// Challenge: Nested loop to generate the pattern
console.log("Pattern:");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    if ((i + j) % 2 === 0) {
      row += "0 ";
    } else {
      row += "1 ";
    }
  }
  console.log(row);
}
