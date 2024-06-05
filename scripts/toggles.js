const listToggle = document.querySelector(".toggle-list");
const gridToggle = document.querySelector(".toggle-grid");

const eventsContent = document.querySelector(".events__content");
const events = document.querySelectorAll(".event");

listToggle.addEventListener("click", () => {
  if (!listToggle.classList.contains("active")) {
    gridToggle.classList.remove("active");
    listToggle.classList.add("active");

    eventsContent.classList.remove("events-grid-view");
    eventsContent.classList.add("events-list-view");

    events.forEach((event) => {
      event.classList.remove("event-grid-view");
      event.classList.add("event-list-view");
    });
  }
});

gridToggle.addEventListener("click", () => {
  if (!gridToggle.classList.contains("active")) {
    listToggle.classList.remove("active");
    gridToggle.classList.add("active");

    eventsContent.classList.remove("events-list-view");
    eventsContent.classList.add("events-grid-view");

    events.forEach((event) => {
      event.classList.remove("event-list-view");
      event.classList.add("event-grid-view");
      console.log(event);
    });
  }
});
