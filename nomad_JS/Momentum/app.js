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