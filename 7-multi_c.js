const x = Number(process.argv[2]);

if (!Number.isInteger(x)) {
  console.log("Missing number of occurrences");
} else if (x > 0) {
  let output = "";
  for (let i = 0; i < x; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
// If x is 0 or negative, print nothing (no console.log)
