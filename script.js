// Get elements from the HTML
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

// Function to get advice from the API
async function getAdvice() {
  try {
    // Fetch advice from API
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    // Update HTML with advice
    adviceId.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;

  } catch (error) {
    // Show error message if something goes wrong
    adviceText.textContent = "Something went wrong. Please try again.";
  }
}

// Load advice when page opens
getAdvice();

// Get new advice when button is clicked
diceBtn.addEventListener("click", getAdvice);
