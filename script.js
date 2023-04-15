// Get HTML elements
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const generateButton = document.getElementById("generateButton");
const resultsContainer = document.getElementById("results");

// Function to generate usernames
function generateUsernames() {
  // Get the first and last names from the input boxes
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  // Array to hold the generated usernames
  let usernames = [];

  // Generate 21 usernames
  while (usernames.length < 21) {
    // Generate a random number between 1 and 4
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    // Generate a username based on the random number
    let username;
    if (randomNumber === 1) {
      username = `${firstName}${lastName}`;
    } else if (randomNumber === 2) {
      username = `${firstName}.${lastName}`;
    } else if (randomNumber === 3) {
      username = `${firstName}_${lastName}`;
    } else {
      username = `${firstName}${lastName}${Math.floor(Math.random() * 100)}`;
    }

    // Add the username to the array if it's not already in there
    if (!usernames.includes(username)) {
      usernames.push(username);
    }
  }

  // Clear any previous results
  resultsContainer.innerHTML = "";

  // Create a div for each username and add it to the results container
  usernames.forEach((username) => {
    const usernameBox = document.createElement("div");
    usernameBox.classList.add("username-box");

    const usernameText = document.createElement("p");
    usernameText.innerText = username;
    usernameBox.appendChild(usernameText);

    const checkEligibilityButton = document.createElement("button");
    checkEligibilityButton.innerText = "Check Eligibility";
    usernameBox.appendChild(checkEligibilityButton);

    

    resultsContainer.appendChild(usernameBox);
  });
}

// Event listener for the generate button
generateButton.addEventListener("click", generateUsernames);
