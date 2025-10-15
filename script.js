// Get elements from the DOM
const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const calculateBtn = document.getElementById("calculate");
const totalDisplay = document.getElementById("totalAmount");
const themeToggle = document.getElementById("themeToggle");
const form = document.querySelector(".calculator");

// Function to calculate the tip and total amount
function calculateTotal(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the bill amount and tip percentage from the inputs
  // Convert input values to numbers
  const bill = Number(billInput.value);
  const tip = Number(tipSelect.value);

  // Calculate the total amount
  // Calculate tip amount and add to bill
  const total = bill + (bill * tip / 100);

  // Display the total amount as a decimal
  // Use toFixed(2) to show two decimal places
  totalDisplay.innerText = `Total: $${total.toFixed(2)}`;
}

// Function to toggle light/dark mode
function toggleTheme() {
  // Check if the body has the "dark" class
  if (document.body.classList.contains("dark")) {
    // If it does, remove "dark" and set to "light"
    document.body.classList.remove("dark");
    document.body.className = "light";
    themeToggle.innerText = "Switch to Dark Mode";
  } else {
    // If not, add "dark" and remove "light"
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    themeToggle.innerText = "Switch to Light Mode";
  }
}

// Event listeners
form.addEventListener("submit", calculateTotal);
themeToggle.addEventListener("click", toggleTheme);
