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