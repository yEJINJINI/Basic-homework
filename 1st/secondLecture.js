//로그인 모달창
//모달창 열고 닫기
function modalToggle() {
  document.querySelector(".modal").classList.toggle("show");
}
document.querySelector(".modal-btn").addEventListener("click", modalToggle);
document.querySelector(".close-btn").addEventListener("click", modalToggle);
//경고문 열고 닫기
function warningToggle(a) {
  document.querySelector(".warning").style.display = a;
}
document.querySelector(".login").addEventListener("click", function () {
  if (
    document.querySelector(".id").value === "" ||
    document.querySelector(".password").value === ""
  )
    warningToggle("block");
});
document.querySelector(".warning-close").addEventListener("click", function () {
  warningToggle("none");
});

//숫자 +1
let plusOne = 0;
const btnCount = document.querySelector(".btn");
const resetBtn = document.querySelector(".reset-btn");

btnCount.addEventListener("click", () => {
  plusOne++;
  btnCount.textContent = plusOne;
});

resetBtn.addEventListener("click", () => {
  plusOne = 0;
  btnCount.textContent = plusOne;
});

//스크롤
const upBtn = document.querySelector(".up-button");
window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
});
upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//마우스 오버
const tabBtn = document.querySelector(".tab-btn");
const tabContent = document.querySelector(".tab-content");

tabBtn.addEventListener("mouseover", () => {
  //tabContent.style.display = "block";
  tabContent.classList.add("show");
});

tabBtn.addEventListener("mouseout", () => {
  //tabContent.style.display = "none";
  tabContent.classList.remove("show");
});

/*setTimeout
setTimeout(() => {
  document.querySelector(".ad-box").style.display = "none";
}, 5000);
*/

//setInterval
const adBox = document.querySelector(".ad-box");
const timer = document.querySelector(".timer");

let count = Number(timer.textContent);

const intervalId = setInterval(() => {
  console.log("setInterval 실행중??");
  if (count > 0) {
    count = count - 1;
    timer.textContent = count;
  } else {
    adBox.style.display = "none";
    clearInterval(intervalId);
  }
}, 1000);

//슬라이드
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");
const slidesLength = slides.length;

const initSlideLength = () => {
  slideContainer.style.width = `${slidesLength}00vw`;
};
initSlideLength();

let currentSlideIndex = 0;
next.addEventListener("click", () => {
  if (currentSlideIndex >= slides.length - 1) return;
  currentSlideIndex++;
  slideContainer.style.transform = `translate(-${currentSlideIndex}00vw)`;
});
prev.addEventListener("click", () => {
  if (currentSlideIndex <= 0) return;
  currentSlideIndex--;
  slideContainer.style.transform = `translate(-${currentSlideIndex}00vw)`;
});
