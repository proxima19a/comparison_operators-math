const existingUserLogin='the_best_user';
const existingUserPassword='12345678';

let userLogin=prompt('Введите логин', 'user');
userLogin=userLogin.trim();
let userPassword=prompt('Введите пароль', '1');
userPassword=userPassword.trim();

if (userLogin===existingUserLogin) {
  if (userPassword===existingUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
  } else {
    alert('Логин и (или) Пароль введены неверно!');
  }
}else{
  alert('Логин и (или) Пароль введены неверно!');
}
