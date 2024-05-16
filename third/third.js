const counter = document.querySelector("#counter");
let count = Number(counter.textContent);

let countFunc = setInterval(() => {
  if (count < 5) {
    count += 1;
    counter.textContent = count;
  } else if (count === 5) {
    console.log("종료");
    clearInterval(countFunc);
  }
}, 1000);
