// Function to update the HTML element
function updateElementText(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
}

// Function to delay execution
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to handle the button click event
async function handleClick() {
  const textElement = document.getElementById("text");
  const delayElement = document.getElementById("delay");
  const outputElementId = "output";

  const text = textElement.value;
  const delayInSeconds = parseInt(delayElement.value);

  if (text && delayInSeconds) {
    updateElementText(outputElementId, "Loading...");

    await delay(delayInSeconds * 1000);

    updateElementText(outputElementId, text);
  } else {
    updateElementText(outputElementId, "Please enter both text and delay.");
  }
}

// Event listener for button click
const btn = document.getElementById("btn");
btn.addEventListener("click", handleClick);
