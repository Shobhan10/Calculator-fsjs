// const buttons = document.querySelectorAll(".button");
// // console.log(buttons);
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     console.log(buttons[i].value);
//   });
// }

// const b = document.getElementById("b");
// console.log(b);

function insert(num) {
  console.log(num)
  const show = document.querySelector(".textview");
  show.value += num
}

function equals() {}

function clean() {
  const show = document.querySelector(".textview");
  show.value = "";
}

function back() {
  const show = document.querySelector(".textview");
  show.value = show.value.slice(0, -1);
}
