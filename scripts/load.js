const button = document.querySelector(".event-load");
const specialPosts = document.querySelectorAll(".hidden");
const posts = document.querySelectorAll(".event");
const inputs = document.querySelectorAll(".datepicker_input");

button.addEventListener("click", () => {
  if (button.classList.contains("more")) {
    inputs[0].value = "";
    inputs[1].value = "";
    button.classList.remove("more");
    button.classList.add("less");

    posts.forEach((event) => event.classList.remove("hidden"));

    button.textContent = "Show less";
  } else if (button.classList.contains("less")) {
    button.classList.remove("less");
    button.classList.add("more");

    specialPosts.forEach((event) => event.classList.add("hidden"));

    button.textContent = "Show more";
  }
});
