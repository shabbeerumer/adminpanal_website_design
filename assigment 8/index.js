var insidetoogle = document.getElementById("thisicon");

insidetoogle.addEventListener("click", function () {
  document.getElementById("sb").classList.toggle("a");
  document.getElementById("sa").classList.toggle("maintext");
  document.getElementById("main-content").classList.toggle("m");
  document.getElementById("maini").classList.toggle("change");

  document.querySelectorAll(".icon1").forEach((element) => {
    element.classList.toggle("tchange");
  });
});

// var baricon = document.getElementById("mybars");
// baricon.addEventListener("click", function () {
//   document.getElementById("sb").classList.toggle("a");
// });

var baricon = document.getElementById("mybars");
baricon.addEventListener("click", function () {
  console.log("Bar icon clicked"); // Debugging line
  document.getElementById("sb").classList.toggle("a");
  document.getElementById("main-content").classList.toggle("m");
});
