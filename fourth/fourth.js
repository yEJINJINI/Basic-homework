//문제1)
const persons = [
  {
    name: "철수",
    age: 19,
    gender: "male",
  },
  {
    name: "짱구",
    age: 20,
    gender: "male",
  },
  {
    name: "유리",
    age: 21,
    gender: "female",
  },
];
console.log(persons);

//문제2)
const personCards = document.querySelector(".person-cards");

persons.forEach((person) => {
  let html = `<div class="card">
                <h3>이름: ${person.name}</h1>
                <p>나이: ${person.age}</p>
                <p>성별: ${person.gender}</p>
                <hr/>
               </div>`;
  personCards.insertAdjacentHTML("beforeend", html);
});

//문제3)
const findFemale = persons.find((person) => {
  return person.gender === "female";
});
console.log(findFemale);

//문제4)
const filterMale = persons.filter((person) => {
  return person["gender"] === "male";
});
console.log(filterMale);

//문제5)
const plusTenArray = persons.map(function (person) {
  return {
    name: person.name,
    age: person.age + 10,
    gender: person.gender,
  };
});
console.log(persons);
console.log(plusTenArray);

//문제6)
const sortArray = [...persons].sort((a, b) => {
  return b.age - a.age;
});
console.log(persons);
console.log(sortArray);

//문제7)
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const { 이름, 나이, 주소 } = user;
console.log({ 이름, 나이, 주소 });
// console.log(`${이름} ${나이} ${주소}`);

//문제8)
//1.2.
localStorage.setItem("user", JSON.stringify(user));

const currentUser = JSON.parse(localStorage.getItem("user"));
console.log("localStorage=> ", currentUser);
//3.
currentUser.나이 = 30;
console.log(currentUser);
//4.
localStorage.removeItem("user");
console.log(localStorage.getItem("user"));
