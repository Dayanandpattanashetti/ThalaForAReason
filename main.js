const backgroundVideo = document.getElementById("backgroundVideo");
const input = document.getElementById("thalaInput");
const text = document.getElementById("textDisplay");
const text2 = document.getElementById("textDisplay2");
const form = document.getElementById("thalaForm");

var body = document.body;

document.addEventListener("DOMContentLoaded", displayImage);

input.addEventListener("input", function () {
  displayImage();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userInput = document.getElementById("thalaInput").value;
  const result = countAlphabetsAndCheckLength(userInput);

  if (result) {
    displayVideo(result);
  } else {
    displayImage();
    alert("Thala says, Seven is the Secret Number!");
  }
});

function displayImage() {
  body.style.backgroundImage = "url(thala.jpg)";
  backgroundVideo.pause();
  backgroundVideo.style.display = "none";
  text.style.display = "none";
  text2.style.display = "none";
}

function displayVideo(result) {
  body.style.backgroundImage = "none";
  backgroundVideo.style.display = "block";
  text.style.display = "block";
  text2.style.display = "block";
  text.textContent = result;
  backgroundVideo.play();
  backgroundVideo.currentTime = 0;
}

function countAlphabetsAndCheckLength(input) {
  const cleanedInput = input.replace(/\s/g, ""); // Remove white spaces

  // Check if the input is a string of length seven
  if (cleanedInput.length === 7) {
    return formatString(cleanedInput);
  }

  // Check if the input is an expression and evaluate it
  try {
    const result = eval(cleanedInput);

    // Check if the result is 7
    if (result === 7) {
      return formatString(cleanedInput);
    }
  } catch (error) {
    // If there's an error in evaluating the expression or the length is not 7, return false
    return false;
  }

  return false;
}

function formatString(input) {
  const isExpression = input.includes("+") || input.includes("-");

  if (isExpression) {
    const result = eval(input);
    return `${input}=${result}`;
  } else {
    const formattedString = input.toUpperCase().split("").join(" + ") + " = 7";
    return formattedString;
  }
}
