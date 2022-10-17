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
// �Ҵ�� ���� ����
const amIFat2 = null;
console.log(amIFat2);

// undefined
// ���ǵǾ����� �ʴ�
let something;
console.log(something)

// Arrays
// �������� ������ ������ �����ϴ� ���� Fun���� �ʰ� cool���� ����
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
// �ſ� ��ȿ������

// ��� Array�� ����ϸ� �ϳ��� ������ �������� ���� �����ϴ� ���� ����
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// �̷��� ��� �ڷ����� �� ���� �� �ִ�
const nonsense = [1, 2, "hello", false, null, true, undefined]
console.log(daysOfWeek, nonsense)

// �̷��� ����Ʈ���� �ε����� ���� ���� �ϳ��� �ҷ��� �� �ִ�.
console.log(daysOfWeek[1])

// Objects
// ������ �ʿ����� ���� ������ ����Ʈ���� array��,
// ������ �ʿ��� ������ ��� ������ ����Ʈ���� object��!
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const palyerFat = "little bit";

// ���
// const player = {
//     name : "nico",
//     points : 10,
//     fat : true,
// };
// console.log(player);
// console.log(player.name);
// player.name
// �̷��� ������Ʈ�� ǥ�����ָ� �������� ����.
// ������Ʈ ���� ���� �ٲٰ� �ʹٸ�
// player.name = "Daniel";
// player.points = player.points+10;
// console.log(player)
// �̷� ������ ���� �ٲ��ָ� ��!

// Functions part one
// ����� Ŭ������ ����ѵ� �ѹ� ���������� ��� �� �� �ִ� �������(?)�̴�.
function sayHello(){
    console.log("Hello my name is C");
}
sayHello();

// Functions part two
// ��ǿ��� Ư�� ���� �ٲ㼭 ����������(?)
function sayHello2(nameOfPerson, age){
    console.log("Hello my name is", nameOfPerson, "and I'm", age);
}

sayHello2("nico", 10);
sayHello2("Daniel", 20);
sayHello2("Sam", 25);

// ����(?)
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