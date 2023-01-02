// Select the navigation menu
const navMenu = document.querySelector("header nav ul");

// Add an event listener to the menu to toggle the dropdown menu on small screens
navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Select the casino games section
const casinoGames = document.querySelector("#casino-games");

// Add an event listener to the casino games section to show a message when a game is clicked
casinoGames.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    alert(`You clicked on the ${event.target.textContent} game. This functionality is not implemented yet. Sorry for the inconvenience.`);
  }
});

// Select the sports betting section
const sportsBetting = document.querySelector("#sports-betting");

// Add an event listener to the sports betting section to show a message when a sport is clicked
sportsBetting.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    alert(`You clicked on the ${event.target.textContent} sports betting section. This functionality is not implemented yet. Sorry for the inconvenience.`);
  }
});
