// Simple test file for GitHub Actions pipeline
// This will trigger the push-pr workflow when we create a PR
const { add, multiply, greet } = require("../src/app.js");

// Basic tests
console.log("Running tests...");

// Test add function
if (add(2, 3) === 5) {
  console.log("✅ add function test passed");
} else {
  console.log("❌ add function test failed");
  process.exit(1);
}

// Test multiply function
if (multiply(4, 5) === 20) {
  console.log("✅ multiply function test passed");
} else {
  console.log("❌ multiply function test failed");
  process.exit(1);
}

// Test greet function
if (greet("World") === "Hello, World!") {
  console.log("✅ greet function test passed");
} else {
  console.log("❌ greet function test failed");
  process.exit(1);
}

console.log("🎉 All tests passed!");
