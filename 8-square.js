const size = Number(process.argv[2]);

if (!process.argv[2] || !Number.isInteger(size)) {
  console.log("Missing size");
} else if (size > 0) {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
// If size <= 0, do nothing
