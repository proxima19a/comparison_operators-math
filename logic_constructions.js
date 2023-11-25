// if else else if
const isFrontEndDeveloper=false;

if (isFrontEndDeveloper){
    console.log('You are Front-end developer. Wellcome!');
}else{
    console.log('You are not Front-end developer.');
}

const closingTime=8;
const currentTime=9;

if (currentTime>closingTime) {
    console.log('The shop is closed');
}else{
    console.log('The store is open. Come shopping');
}

const developerJobType='Front-end';
//const developerJobType='Back-end';
//const developerJobType='Full-stack';
//const developerJobType='';

if (developerJobType==='Front-end') {
    console.log('2000$');
} else if (developerJobType==='Back-end') {
    console.log('1500$');
} else if (developerJobType==='Full-stack') {
    console.log('3500$');
} else {
    console.log('Salary is not determined');
}

// switch case

switch (developerJobType) {
    case 'Front-end':
        console.log('2000$');
        break;
    case 'Back-end':
        console.log('1500$');
        break;
    case 'Full-stack':
        console.log('3500$');
        break;
    default:
        console.log('Salary is not determined');
}

// ? : замена if else

const favouriteDrink='Tea';
//const favouriteDrink='coffee';
/* let message='';
if (favouriteDrink==='Tea') {
    message='Your favourite drink is tea';
}else{
    message='Perhaps you like water';
}
 */

const message=favouriteDrink==='Tea'?'Your favourite drink is tea':'Perhaps you like water';
console.log('message',message);