// Simple function to test GitHub Actions pipeline
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

// Export functions for testing
module.exports = {
  add,
  multiply,
  greet,
};

// Simple console output for demonstration
console.log("App loaded successfully!");
console.log("Testing functions:");
console.log("add(2, 3) =", add(2, 3));
console.log("multiply(4, 5) =", multiply(4, 5));
console.log('greet("World") =', greet("World"));
