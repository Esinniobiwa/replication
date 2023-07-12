var range = document.getElementById("myRange");

range.addEventListener("input", function () {
  // Get the current value of the range input
  var value = range.value;

  // Increase the value by a desired increment
  value++;

  // Set the updated value back to the range input
  range.value = value;
});

////////nvbr/////

const navbarToggle = document.getElementById("navbarToggle");
const navbarLinks = document.getElementById("navbarLinks");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
