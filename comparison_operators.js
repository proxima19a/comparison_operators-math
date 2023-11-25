// Опрераторы сравнения > < >= <= == ===

console.log(5>10); //false
console.log(5<10); //true
console.log(5<=5); //true
console.log(5>=6); //false
console.log(10==10); //true

// Сравнение строк

console.log('JavaScript'<'javascript'); //true 'J'<'j'
console.log('J','J'.charCodeAt()); // J 74
console.log('j','j'.charCodeAt()); // j 106

// == vs ===
// == сравнивает значения ; === сравнивает типы

console.log('1'==1); // true
console.log('1'>=1); // true
console.log('200'>'21'); // false '0'<'1'
console.log(true==1); // true
console.log(false==0); // true

// ===
console.log(1===1); // true
console.log(true===1); // false

/* 5 > 4 → true
"ананас" > "яблоко" → false "а" < "я"
"2" > "12" → true "2" > "1"
undefined == null → true Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
undefined === null → false Строгое сравнение разных типов, поэтому false.
null == "\n0\n" → false null равен только undefined.
null === +"\n0\n" → false  Строгое сравнение разных типов. */  