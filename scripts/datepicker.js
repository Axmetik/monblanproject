console.log("Hello there!");

const inputEl = document.querySelectorAll(".datepicker_input");
const eventList = document.querySelectorAll(".event");

const datepicker1 = new Datepicker(inputEl[0], {
  format: "mm-dd-yyyy",
  title: "Pick a date",
});

const datepicker2 = new Datepicker(inputEl[1], {
  format: "mm-dd-yyyy",
  title: "Pick a date",
});

inputEl[0].addEventListener("click", () => {
  const datepickers = document.querySelectorAll(".datepicker-picker");
  datepickers[0].addEventListener("click", () => {
    setTimeout(() => {
      findByDate(inputEl[0].value, inputEl[1].value);
    }, 2000);
  });
});

inputEl[1].addEventListener("click", () => {
  const datepickers = document.querySelectorAll(".datepicker-picker");
  datepickers[1].addEventListener("click", () => {
    setTimeout(() => {
      findByDate(inputEl[0].value, inputEl[1].value);
    }, 2000);
  });
});

function parseDate(dateString) {
  const parts = dateString.split("-");

  const month = parseInt(parts[0]) - 1;
  const day = parseInt(parts[1]);
  const year = parseInt(parts[2]);

  return new Date(year, month, day);
}

function findByDate(from = null, to = null) {
  let fromDate = "";
  let toDate = "";
  if (from) {
    fromDate = parseDate(from);
  }

  if (to) {
    toDate = parseDate(to);
  }

  eventList.forEach((event) => {
    const date = event.querySelector(".event__date").querySelector("span").textContent;
    console.log(date);
    const actualDate = parseDate(date);
    console.log("from", fromDate, "date", actualDate, "to", toDate);
    if (actualDate >= fromDate && actualDate <= toDate) {
      console.log("goooooood");
      if (event.classList.contains("hidden")) {
        event.classList.remove("hidden");
        console.log("hide");
      }
    } else {
      console.log("hidgu");
      event.classList.add("hidden");
    }
  });
}
