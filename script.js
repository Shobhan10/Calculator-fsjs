function insert(num) {
  const show = document.querySelector(".textview");
  show.value += num
}

function equals() {
  const show = document.querySelector(".textview");
  try {
    val = eval(show.value);
    show.value = val;
  } catch (error) {
    console.log(error);
    alert("Please put the values correctly");
  }
}

function clean() {
  const show = document.querySelector(".textview");
  show.value = "";
}

function back() {
  const show = document.querySelector(".textview");
  show.value = show.value.slice(0, -1);
}
