// 2: 2 Arraye Level3 ro mohtavasho Chap Kon

let xArray0 = [
  1,
  5,
  [10, 2, "Amir", 4, 5],
  [100, 3, "Ali", [1000, "practice"]],
];

// Define a for loop for xArray0

for (let i = 0; i < xArray0.length; i++) {

  // define a for loop to get level2 values

  for (let j = 0; j < xArray0[i].length; j++) {

    if (Array.isArray(xArray0[i][j])) {

      // define a for loop to get level3 values

      for (let a = 0; a < xArray0[i][j].length; a++) {
          
        console.log(xArray0[i][j][a]);
      }
    }
  }
}
