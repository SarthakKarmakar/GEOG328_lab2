/* main.js */

// Function to toggle the responsive navigation menu
function toggleMenu() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
