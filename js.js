// delay possible clicks until page is turned
document.getElementById("book").addEventListener("click", function (e) {
  e = this;
  e.style.pointerEvents = "none";
  setTimeout(function () {
    e.style.pointerEvents = "";
  }, 2000);
});

const snowContainer = document.querySelector(".snow-container");

for (let i = 0; i < 50; i++) {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Ukuran dan posisi acak
  const size = Math.random() * 5 + 2; // ukuran 2px - 7px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
  snowflake.style.animationDelay = `${Math.random() * 5}s`;

  snowContainer.appendChild(snowflake);
}
