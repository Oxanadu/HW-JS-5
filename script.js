
/*1. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и
выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************
Размер рамки должен определятся автоматически по самой длинной строке. Рамку
вывести в консоль.*/

console.log ('Задание 1');

function giveTab () {

let home = '* Домащняя работа: "Функции"';
let group = '* Выполнил: студент гр.' + prompt ('Введите номер группы');
let name = '* ' + prompt ('Введите ФИО');
let arr = [];
let max;

if(home.length > group.length) {
    max = home.length;
} 
    else {max = group.length}

if(name.length > max) {
    max = name.length;
}

for(let i = 0; i < max + 2; i++) {
    arr[i] = '*';
}

let arrHome = [];

for (i = 0; i < max - home.length; i++) {
    arrHome[i] = '';
}
    arrHome[i] = '*';

let arrGroup = [];

for (i = 0; i < max - group.length; i++) {
    arrGroup[i] = '';
}
    arrGroup[i] = '*';

let arrName = [];

for (i = 0; i < max - name.length; i++) {
    arrName[i] = '';
}
    arrName[i] = '*';

 console.log(arr.join(''));
 console.log(home, arrHome.join(' '));
 console.log(group, arrGroup.join(' '));
 console.log(name, arrName.join(' '));
 console.log(arr.join(''));
}
giveTab ();


/*2. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но
которая выведет перевернутый треугольник.*/

console.log ('Задание 2');

function giveTriangle () { 

let h = prompt('Введите количество рядов (Вариант 1)');
let arr = [];
let i;

for (i = 0; i < h; i++) {
    arr[i] = ' ';
}
arr[h] = '*';

console.log(arr.join(''));  

for (i = 1; i < h; i++) {
    arr[h-i] = '*';
    arr[h+i] = '*';
        
    console.log(arr.join(''));  
  }
}
giveTriangle ();

function giveTriangle1 () { 

let h = prompt('Введите количество строк (Вариант 2)');
let arr = [];
let i;

for (i = 0; i < 2*h-1; i++) {
    arr[i] = '*';  
}

console.log(arr.join(''));

for(i = 0; i < h - 1; i++) {
    arr[i] = ' ';
    arr[2 * h - (i + 2)] = ' ';

    console.log(arr.join(''));
    }   
}
giveTriangle1();



/*3. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты.
Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной
«собачки», знака подчеркивания, дефиса и точки, причем они не могут быть
первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или
«@@», «_@», «@-», «--» и т.п.
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя
может содержать только буквы, цифры, но не быть первыми и единственными в
имени, и точку;
c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не
может быть длиной менее 2 и более 11 символов.*/

//НЕ СМЕЙТЕСЬ, ПОЖАЛУЙСТА)))))

function mailVal() {

let strMail = prompt ('Введите e-mail');
let arrMail = strMail.match(/./gi);
let n = 0;
let t = 0;
let j = 0;
let a;
    
for(let i = 0; i < arrMail.length; i++) {
    if (arrMail[i] == '@') {break}
        else { 
        if (arrMail[i] == '.') {
            n++;   
            if (arrMail[i-1] == '_' || arrMail[i-1] == '-' ||  n > 1 || arrMail[i+1] == '@') {
              a = false;
            }  
        }
    
        if (arrMail[i] == '_') {
            t++;
            if (arrMail[i-1] == '.' || arrMail[i-1] == '-' || t > 1 || arrMail[i+1] == '@') {
               a = false; 
            } 
        }
        
        if (arrMail[i] == '-') {
            j++;   
            if (arrMail[i-1] == '_' || arrMail[i-1] == '.' ||  n > 1 || arrMail[i+1] == '@') {
               a = false;
            }  
        }
    }}
    
    let mailex = /^[a-z]{1}[a-z0-9._-]{1,}@[a-z]{3,}.[a-z]{2,11}$/gi;
    
    if(a != false) {
    console.log(mailex.test(strMail));
    }
        else{
        console.log(a);
    }
        }
        
    mailVal();