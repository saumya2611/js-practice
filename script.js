// const id = document.getElementById("myElement");
// console.log("id========>", id);

// id.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// Event Bubling
// document.getElementById("grandparent").addEventListener("click", function () {
//   console.log("Grandparent Div Clicked");
// });

// document.getElementById("parent").addEventListener("click", function () {
//   console.log("Parent Div Clicked");
// });

// document.getElementById("child").addEventListener("click", function (event) {
//   console.log("Button Clicked");
//   event.stopPropagation(); // Stops further capturing
// });

// Event capturing
// document.getElementById("grandparent").addEventListener(
//   "click",
//   function () {
//     console.log("Grandparent Div Clicked");
//   },
//   true
// );

// document.getElementById("parent").addEventListener(
//   "click",
//   function () {
//     console.log("Parent Div Clicked");
//   },
//   true
// );

// document.getElementById("child").addEventListener(
//   "click",
//   function () {
//     console.log("Button Clicked");
//   },
//   true
// );

// document.getElementById("myForm").addEventListener("submit", function (event) {
//   //   event.preventDefault(); // Prevents form submission
//   console.log("Form submission prevented!");
// });
