// How to make Variables
// 1.
// const is Immutable
const a = 5;
const b = 2;
const myName = "nico";
// 2.
// let is Mutable
let c = 5;
let d = 2;
let myName2 = "daniel";

// send log() to console
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName)

// let variables can be changed
myName2 = "Seo hui je"
console.log("hello your new name is " + myName2)

// boolean
const amIFat = true; // or false
console.log(amIFat);

// null
// 할당된 값이 없다
const amIFat2 = null;
console.log(amIFat2);

// undefined
// 정의되어있지 않다
let something;
console.log(something)

// Arrays
// 여러값을 각각의 변수로 저장하는 것은 Fun하지 않고 cool하지 못함
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
// 매우 비효율적임

// 대신 Array를 사용하면 하나의 변수에 여러개의 값을 저장하는 것이 가능
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// 이렇게 모든 자료형을 다 담을 수 있다
const nonsense = [1, 2, "hello", false, null, true, undefined]
console.log(daysOfWeek, nonsense)

// 이러한 리스트들은 인덱싱을 통해 값을 하나씩 불러올 수 있다.
console.log(daysOfWeek[1])

// Objects
// 설명이 필요하지 않은 데이터 리스트들은 array로,
// 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const palyerFat = "little bit";

// 대신
// const player = {
//     name : "nico",
//     points : 10,
//     fat : true,
// };
// console.log(player);
// console.log(player.name);
// player.name
// 이렇게 오브젝트로 표현해주면 꺼내오기 쉽다.
// 오브젝트 안의 값을 바꾸고 싶다면
// player.name = "Daniel";
// player.points = player.points+10;
// console.log(player)
// 이런 식으로 값만 바꿔주면 끝!

// Functions part one
// 펑션은 클래스와 비슷한데 한번 만들어놓으면 계속 쓸 수 있는 기능조각(?)이다.
function sayHello(){
    console.log("Hello my name is C");
}
sayHello();

// Functions part two
// 펑션에서 특정 값을 바꿔서 내보낼려면(?)
function sayHello2(nameOfPerson, age){
    console.log("Hello my name is", nameOfPerson, "and I'm", age);
}

sayHello2("nico", 10);
sayHello2("Daniel", 20);
sayHello2("Sam", 25);

// 계산기(?)
function plus(a, b){
    console.log(a + b);
}
plus(8, 60);
function divide(a, b){ 
    console.log(a / b);
}
divide(60, 8);

const player = {
    name: "nico",
    sayHello: function (nameOfPerson) {
        console.log("hello",nameOfPerson);
    },
};

console.log(player.name)
player.sayHello("nico");

// Return
const age = 96;
function calculateKrAge(ageOfForeinger) {
    return ageOfForeinger + 2;
}

const krAge = calculateKrAge(age)
console.log(krAge);

// Conditionals
// const Age = prompt("How old are you?"); // prompt = 입력창
// console.log(Age, parseInt(Age));
// 입력창은 기본적으로 받은 값을 문자형으로 표기한다
// 만약 숫자로 받고 싶다면 이렇게 하면 된다
// const Age2 = parseInt(prompt("How old are you?"));
// console.log(Age2);

// Conditionals part 2, 3
// If
const Age3 = parseInt(prompt("How old are you?"));
console.log(isNaN(Age3));

if (isNaN(Age3) || Age3 < 0) {
    console.log("Please wirte a real positive number");
} else if (Age3 < 18) {
    console.log("You are too young to drink");
} else if (Age3 >= 18 && Age3 <= 50) { // && = And || = or 이란 뜻이다.
    console.log("You can drink");
} else if (Age3 > 50 && Age3 <= 80) {
    console.log("You sould exercise");
} else if (Age3 > 80) {
    console.log("You can do whatever you want");
}

// And 과 Or 의 차이점 정리
// Or
true || ture === ture
false || true === true
true || false === ture // Or은 하나로 참이면 결과값이 참이된다.
false || false === false // 이렇게 둘다 거짓이 되어야 비로소 결과값도 거짓이 된다.
// And
true && true === true // And은 이렇게 둘 다 참이여야만 결과값이 참이된다.
false && true === false // 하나라도 거짓이면 결과값은 거짓이 된다.
true && false === false
false && false === false