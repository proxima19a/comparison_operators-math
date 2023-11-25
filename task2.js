const question1='Сколько будет 2 + 2?';
const question2='Сколько будет 2 * 2?';
const question3='У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
const question4='У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
const question5='Сколько будет 2 + 2 * 2?'

const correctAns1=4;
const correctAns2=4;
const correctAns3=1;
const correctAns4=12;
const correctAns5=6;

let correctAnswers=0;
let incorrectAnswers=0;

if (Number(prompt(question1,'0'))===correctAns1) {
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}

if (Number(prompt(question2,'0'))===correctAns2) {
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}

if (Number(prompt(question3,'0'))===correctAns3) {
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}

if (Number(prompt(question4,'0'))===correctAns4) {
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}

if (Number(prompt(question5,'0'))===correctAns5) {
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);
