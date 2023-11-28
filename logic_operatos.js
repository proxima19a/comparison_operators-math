// && (И); || (ИЛИ); ! (НЕ)

const userAge=20;
if (userAge>5 && userAge<=18){
    console.log('User goes to school');
}

const programmingLanguage='JavaScript';
const experienceInYear=1;

if (programmingLanguage==='JavaScript' && experienceInYear===1){
    console.log('Welcome to the company!');
}
/* Если операнды не только типа Boolean, то: Если все значения truthy (приводятся к true), то 
возвращает последнее из них.
Если хотя бы одно falsy (приведется к false), то возвращает первое из них. */

const currentHours=10;
//const currentHours=6;
if (currentHours<8 || currentHours >20) {
    console.log('The office is closed. Come back tomorrow');
}else{
    console.log('Welcome to the office');
}
/* Если операнды не только типа Boolean, то:         
Если все значения falsy (приводятся к false), то возвращает последнее из них.
Если хотя бы одно truthy (приведется к true), то возвращает первое из них. */

const userNickname='Maxim';
const defaultNickname='User';
const nickname=userNickname || defaultNickname || 'noname'

const finalNickname=userNickname && 'User exists';

console.log('nickname', nickname);
console.log('finalNickname', finalNickname);

//const hasAccess=false;
/* const hasAccess=true;
console.log('!hasAcces',!hasAccess);
if (!hasAccess){
    console.log('Access is denied');
}else{
    console.log('Acces is allowed');
}

const answer=prompt('How old are you?');
!''
if (!answer){
    alert('Enter your full number of years');
}else{
    alert(`You are ${answer} years old.`);
} */

// Оператор объединения с null ??

console.log(false || 'Hello World'); // false, 0, '', NaN, undefined, null - является ложным
console.log(false ?? 'Hello World'); //  undefined, null - является ложным
console.log(null || 'Hello World');
console.log(null ?? 'Hello World');