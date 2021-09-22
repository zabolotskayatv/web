//Идентификаторы

// Задание 1 - Объявите переменную и запишите в нее свое имя как литерал строки.
let name = 'Татьяна'
console.log('Привет я '+name)
// Задание 2 - Объявите константы и запишите в
// нее месяц и год своего рождения как литерал числа.
const a = 3
const b = 2002
console.log('я родилась '+a+' месяца '+b+ ' года')
// Задание 3 Создайте функцию, которая печатает приветствие и имеет три  аргумента: name, month, year.
function hello(name,month,year){
    let str = 'Привет '+name+', которая родилась '+month+' месяца '+year +' года!'
    return str
}
console.log(hello('Таня','3','2002'))
// Циклы
// Задание 4 Реализуйте функцию range(start: number, end: number):
// array которая отдает массив чисел из диапазона [-15, 15] включая крайние числа.
function range(start, end){
    let arr = [];
    let index = 0;
    for (let i = start; i <= end; i++, index++)
        arr[index] = i+1;
    return arr;
}
console.log(range(-15,15))
// Задание 5 Реализуйте функцию rangeOdd(start: number, end: number):
// array которая отдает массив четных чисел из диапазона [-15, 15] включая крайние числа.
function range0dd(start, end) {
    let result = [];
    let index = 0;
    for (let i = start; i <= end; i++, index++)
        if (i%2 === 1){
            result[index] = i++;
        }

    return result;
}
console.log(range0dd(-15,15))
// Функции Вложенные вызовы функций в цикле
// Задание 7 Реализуйте функцию average с сигнатурой average(a: number, b: number):
// number вычисляющую среднее арифметическое своих аргументов.
//average :: number
const average = (a,b) => {
  let s = Math.ceil(Math.atan2(a,b))
    return s
}
console.log(average(2,2))
// Задание 8 Реализуйте функцию square с сигнатурой koren(x: number):
// number вычисляющую корень из своего аргумента.
const square = (x) => {
   let s = Math.sqrt(x)
 return s
}
console.log(square(4))
// Задание 9 Реализуйте функцию cube с сигнатурой raznica(x: number):
// number вычисляющую (куб  - квадрат) своего аргумента.
const cube = (x) => {
    let s = x*x*x
  return s
}
console.log(cube(3))
// Задание 10 Вызовите функции raznica и koren в цикле от 1 до 5, вычисляя, соответственно
// корень и (куб  - квадрат)
// от переменной цикла. Передайте корень и (куб  - квадрат) на каждой итерации
// в функцию average. Результаты вычитаем в массив и возвращаем из функции minus.
