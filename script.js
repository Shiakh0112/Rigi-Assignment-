document.querySelectorAll(".bullet").forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    document
      .querySelectorAll(".bullet")
      .forEach((b) => b.classList.remove("active"));
    bullet.classList.add("active");
    const slider = document.getElementById("slider");
    const scrollAmount = slider.children[0].offsetWidth + 16; // Image + gap
    slider.scrollTo({
      left: scrollAmount * index,
      behavior: "smooth",
    });
  });
});
