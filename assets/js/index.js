// УВАГА! СТУДЕНТИ, ЯКІ НАВЧАЮТЬСЯ ЗА КВІГОЮ МЕНТОРКИ ВІКТОРІЇ, ІНФОРМАЦІЯ ДЛЯ ВАС! =)
// Вам потрібно виконати ці завдання тільки з використанням if-else. Завдання на switch та функції будуть трохи далі =)


// ЗАВДАННЯ:

// 1. Попросити користувача ввести послідовно два числа через prompt (дві операції).
// (Перетворення на Number зробити явним - це ще по одному кроку на кожне число)

// Якщо сумма цих двох чисел ділиться на 5 - вивести alert, що сума кратна 5
// Інакше - вивести, що сума не кратна 5
// (одна перевірка на if, і гілка else, якщо ні)

const num1 = Number(prompt('Enter the first number:')),
      num2 = Number(prompt('Enter the second number:')),
      sum = num1 + num2;

if (sum % 5 == 0) {
    alert('The sum is a multiple of 5');
} else {
    alert('The sum is not a multiple of 5');
}





// 2. Написати функцію, яка приймає сторону квадрата та повертає його площу

const a = Number(prompt('Enter length of the side of the square:'))
if (!isNaN(a)) {
    alert(`The area of the square equals ` + Math.pow(a, 2));
    // console.log(Math.pow(a, 2));
}




// 3. Написати функцію, яка виводить промптом "меню" у вигляді
//      "1 - Чай
//       2 - Кава
//      3 - Сік
//      4 - Вода"
// (перенос рядка у модалці можна зробити за допомогою "\n")
// і очікує від користувача цифру, що відповідає напою. При виборі чогось доступного - вивести алерт на кшталт
// "Ви обрали сік" або "Ви обрали воду" (залежно від того, що там користувач обрав). Якщо введено щось не те - вивести "Такого напою у нас нема"

// Задачу вирішити через оператор switch-case

const menu = Number(prompt('Enter the number of drink: \n 1 - tea \n 2 - coffee \n 3 - juice \n 4 - water \n'));

if (menu === 1) {
    alert('You have chosen tea');
} else if (menu === 2) {
    alert('You have chosen coffee');
} else if (menu === 3) {
    alert('You have chosen juice');
} else if (menu === 4) {
    alert('You have chosen water');
} else {
    alert('Sorry, you have entered wrong number! Choose one of the offered drinks!');
}





// 4. Користувач вводить суму покупки.
// Обчислити та вивести остаточну суму покупки з урахуванням знижки.
// Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн. Використати тернарний оператор


const amount = Number(prompt('Enter the amount of your purschase to get your discount: '))
const currency = ' UAH';
const discountMin = 3,
      discountMax = 5;

if (amount < 500) {
    alert('The amount entered is not enough to get a discount!')
} else if (amount >= 500 && amount < 800) {
    alert(amount - ((amount*discountMin)/100) + currency);
} else if (amount >= 800) {
    alert(amount - ((amount*discountMax)/100) + currency);
} else {
    alert('You entered incorrect value! Please try again!')
}



// 5. Реалізувати функцію, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку). Функція має повертати булеве значення: true, якщо ділиться без залишку, false - не ділиться без залишку.

const a = Number(prompt('Enter the first number: ')),
      b = Number(prompt('Enter the second number: '));

if (a % b === 0) {
    console.log('True');
    // console.log(a % b === 0);
} else {
    console.log('False');
    // console.log(a % b === 0);
}




// Задачка з * для допитливих: написати функцію, яка приймає три коефіцієнта в якості аргумента та знаходить корені квадратного рівняння
// (PS. Поки що ми повертати з функції одразу два значення не вмієм, тому хай функція їх просто виведе на консоль або алертом)
// (гугл - "формула дискримінанта квадратного рівняння")


const num1 = +(prompt('Enter the first number') || NaN),    // якщо вводити пусте значення то приведення в числовий тип конвертує пустий стрінг в 0, від цього вся формула розраховується з 0 і потрапляє в умову де discr = 0, а треба щоб пішло в останню умову де значення невіоме, тому тут я додала логічний оператор АБО ||. Тут він повертає перше правдиве значення (саме знанчення а не тру чи фолс), і пустий стрінг який не є числом а є фолсом переводить в NaN, а NaN потравляє в останню умову з помилковими значеннями
      num2 = +(prompt('Enter the second number') || NaN),
      num3 = +(prompt('Enter the third number') || NaN);   
          

const discr = Math.pow(num2, 2) - (4 * num1 * num3);

if (discr > 0) {
    const x1 = (- num2 + Math.sqrt(discr)) / (2 * num1);
    const x2 = (- num2 - Math.sqrt(discr)) / (2 * num1);
    alert ('The roots of this equation are:' + '\n' + x1 + '\n' + x2);
    console.log(discr);
} else if (discr === 0) {
    alert('The root of this equation is ' + discr)
} else if (discr < 0) {
    alert('The equation has no real roots.')
} else {
    alert ('You entered incorrect numbers! Please try again!')
    console.log(discr);
}